import { TODO_ACTION_TYPES } from '../action-types/action-types'

const initial = {
  todos: [
    {
      id: 1,
      title: 'Maktabga borishim kerak',
    },
  ],
}

const removeTodo = (id, todos) => todos.filter((todo) => todo.id !== id)

export const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      state = {
        ...state,
        todos: [...state.todos, action.payload],
      }
      break
    case TODO_ACTION_TYPES.REMOVE_TODO:
      state = {
        ...state,
        todos: removeTodo(action.payload, state.todos),
      }
      break
    default:
      break
  }
  return state
}
