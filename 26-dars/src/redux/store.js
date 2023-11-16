import { configureStore } from '@reduxjs/toolkit'
import { todoSlice } from './reducers/todo-reducer'

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
})
