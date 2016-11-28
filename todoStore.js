import { createStore } from 'redux'

// Import the reducer and create a store
import { reducer } from './todoReducer'
const store = createStore(reducer)
export default store