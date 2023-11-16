import { useSelector, useDispatch } from 'react-redux'
import { addTodo, removeTodo } from './redux/reducers/todo-reducer'
import './App.css'

function App() {
  const { todos } = useSelector((state) => state.todo)

  const dispatch = useDispatch()

  const add = () => {
    dispatch(
      addTodo({
        title: 'Hello world' + Math.floor(Math.random() * 1000),
        isCompleted: false,
        id: new Date().getTime(),
      })
    )
  }
  const remove = (id) => {
    dispatch(removeTodo(id))
  }
  return (
    <>
      <button onClick={add}>Add</button>
      {todos.map((todo) => (
        <div key={todo.id} className='flex'>
          <h1>{todo.title}</h1>
          <button onClick={() => remove(todo.id)}>Delete</button>
        </div>
      ))}
    </>
  )
}

// export default connect(
//   (state) => ({ state }),
//   (dispatch) => ({
//     add: () =>
//       dispatch(
//         addTodo({
//           title: 'Hello world',
//           id: 1,
//         })
//       ),
//   })
// )(App)

export default App
