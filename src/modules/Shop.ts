import { shopNameType } from "../components/types";

//액션 type 선언
const CHANGE = 'shop/CHANGE' as const;

//액션 생성 함수 선언
export const change = (shopType: shopNameType | null) => ({ type: CHANGE, shopType });

//리듀서 type 지정
type ShopAction =
    | ReturnType<typeof change>;


type ShopState = {
    shopType: shopNameType | null;
}

const initialState: ShopState = {
    shopType: null,
};

//리듀서
function Shop(state: ShopState = initialState, action: ShopAction): ShopState {
    switch (action.type) {
        case CHANGE:
            return { ...state, shopType: action.shopType }
        default:
            return state;
    }
}

export default Shop;