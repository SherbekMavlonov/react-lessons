import { useState } from 'react'
import './App.css'

// REDUX, redux toolkit

const App = () => {
  // constructor(props) {
  // super(props)
  const [state, setState] = useState({
    todos: [
      {
        id: 1,
        task: 'Walk the walk',
      },
      {
        id: 2,
        task: 'Talk the talk',
      },
      {
        id: 3,
        task: 'Jump the jump',
      },
    ],
    draggedTask: {},
    draggedTaskIndex: null,
    dragOverItemIndex: null,
  })

  const onDrag = (event, todo) => {
    event.preventDefault()
    setState((prev) => ({ ...prev, draggedTask: todo }))
  }

  const onDragOver = (event) => {
    event.preventDefault()
  }

  const onDrop = () => {
    const { draggedTask, todos, dragOverItemIndex, draggedTaskIndex } = state
    const copy = [...todos]
    copy.splice(draggedTaskIndex, 1)
    copy.splice(dragOverItemIndex, 0, draggedTask)

    setState({
      todos: [...copy],
      draggedTask: null,
      dragOverItemIndex: null,
      draggedTaskIndex: null,
    })
  }

  // render() {
  const { todos } = state
  return (
    <div className='App'>
      <div
        className='todos'
        onDrop={(event) => onDrop(event)}
        onDragOver={(event) => onDragOver(event)}
      >
        {todos.map((todo, index) => (
          <h1
            key={todo.id}
            draggable
            onDragStart={() =>
              setState((prev) => ({ ...prev, draggedTaskIndex: index }))
            }
            onDragEnter={() =>
              setState((prev) => ({ ...prev, dragOverItemIndex: index }))
            }
            onDrag={(event) => onDrag(event, todo, index)}
          >
            {todo.id} .{todo.task}
          </h1>
        ))}
      </div>
    </div>
  )
}
// }
// }

export default App
