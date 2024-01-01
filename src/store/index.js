// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'reducers/index';

const store = configureStore({
  reducer: rootReducer,
  // Add middleware or other configurations if needed
});

export default store;
