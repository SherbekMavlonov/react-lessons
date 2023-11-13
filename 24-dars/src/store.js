import { createStore } from 'redux'
import { todoReducer } from './redux/reducers/todo-reducer'

export const store = createStore(todoReducer)
