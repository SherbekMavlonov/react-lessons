import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// export const add = createAction('test1')

// const deleteTodo = createAction('test2')

// export default createReducer(
//   {
//     todos: [],
//   },
//   // (builder) => {
//   //   builder.addCase(add.tye, (state, action) => state.todos.push(action.payload))
//   // }
//   {
//     [add.type]: (state, action) => {
//       state.todos.push(action.payload)
//     },
//   }
// )

export const fetchTodos = createAsyncThunk('users', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data
})
export const fetchTodoById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (id) => {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/' + id
    )
    const data = await response.json()
    return data
  }
)

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
    isLoading: false,
    isRejected: false,
    selectedTodo: null,
  },
  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false
      state.todos = action.payload
    }),
      builder.addCase(fetchTodos.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(fetchTodos.rejected, (state) => {
        state.isRejected = true
      }),
      builder.addCase(fetchTodoById.fulfilled, (state, action) => {
        state.isLoading = false
        state.selectedTodo = action.payload
      }),
      builder.addCase(fetchTodoById.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(fetchTodoById.rejected, (state) => {
        state.isRejected = true
      })
  },
})

export default todoSlice
export const { add } = todoSlice.actions
