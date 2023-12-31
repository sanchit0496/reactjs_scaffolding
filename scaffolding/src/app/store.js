// src/app/store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import authReducer from '../slice/authSlice';
import taskReducer from '../slice/taskSlice';  // Import your task reducer
import { api } from '../slice/taskSlice';  // Import your RTK Query api object

const rootReducer = combineReducers({
  auth: authReducer,
  task: taskReducer,  // Include the task reducer
  [api.reducerPath]: api.reducer,  // Include the RTK Query reducer
  // Add other reducers here
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Add setupListeners after creating the store
setupListeners(store);

export default store;
