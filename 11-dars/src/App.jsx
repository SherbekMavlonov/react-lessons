import { useEffect, useState } from 'react'
import './App.css'

// const useStorage = (key, value = '') => {
//   const [state, setState] = useState(value)
//   useEffect(() => {
//     localStorage.setItem(key, state)
//   }, [key, state, value])

//   return [state, setState]
// }

// // persistent

// const MyComponent = () => {
//   // const [name, setName] = useState(() => localStorage.getItem('name') || '')

//   // useEffect(() => {
//   //   localStorage.setItem('name', name)
//   // }, [name])
//   const [name, setName] = useStorage('name', localStorage.getItem('name'))

//   return (
//     <>
//       <input
//         type='text'
//         onChange={(e) => setName(e.target.value)}
//         // value={name}
//         defaultValue={name}
//       />
//       <h1>Assalom alaykum {name}</h1>
//     </>
//   )
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <MyComponent />
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <h1>{count}</h1>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//     </>
//   )
// }

// export default App

const perPage = 20

function App() {
  const [users, setUsers] = useState([])
  const [currentPageUsers, setCurrentPageUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  // async function getData() {
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //   const data = await res.json()
  //   return data
  // }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err))

    // ;(async () => {
    //   const data = await getData()
    //   setUsers(data)
    // })()

    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      setIsLoading(true)
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await res.json()
      setUsers(data)
      setIsLoading(false)
    })()
  }, [])
  const paginationItemCount = users.length / perPage
  // yaxshimas
  // getData().then((res) => setUsers(res))
  // console.log(users)

  // xatolik
  // useEffect(() => {
  //   // setCount((prev) => prev + 1)
  // }, [count])

  useEffect(() => {
    setCurrentPageUsers(
      users.slice(currentPage * perPage, (currentPage + 1) * perPage)
    )
  }, [currentPage, users])

  return (
    <div>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          {currentPageUsers.map((user) => (
            <h1 key={user.id}>
              {user.id}.{user.title}
            </h1>
          ))}

          {Array.from(Array(paginationItemCount)).map((_, idx) => (
            <button
              key={idx}
              className={`${currentPage === idx ? 'active' : ''}`}
              onClick={() => setCurrentPage(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </>
      )}
    </div>
  )
}
export default App
