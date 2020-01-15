import { itemType } from '../components/types'
import { maxCartNum } from '../components/options'
import { ToastAndroid, Platform } from 'react-native'

//액션 type 선언
const APPEND = 'cart/APPEND' as const;
const REMOVE = 'cart/REMOVE' as const;
const PLUS = 'cart/PLUS' as const;
const MINUS = 'cart/MINUS' as const;

//액션 생성 함수 선언
export const append = (itemInfo: itemType) => ({ type: APPEND, itemInfo });
export const remove = (id: string) => ({ type: REMOVE, id });
export const plus = (id: string) => ({ type: PLUS, id })
export const minus = (id: string) => ({ type: MINUS, id })


//리듀서 type 지정
type CartAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof append>
    | ReturnType<typeof plus>
    | ReturnType<typeof minus>;

export type cartType = itemType & {
    count: number
}

type CartState = {
    cartList: cartType[]
}

const initialState: CartState = {
    cartList: []
};

//리듀서
function Cart(state: CartState = initialState, action: CartAction): CartState {
    switch (action.type) {
        case APPEND:
            //중복확인
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].id === action.itemInfo.id) {
                    if (Platform.OS === 'android') ToastAndroid.show('이미 있는 상품입니다', ToastAndroid.SHORT)
                    return state
                }
            }
            return { ...state, cartList: state.cartList.concat({ ...action.itemInfo, count: 1 }) }
        case REMOVE:
            return { ...state, cartList: state.cartList.filter(val => val.id !== action.id) }
        case PLUS:
            const plused = state.cartList.map((item) =>
                item.id !== action.id || item.count >= maxCartNum
                    ? item
                    : { ...item, count: item.count + 1 }
            )
            return { ...state, cartList: plused }
        case MINUS:
            const minused = state.cartList.map((item) =>
                item.id !== action.id || item.count <= 1
                    ? item
                    : { ...item, count: item.count - 1 }
            )
            return { ...state, cartList: minused }
        default:
            return state;
    }
}

export default Cart;