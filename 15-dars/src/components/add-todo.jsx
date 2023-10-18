import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHttp } from '../utils/use-http'

export function AddTodo({ getTodos, setCurrentTodo, currentTodo }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [todo, setTodo] = useState({
    todo: '',
  })
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const handleChangeInputValue = (e) => {
    const { name, value } = e.target
    setTodo((prev) => ({ ...prev, [name]: value }))
  }

  const onSave = async () => {
    if (!currentTodo) {
      await useHttp.post('todos', {
        todo: todo.todo,
        status: 0,
      })
    } else {
      await useHttp.put('todos/' + currentTodo.id, {
        ...todo,
      })
      setCurrentTodo(null)
    }
    getTodos()
    onClose()
    setTodo({
      todo: '',
    })
  }

  useEffect(() => {
    if (currentTodo) {
      setTodo({ ...currentTodo })
      onOpen()
    }
  }, [currentTodo])

  return (
    <>
      <Button onClick={onOpen}>Add Todo</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {currentTodo ? 'Edit Todo' : 'Create new todo'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Todo</FormLabel>
              <Input
                ref={initialRef}
                placeholder='Title'
                name='todo'
                value={todo.todo}
                onChange={handleChangeInputValue}
              />
              {currentTodo ? (
                <Checkbox
                  defaultChecked={todo.status === 1}
                  marginTop={5}
                  onChange={(e) =>
                    setTodo((prev) => ({
                      ...prev,
                      status: Number(e.target.checked),
                    }))
                  }
                  name='status'
                >
                  Finish
                </Checkbox>
              ) : undefined}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onSave}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

AddTodo.propTypes = {
  getTodos: PropTypes.func,
  setCurrentTodo: PropTypes.func,
  currentTodo: PropTypes.object,
}
