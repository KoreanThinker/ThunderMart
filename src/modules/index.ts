import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import Address from './Address';
import Cart from './Cart';
import Phone from './Phone';
import Shop from './Shop';
import ItemSearch from './ItemSearch'
import Auth from './Auth'


export type RootState = ReturnType<typeof rootReducer>;


const rootReducer = combineReducers({
    Shop: persistReducer({ key: 'Shop', storage: AsyncStorage }, Shop),
    Address: persistReducer({ key: 'Address', storage: AsyncStorage }, Address),
    Phone: persistReducer({ key: 'Phone', storage: AsyncStorage }, Phone),
    ItemSearch: persistReducer({ key: 'ItemSearch', storage: AsyncStorage }, ItemSearch),
    Auth: persistReducer({ key: 'Auth', storage: AsyncStorage }, Auth),
    Cart
})


export default function configureStore() {
    const store = createStore(rootReducer);
    const persistor = persistStore(store);
    return { store, persistor };
};