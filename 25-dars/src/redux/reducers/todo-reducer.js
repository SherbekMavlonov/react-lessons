import { TODO_ACTION_TYPES } from '../action-types/action-types'

export function todoReducer(
  state = {
    todos: [],
  },
  action
) {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      state = { ...state, todos: [...state.todos, action.payload] }
      break
    case TODO_ACTION_TYPES.GET_TODOS:
      state = { ...state, todos: action.payload }
      break
    default:
      break
  }
  return state
}
