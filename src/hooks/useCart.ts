import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, append, plus, minus } from '../modules/Cart';
import { itemType } from '../components/types'

export default function useCart() {
    const cartList = useSelector((state: RootState) => state.Cart.cartList);

    const dispatch = useDispatch();

    const onAppend = useCallback((itemInfo: itemType) => dispatch(append(itemInfo)), [dispatch]);
    const onRemove = useCallback((id: string) => dispatch(remove(id)), [dispatch]);
    const onPlus = useCallback((id: string) => dispatch(plus(id)), [dispatch]);
    const onMinus = useCallback((id: string) => dispatch(minus(id)), [dispatch]);


    return {
        cartList,
        onAppend,
        onRemove,
        onPlus,
        onMinus
    };
}