import { ACTION_TYPES } from '../constants/actionTypes'

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.COLOR:
      state.color = action.payload
      break
    case ACTION_TYPES.MODAL:
      state.isOpen = !state.isOpen
      break
  }

  return { ...state }
}
