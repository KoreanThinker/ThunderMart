import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { signIn, signOut } from '../modules/Auth';
import { signInType } from '../components/types';

export default function useAuth() {
    const type = useSelector((state: RootState) => state.Auth.type);
    const token = useSelector((state: RootState) => state.Auth.token);

    const dispatch = useDispatch();

    const onSignIn = useCallback((type: signInType, token: string) => dispatch(signIn(type, token)), [dispatch]);
    const onSignOut = useCallback(() => dispatch(signOut()), [dispatch]);


    return {
        type,
        token,
        onSignIn,
        onSignOut
    };
}