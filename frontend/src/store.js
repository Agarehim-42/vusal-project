import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services/userApi';

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer, // API reducer-i əlavə edin
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware), // Middleware əlavə edin
});

export default store;
