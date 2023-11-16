import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      // state = { ...state, todos: [...state.todos, action.payload] }

      state.todos = [...state.todos, action.payload]
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions
