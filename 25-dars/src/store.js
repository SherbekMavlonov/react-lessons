import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// import logger from 'redux-logger'

import { todoReducer } from './redux/reducers/todo-reducer'

const logger = (state) => (next) => (action) => {
  console.log(
    `%c prev state`,
    'border-left: 5px solid yellow; border-radius: 5px;color: #ccc;',
    state.getState()
  )
  console.log(
    `%c action`,
    'border-left: 5px solid yellow; border-radius: 5px;color: blue;',
    action
  )

  // if (!action.payload.includes('Hello world')) {
  next(action)
  // }
  console.log(
    `%c next state`,
    'border-left: 5px solid yellow; border-radius: 5px;color: green;',
    state.getState()
  )
}

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

// const foo = (a) => (b) => (c) => a + b + c

// const result = foo(1)(2)(3)
// console.log(result)
