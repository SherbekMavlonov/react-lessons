// // import { useReducer } from 'react'
// // import { createStore, applyMiddleware, combineReducers } from 'redux'
// // import logger from 'redux-logger'
// // const reducer = (state, action) => {
// //   switch (action.type) {
// //     case 'INC':
// //       state = { ...state, count: state.count + 1 }
// //       break
// //     case 'DEC':
// //       state = { ...state, count: state.count - 1 }
// //       break

// //     default:
// //       break
// //   }

// //   return state
// // }

// // const initialValue = {
// //   count: 0,
// // }

// // const counterReducer = (state = { count: 0 }, action) => {
// //   switch (action.type) {
// //     case 'INC':
// //       state = { ...state, count: state.count + 1 }
// //       break

// //     default:
// //       break
// //   }
// //   return state
// // }
// // const todoReducer = (state = { todos: [] }, action) => {
// //   switch (action.type) {
// //     case 'ADD_TODO':
// //       state = { ...state }
// //       break

// //     default:
// //       break
// //   }
// //   return state
// // }

// // const store = createStore(
// //   combineReducers({ counterReducer, todo: todoReducer }),
// //   {
// //     counterReducer: { count: 0 },
// //   },
// //   applyMiddleware(logger)
// // )

// // console.log(store.getState())

// // store.subscribe((state) => {
// //   console.log(state)
// // })
// // console.log(store.getState())
// // store.dispatch({ type: 'INC' })
// // store.dispatch({ type: 'INC' })
// // console.log(store.getState())

// // import { Provider } from 'react-redux'
// // import { createStore } from 'redux'
// // import Count from './components/count'

// // const countReducer = (state = { count: 0 }, action) => {
// //   switch (action.type) {
// //     case 'INC':
// //       state = { ...state, count: state.count + 1 }
// //       break

// //     case 'DEC':
// //       state = { ...state, count: state.count - 1 }
// //       break
// //     default:
// //       break
// //   }
// //   return state
// // }

// // const store = createStore(countReducer)

// function App() {
//   // const [state, dispatch] = useReducer(reducer, initialValue)
//   // const inc = () => {
//   //   dispatch({ type: 'INC' })
//   // }
//   // const dec = () => {
//   //   dispatch({ type: 'DEC' })
//   // }
//   return (
//     // <Provider store={store}>
//     <>
//       <h1>Hello world</h1>
//       <Count />
//     </>
//     // </Provider>
//   )
// }

// export default App
import AddTodo from './components/add-todo'
import TodoList from './components/todo-list'
const App = () => {
  return (
    <div className='container mt-4'>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
