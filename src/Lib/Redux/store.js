import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import logger from 'redux-logger'

/* Import Reducer here */
import counter from './Slice/counter'

const middleware = [...getDefaultMiddleware()]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const reducer = combineReducers({
  /* Pass reducer here */
  counter,
})
const store = configureStore({
  reducer,
  middleware,
})
export default store
