import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export type RootState = ReturnType<typeof rootReducer>;


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({

})


export default function configureStore() {
    const store = createStore(rootReducer);
    // const persistor = persistStore(store);
    return {
        store,
        // persistor
    };
};