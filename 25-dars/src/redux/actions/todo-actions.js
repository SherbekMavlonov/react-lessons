import axios from 'axios'
import { TODO_ACTION_TYPES } from '../action-types/action-types'
export const getTodos = () => {
  return (dispatch) =>
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
      dispatch({
        type: TODO_ACTION_TYPES.GET_TODOS,
        payload: res.data,
      })
    })
}
