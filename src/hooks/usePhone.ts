import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react';
import { change } from '../modules/Phone';

export default function usePhone() {
    const number = useSelector((state: RootState) => state.Phone.number);

    const dispatch = useDispatch();

    const onChange = useCallback((number: string) => dispatch(change(number)), [dispatch]);


    return {
        number,
        onChange
    };
}