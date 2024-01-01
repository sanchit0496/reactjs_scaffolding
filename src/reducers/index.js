// store/reducers/index.js
import { combineReducers } from 'redux'
import authReducer from './AppReducer' // Create this file or adjust as needed

const rootReducer = combineReducers({
  authReducer: authReducer,
  // Add more reducers as needed
})

export default rootReducer
