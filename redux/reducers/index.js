import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'
import lansiReducer from './lansiReducer'

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
  lansi:lansiReducer
})

export default rootReducer
