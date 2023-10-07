import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function AddTodo({ add, selectedTodo, editTodo }) {
  const [title, setTitle] = useState('')
  // const [status, setStatus] = useState(false)

  const addTodo = (e) => {
    e.preventDefault()
    if (!title) {
      return
    }
    if (!selectedTodo) {
      add({
        id: new Date().getMilliseconds(),
        title,
        status: 1,
      })
    } else {
      editTodo({
        ...selectedTodo,
        title,
        status,
      })
    }
    // setStatus(false)
    setTitle('')
  }

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo?.title)
      // setStatus(selectedTodo?.status)
    }
  }, [selectedTodo])

  return (
    <form onSubmit={addTodo} className='mb-3'>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Todo title
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      {/* <div className='mb-3 form-check'>
        <input
          type='checkbox'
          className='form-check-input'
          id='exampleCheck1'
          checked={status}
          onChange={(e) => setStatus(e.target.checked)}
        />
        <label className='form-check-label' htmlFor='exampleCheck1'>
          Finish
        </label>
      </div> */}
      <button type='submit' className='btn btn-success'>
        {selectedTodo ? 'Edit' : ' Add'}
      </button>
    </form>
  )
}

AddTodo.propTypes = {
  add: PropTypes.func,
  selectedTodo: PropTypes.any,
  editTodo: PropTypes.func,
}
export default AddTodo
