import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { Context } from '../../../store'
import { TodoActions } from '../../../reducer/actions'

function AddTodo() {
  const { dispatch } = useContext(Context)
  const [inputValue, setInputValue] = useState('')
  const add = () => {
    if (!inputValue.trim().length) {
      return
    }
    dispatch({
      type: TodoActions.ADD,
      payload: {
        title: inputValue,
        id: uuidv4(),
        finish: false,
      },
    })
    setInputValue('')
  }
  return (
    <div className='flex w-10/12 mx-auto my-4 justify-center gap-x-3'>
      <Input
        type='text'
        placeholder={'Todo title ....'}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={add}>Add</Button>
    </div>
  )
}
export default AddTodo
