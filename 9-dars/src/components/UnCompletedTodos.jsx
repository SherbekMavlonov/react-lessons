import PropTypes from 'prop-types'
import Todo from './Todo'

function UnCompletedTodos({ todos, deleteTodo, changeStatus, setEditedTodo }) {
  return (
    <ul className='list-group'>
      {' '}
      {todos
        ?.filter((todo) => todo.status === 1)
        .map?.((todo) => (
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
export default UnCompletedTodos

UnCompletedTodos.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  changeStatus: PropTypes.func,
  setEditedTodo: PropTypes.func,
}
