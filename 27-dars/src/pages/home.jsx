// import { useDispatch, useSelector } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { add, fetchTodos } from '../store/reducers/todo-reducer'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// import { add } from './store/reducers/todo-reducer'

function App() {
  // const dispatch = useDispatch()
  const { todos, isLoading, isRejected } = useSelector(
    (state) => state.todoReducer
  )
  const dispatch = useDispatch()
  // console.log(state)
  const addTodo = () =>
    dispatch(add({ title: 'Hello world ' + Math.floor(Math.random() * 1000) }))

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  if (isRejected) {
    return <h1>Something wrong !!!, please try again</h1>
  }
  return isLoading ? (
    <h1> Loading</h1>
  ) : (
    <div>
      {todos.map((todo, idx) => (
        <h1 key={idx}>
          <Link to={String(todo.id)}>
            {todo.id}. {todo.title}
          </Link>
        </h1>
      ))}

      <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default App
