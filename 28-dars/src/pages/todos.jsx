import { useCreateTodoMutation, useGetAllTodosQuery } from '../features/todo'

function Todos() {
  const { isLoading, data } = useGetAllTodosQuery()
  const [createTodo] = useCreateTodoMutation()
  return (
    <>
      <button
        onClick={() =>
          createTodo({
            title: 'Hello world',
          })
        }
      >
        Create
      </button>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {data.map((todo) => (
            <h1 key={todo.id}>{todo.title}</h1>
          ))}
        </>
      )}
    </>
  )
}

export default Todos
