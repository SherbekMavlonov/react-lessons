/* eslint-disable react-refresh/only-export-components */
import './App.css'
import { connect } from 'react-redux'
import { TODO_ACTION_TYPES } from './redux/action-types/action-types'
import { getTodos } from './redux/actions/todo-actions'
import { useEffect } from 'react'

function App(props) {
  useEffect(() => {
    props.getTodo()
  }, [])
  return (
    <>
      <button onClick={props.add}>Add</button>

      {props.todos.map?.((todo, idx) => (
        <h1 key={idx}>{todo?.title}</h1>
      ))}
    </>
  )
}

export default connect(
  (state) => ({
    todos: state.todos,
  }),
  (dispatch) => ({
    add: () =>
      dispatch({
        type: TODO_ACTION_TYPES.ADD_TODO,
        payload: {
          title: `Hello world ${Math.floor(Math.random() * 1000)}`,
        },
      }),
    getTodo: () => dispatch(getTodos()),
  })
)(App)
