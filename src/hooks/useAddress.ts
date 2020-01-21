import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, append, change } from '../modules/Address';

export default function useAddress() {
    const presentAddress = useSelector((state: RootState) => state.Address.presentAddress);
    const recentAddresses = useSelector((state: RootState) => state.Address.recentAddresses);

    const dispatch = useDispatch();

    const onRemove = useCallback((id: number) => dispatch(remove(id)), [dispatch]);
    const onAppend = useCallback((fullAddress: string, basicAddress: string, contractionAddress: string) => dispatch(append(fullAddress, basicAddress, contractionAddress)), [dispatch]);
    const onChange = useCallback((id: number) => dispatch(change(id)), [dispatch]);

    return {
        presentAddress,
        recentAddresses,
        onRemove,
        onAppend,
        onChange
    };
}