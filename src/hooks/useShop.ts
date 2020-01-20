import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { change } from '../modules/Shop';
import { shopNameType } from '../components/types';

export default function useShop() {
    const shopType = useSelector((state: RootState) => state.Shop.shopType);

    const dispatch = useDispatch();

    const onChange = useCallback((shopType: shopNameType | null) => dispatch(change(shopType)), [dispatch]);


    return {
        shopType,
        onChange
    };
}