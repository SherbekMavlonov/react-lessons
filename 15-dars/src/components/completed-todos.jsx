import { useEffect, useState } from 'react'
import { useHttp } from '../utils/use-http'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

function CompletedTodos({ setCurrentTodo }) {
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    const data = await useHttp.get('todos?status=1')
    setTodos(data.data)
  }
  useEffect(() => {
    getTodos()
  }, [])

  const onDeleteTodo = async (id) => {
    await useHttp.delete('todos/' + id)
    await getTodos()
  }
  const changeStatus = async (todo) => {
    await useHttp.put('todos/' + todo.id, {
      ...todo,
      status: todo.status === 1 ? 0 : 1,
    })
    await getTodos()
  }
  return (
    <List spacing={3} marginTop={10}>
      {todos.length ? (
        todos.map((todo) => (
          <ListItem key={todo.id}>
            <Card>
              <CardBody>
                <Text
                  textDecoration={todo.status === 1 ? 'line-through' : 'unset'}
                >
                  {todo.todo}
                </Text>
              </CardBody>
              <CardFooter display={'flex'} gap={10}>
                <Button
                  as={todo.status === 1 ? CloseIcon : CheckIcon}
                  colorScheme={todo.status === 1 ? 'red' : 'blue'}
                  variant='outline'
                  onClick={() => changeStatus(todo)}
                />
                <Button
                  as={EditIcon}
                  variant='outline'
                  onClick={() => setCurrentTodo(todo)}
                />
                <Button
                  as={DeleteIcon}
                  colorScheme='red'
                  onClick={() => onDeleteTodo(todo.id)}
                />
              </CardFooter>
            </Card>
          </ListItem>
        ))
      ) : (
        <Card>
          <CardBody>
            <Text>No todo</Text>
          </CardBody>
        </Card>
      )}
    </List>
  )
}
export default CompletedTodos

CompletedTodos.propTypes = {
  setCurrentTodo: PropTypes.func,
}
