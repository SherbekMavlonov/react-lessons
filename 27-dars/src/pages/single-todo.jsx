import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchTodoById } from '../store/reducers/todo-reducer'
import { useDispatch, useSelector } from 'react-redux'

function SingleTodo() {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { selectedTodo, isLoading } = useSelector((state) => state.todoReducer)
  useEffect(() => {
    dispatch(fetchTodoById(id))
  }, [id])

  return isLoading ? <h1>Loading</h1> : <h1>{selectedTodo?.title}</h1>
}
export default SingleTodo
