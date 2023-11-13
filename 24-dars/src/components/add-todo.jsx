/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { TODO_ACTION_TYPES } from '../redux/action-types/action-types'

function AddTodo({ add }) {
  const [value, setValue] = useState('')
  const addTodo = () => {
    add(value)
    setValue('')
  }
  return (
    <div className='d-flex '>
      <Form.Control
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder='Todo title'
      />
      <Button onClick={addTodo}>Add</Button>
    </div>
  )
}
export default connect(null, (dispatch) => ({
  add: (todoTitle) =>
    dispatch({
      type: TODO_ACTION_TYPES.ADD_TODO,
      payload: { title: todoTitle, id: new Date().getTime() },
    }),
}))(AddTodo)

AddTodo.propTypes = {
  add: PropTypes.func,
}
