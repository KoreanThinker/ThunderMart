import { signInType } from "../components/types";

//액션 type 선언
const SIGNIN = 'auth/SIGNIN' as const;
const SIGNOUT = 'auth/SIGNOUT' as const;

//액션 생성 함수 선언
export const signIn = (type: signInType, token: string, settionId: string) => ({ type: SIGNIN, signType: type, token, settionId });
export const signOut = () => ({ type: SIGNOUT });

//리듀서 type 지정
type AuthAction =
    | ReturnType<typeof signIn>
    | ReturnType<typeof signOut>;


type SignState = {
    type: signInType | null;
    token: string | null;
    sessionId: string | null;
}

const initialState: SignState = {
    type: null,
    token: null,
    sessionId: null
};

//리듀서
function Auth(state: SignState = initialState, action: AuthAction): SignState {
    switch (action.type) {
        case SIGNIN:
            return { type: action.signType, token: action.token, sessionId: action.settionId }
        case SIGNOUT:
            return initialState
        default:
            return state;
    }
}

export default Auth;