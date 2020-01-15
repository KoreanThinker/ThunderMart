import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, append } from '../modules/Address';

export default function useAddress() {
    const presentAddress = useSelector((state: RootState) => state.Address.presentAddress);
    const recentAddresses = useSelector((state: RootState) => state.Address.recentAddresses);

    const dispatch = useDispatch();

    const onRemove = useCallback((id: number) => dispatch(remove(id)), [dispatch]);
    const onAppend = useCallback((text: string, addressId: string) => dispatch(append(text, addressId)), [dispatch]);

    return {
        presentAddress,
        recentAddresses,
        onRemove,
        onAppend
    };
}