/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { TODO_ACTION_TYPES } from '../redux/action-types/action-types'

function Todo({ title, remove, id }) {
  return (
    <div className='d-flex justify-content-between mb-3'>
      <h2>{title}</h2>
      <Button variant='danger' onClick={() => remove(id)}>
        DELETE
      </Button>
    </div>
  )
}
export default connect(null, (dispatch) => ({
  remove: (id) =>
    dispatch({ type: TODO_ACTION_TYPES.REMOVE_TODO, payload: id }),
}))(Todo)

Todo.propTypes = {
  title: PropTypes.string,
  remove: PropTypes.func,
  id: PropTypes.number,
}
