import {configureStore} from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import thunk from 'redux-thunk'
import reducer from "./slices"


const persistConfig = {
    key: 'root',
    storage
};


const persistedReducer = persistReducer(persistConfig, reducer);


const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});


export type AppDispatch = typeof store.dispatch
export type IStore = ReturnType<typeof store.getState>

export * from "./slices"

export default store;
