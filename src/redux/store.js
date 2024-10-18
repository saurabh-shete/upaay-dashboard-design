// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'register', 'rehydrate'],
        // Ignore these paths in the state
        ignoredPaths: ['tasks.someNonSerializableField'],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
