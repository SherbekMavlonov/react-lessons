import {
  List,
  ListItem,
  Button,
  Card,
  CardBody,
  Text,
  CardFooter,
} from '@chakra-ui/react'
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'
import { useHttp } from '../utils/use-http'

function Todo({ todos, getTodos, setCurrentTodo }) {
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
export default Todo

Todo.propTypes = {
  todos: PropTypes.array,
  getTodos: PropTypes.func,
  setCurrentTodo: PropTypes.func,
}
