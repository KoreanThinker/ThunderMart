//액션 type 선언
const APPEND = 'address/APPEND' as const;
const REMOVE = 'address/REMOVE' as const;

//액션 생성 함수 선언
export const append = (text: string, addressId: string) => ({ type: APPEND, text, addressId });
export const remove = (id: number) => ({ type: REMOVE, id });

//리듀서 type 지정
type AddressAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof append>;

export type addressType = {
    text: string;
    addressId: string;
    id: number;
}

type AddressState = {
    presentAddress: addressType | null;
    recentAddresses: addressType[];
}

const initialState: AddressState = {
    presentAddress: null,
    recentAddresses: [],
};

//리듀서
function Address(state: AddressState = initialState, action: AddressAction): AddressState {
    switch (action.type) {
        case REMOVE:
            return { ...state, presentAddress: state.presentAddress !== null && state.presentAddress?.id === action.id ? null : state.presentAddress, recentAddresses: state.recentAddresses.filter(val => val.id !== action.id) }
        case APPEND:
            const id = Math.max(...state.recentAddresses.map(val => val.id));
            const newAddress = { text: action.text, addressId: action.addressId, id: id === -Infinity ? 0 : id + 1 }
            return { ...state, recentAddresses: state.recentAddresses.concat(newAddress), presentAddress: newAddress }
        default:
            return state;
    }
}

export default Address;