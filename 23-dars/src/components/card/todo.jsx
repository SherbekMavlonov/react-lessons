import PropTypes from 'prop-types'
import { FaTrashCan } from 'react-icons/fa6'
import { AiOutlineEdit, AiOutlineCheck } from 'react-icons/ai'

import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { useContext, useState } from 'react'
import { Context } from '../../store'
import { TodoActions } from '../../reducer/actions'
import { Input } from '../ui/input'

export const Todo = ({ title, id, finish }) => {
  const [value, setValue] = useState('')
  const [editMode, setEditMode] = useState(false)

  const { dispatch } = useContext(Context)
  const deleteTodo = () => {
    dispatch({
      type: TodoActions.REMOVE,
      payload: id,
    })
  }
  const editTodo = (finish = false) => {
    dispatch({
      type: TodoActions.EDIT,
      payload: {
        id,
        title: value || title,
        finish: finish,
      },
    })
    setEditMode(false)
  }

  const setEditedTodo = () => {
    setValue(title)
    setEditMode(true)
  }

  return (
    <div className='w-10/12 rounded bg-slate-300 mx-auto p-4 flex justify-between items-center mb-4'>
      <div className='flex gap-x-3 items-center'>
        <Checkbox
          id='terms1'
          checked={finish}
          onCheckedChange={(isChecked) => editTodo(isChecked)}
        />
        {editMode ? (
          <Input value={value} onChange={(e) => setValue(e.target.value)} />
        ) : (
          <label
            htmlFor='terms1'
            className={`font-bold text-2xl ${finish ? 'line-through' : ''}`}
          >
            {title}
          </label>
        )}
      </div>
      <div className='flex gap-x-3'>
        {!editMode ? (
          <Button variant='secondary' onClick={setEditedTodo} disabled={finish}>
            <AiOutlineEdit />
          </Button>
        ) : (
          <Button variant='secondary' onClick={() => editTodo()}>
            <AiOutlineCheck />
          </Button>
        )}

        <Button variant='destructive' onClick={deleteTodo}>
          <FaTrashCan />
        </Button>
      </div>
    </div>
  )
}

Todo.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  finish: PropTypes.any,
}
