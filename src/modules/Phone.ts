//액션 type 선언
const CHANGE = 'phone/CHANGE' as const;

//액션 생성 함수 선언
export const change = (number: string) => ({ type: CHANGE, number });

//리듀서 type 지정
type PhoneAction =
    | ReturnType<typeof change>;


type PhoneState = {
    number: string | null;
}

const initialState: PhoneState = {
    number: null,
};

//리듀서
function Phone(state: PhoneState = initialState, action: PhoneAction): PhoneState {
    switch (action.type) {
        case CHANGE:
            return { ...state, number: action.number }
        default:
            return state;
    }
}

export default Phone;