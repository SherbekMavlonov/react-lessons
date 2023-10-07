// import { useEffect, useState } from 'react'

import Counter from './components/ClassComponent'

// import AddTodo from './components/AddTodo'
// import Tabs from './components/Tabs'
// import AllTodos from './components/AllTodos'

// import UnCompletedTodos from './components/UnCompletedTodos'
// import CompletedTodos from './components/CompletedTodos'

function App() {
  // const [todos, setTodos] = useState([])
  // const [selectedTodo, setSelectedTodo] = useState(null)
  // const [currentTab, setCurrentTab] = useState(0)

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo])
  // }

  // const deleteTodo = (id) => {
  //   const newTodo = todos.filter((todo) => todo.id !== id)
  //   setTodos([...newTodo])
  // }
  // const changeStatus = (id) => {
  //   const idx = todos.findIndex((todo) => todo.id === id)
  //   todos[idx].status = todos[idx].status === 1 ? 2 : 1
  //   setTodos([...todos])
  // }

  // const editTodo = (todo) => {
  //   const idx = todos.findIndex((t) => t.id === todo.id)
  //   todos[idx] = todo
  //   setTodos([...todos])
  //   setSelectedTodo(null)
  // }

  // const setEditedTodo = (id) => {
  //   const currentTodo = todos.find((todo) => todo.id === id)
  //   setSelectedTodo(currentTodo)
  // }

  // useEffect(() => {
  //   const todos = localStorage.getItem('todos')
  //   if (todos) {
  //     setTodos(JSON.parse(todos))
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos))
  // }, [todos])

  // const TabComponents = [
  //   <AllTodos
  //     key={new Date().getMilliseconds()}
  //     todos={todos}
  //     deleteTodo={deleteTodo}
  //     changeStatus={changeStatus}
  //     setEditedTodo={setEditedTodo}
  //   />,
  //   <UnCompletedTodos
  //     key={new Date().getMilliseconds()}
  //     todos={todos}
  //     deleteTodo={deleteTodo}
  //     changeStatus={changeStatus}
  //     setEditedTodo={setEditedTodo}
  //   />,
  //   <CompletedTodos
  //     key={new Date().getMilliseconds()}
  //     todos={todos}
  //     deleteTodo={deleteTodo}
  //     changeStatus={changeStatus}
  //     setEditedTodo={setEditedTodo}
  //   />,
  // ]

  return (
    <>
      {/* <div className='container mt-5'>
        <AddTodo
          add={addTodo}
          selectedTodo={selectedTodo}
          editTodo={editTodo}
        />

        <Tabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {TabComponents[currentTab]}
      </div> */}

      <Counter text='Hello' />
    </>
  )
}

export default App
