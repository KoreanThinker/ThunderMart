import { itemType } from '../components/types'
import { maxCartNum } from '../components/options'
import { ToastAndroid, Platform } from 'react-native'

//액션 type 선언
const APPEND = 'cart/APPEND' as const;
const REMOVE = 'cart/REMOVE' as const;
const TOGGLEREMOVE = 'cart/TOGGLEREMOVE' as const;
const PLUS = 'cart/PLUS' as const;
const MINUS = 'cart/MINUS' as const;
const TOGGLE = 'cart/TOGGLE' as const;
const TOGGLEALL = 'cart/TOGGLEALL' as const;
const REMOVEALL = 'cart/REMOVEALL' as const;

//액션 생성 함수 선언
export const append = (itemInfo: itemType) => ({ type: APPEND, itemInfo });
export const remove = (id: string) => ({ type: REMOVE, id });
export const toggleRemove = () => ({ type: TOGGLEREMOVE });
export const plus = (id: string) => ({ type: PLUS, id })
export const minus = (id: string) => ({ type: MINUS, id })
export const toggle = (id: string) => ({ type: TOGGLE, id })
export const toggleAll = () => ({ type: TOGGLEALL })
export const removeAll = () => ({ type: REMOVEALL })


//리듀서 type 지정
type CartAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof append>
    | ReturnType<typeof toggleRemove>
    | ReturnType<typeof plus>
    | ReturnType<typeof minus>
    | ReturnType<typeof toggle>
    | ReturnType<typeof toggleAll>
    | ReturnType<typeof removeAll>;

export type cartType = itemType & {
    count: number,
    toggleOn: boolean
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
            return { ...state, cartList: [{ ...action.itemInfo, count: 1, toggleOn: false }, ...state.cartList] }
        case REMOVE:
            return { ...state, cartList: state.cartList.filter(val => val.id !== action.id) }
        case TOGGLEREMOVE:
            return { ...state, cartList: state.cartList.filter(val => !val.toggleOn) }
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
        case TOGGLE:
            return { ...state, cartList: state.cartList.map(item => action.id == item.id ? { ...item, toggleOn: !item.toggleOn } : item) }
        case TOGGLEALL:
            let isAllOn = true
            for (let i = 0; i < state.cartList.length; i++) {
                if (state.cartList[i].toggleOn == false) {
                    isAllOn = false;
                    break;
                }
            }
            return { ...state, cartList: state.cartList.map(item => { return { ...item, toggleOn: !isAllOn } }) }
        case REMOVEALL:
            return { ...state, cartList: [] }
        default:
            return state;
    }
}

export default Cart;