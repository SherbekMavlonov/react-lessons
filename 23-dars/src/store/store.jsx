import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer'

export const Context = createContext(null)

const initialState = {
  todos: [],
}

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider
      value={{
        todos: state.todos,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  )
}

TodoContextProvider.propTypes = {
  children: PropTypes.element,
}
