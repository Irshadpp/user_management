import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const appStore = configureStore(
    {
        reducer:{
            user: persistedReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST'], // Ignore non-serializable actions from redux-persist
                },
            }),
    },
)

export const persistor = persistStore(appStore)
export default appStore;