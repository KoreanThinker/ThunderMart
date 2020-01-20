import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { remove, append, removeAll } from '../modules/ItemSearch';

export default function useItemSearch() {
    const searchHistorys = useSelector((state: RootState) => state.itemSearch.searchHistorys);

    const dispatch = useDispatch();

    const onAppend = useCallback((description: string) => dispatch(append(description)), [dispatch]);
    const onRemove = useCallback((id: number) => dispatch(remove(id)), [dispatch]);
    const onRemoveAll = useCallback(() => dispatch(removeAll()), [dispatch]);


    return {
        searchHistorys,
        onAppend,
        onRemove,
        onRemoveAll
    };
}