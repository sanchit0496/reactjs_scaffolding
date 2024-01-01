// store/index.js
import { createStore } from 'redux';
import rootReducer from '../reducers/index'; // Create this file or adjust as needed

const store = createStore(rootReducer);

export default store;
