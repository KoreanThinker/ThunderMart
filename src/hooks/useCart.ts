import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, append, plus, minus, toggleRemove, toggle, toggleAll, removeAll } from '../modules/Cart';
import { itemType } from '../components/types'

export default function useCart() {
    const cartList = useSelector((state: RootState) => state.Cart.cartList);

    const dispatch = useDispatch();

    const onAppend = useCallback((itemInfo: itemType) => dispatch(append(itemInfo)), [dispatch]);
    const onRemove = useCallback((id: string) => dispatch(remove(id)), [dispatch]);
    const onToggleRemove = useCallback(() => dispatch(toggleRemove()), [dispatch]);
    const onPlus = useCallback((id: string) => dispatch(plus(id)), [dispatch]);
    const onMinus = useCallback((id: string) => dispatch(minus(id)), [dispatch]);
    const onToggle = useCallback((id: string) => dispatch(toggle(id)), [dispatch]);
    const onToggleAll = useCallback(() => dispatch(toggleAll()), [dispatch]);
    const onRemoveAll = useCallback(() => dispatch(removeAll()), [dispatch]);


    return {
        cartList,
        onAppend,
        onRemove,
        onToggleRemove,
        onPlus,
        onMinus,
        onToggle,
        onToggleAll,
        onRemoveAll
    };
}