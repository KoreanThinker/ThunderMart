import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { signIn, signOut } from '../modules/Auth';
import { signInType } from '../components/types';

export default function useAuth() {
    const type = useSelector((state: RootState) => state.Auth.type);
    const token = useSelector((state: RootState) => state.Auth.token);
    const sessionId = useSelector((state: RootState) => state.Auth.sessionId);

    const dispatch = useDispatch();

    const onSignIn = useCallback((type: signInType, token: string, sessionId: string) => dispatch(signIn(type, token, sessionId)), [dispatch]);
    const onSignOut = useCallback(() => dispatch(signOut()), [dispatch]);


    return {
        type,
        token,
        sessionId,
        onSignIn,
        onSignOut
    };
}