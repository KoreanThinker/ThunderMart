import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Address from './Address';
import Cart from './Cart';
import Phone from './Phone';

export type RootState = ReturnType<typeof rootReducer>;


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};

const rootReducer = combineReducers({
    Address: persistReducer(persistConfig, Address),
    Phone: persistReducer(persistConfig, Phone),
    Cart
})


export default function configureStore() {
    const store = createStore(rootReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};