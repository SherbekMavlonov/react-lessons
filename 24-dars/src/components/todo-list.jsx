/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Todo from './todo'
function TodoList(props) {
  return (
    <div className='mt-5'>
      {props.todos.map((todo) => (
        <Todo key={todo?.id} {...todo} />
      ))}
    </div>
  )
}
export default connect(
  (state) => ({ todos: state.todos }),
  () => ({})
)(TodoList)

TodoList.propTypes = {
  todos: PropTypes.array,
}
