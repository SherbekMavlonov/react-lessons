import PropTypes from 'prop-types'
import Todo from './Todo'

function AllTodos({ todos, deleteTodo, changeStatus, setEditedTodo }) {
  return (
    <ul className='list-group'>
      {' '}
      {todos?.map?.((todo) => (
        <Todo
          {...todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          done={changeStatus}
          setEditedTodo={setEditedTodo}
        />
      ))}
    </ul>
  )
}
export default AllTodos

AllTodos.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  changeStatus: PropTypes.func,
  setEditedTodo: PropTypes.func,
}
