//액션 type 선언
const APPEND = 'itemSearch/APPEND' as const;
const REMOVE = 'itemSearch/REMOVE' as const;
const REMOVEALL = 'itemSearch/REMOVEALL' as const;

//액션 생성 함수 선언
export const append = (description: string) => ({ type: APPEND, description });
export const remove = (id: number) => ({ type: REMOVE, id });
export const removeAll = () => ({ type: REMOVEALL })


//리듀서 type 지정
type ItemSearchAction =
    | ReturnType<typeof remove>
    | ReturnType<typeof append>
    | ReturnType<typeof removeAll>;

export type searchType = {
    description: string,
    id: number
}

type ItemSearchState = {
    searchHistorys: searchType[]
}

const initialState: ItemSearchState = {
    searchHistorys: []
};

//리듀서
function ItemSearch(state: ItemSearchState = initialState, action: ItemSearchAction): ItemSearchState {
    switch (action.type) {
        case APPEND:
            //중복확인
            let newList = state.searchHistorys.filter((val, index) => val.description !== action.description && index < 29)
            const id = Math.max(...state.searchHistorys.map(val => val.id));
            return { ...state, searchHistorys: [{ id: id === -Infinity ? 0 : id + 1, description: action.description }, ...newList] }
        case REMOVE:
            return { ...state, searchHistorys: state.searchHistorys.filter(val => val.id !== action.id) }
        case REMOVEALL:
            return { ...state, searchHistorys: [] }
        default:
            return state;
    }
}

export default ItemSearch;