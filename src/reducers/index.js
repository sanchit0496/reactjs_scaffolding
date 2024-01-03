import { combineReducers } from 'redux'
import authReducer from './AppReducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  // Add more reducers as needed
})

export default rootReducer
