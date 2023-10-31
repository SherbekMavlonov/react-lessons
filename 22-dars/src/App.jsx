// // import { createContext } from 'react'
// import FirstComponent from './components/FirstComponent'

// // export const MyContext = createContext()
// // export const MyContext1 = createContext()

// function App() {
//   // const name = 'John'
//   // const values = {
//   //   name,
//   //   age: 30,
//   //   country: 'Samarkand',
//   // }
//   return (
//     // <MyContext1.Provider value={'Nimadir'}>
//     // <MyContext.Provider value={values}>
//     <div>
//       <FirstComponent />
//     </div>
//     // </MyContext.Provider>
//     // </MyContext1.Provider>
//   )
// }

// export default App

import { createContext, useReducer } from 'react'
import FirstComponent from './components/FirstComponent'
import { ACTION_TYPES } from './constants/actionTypes'
import { reducer } from './store'
import Card from './Card'

export const Context = createContext({
  name: 'John',
})

function App() {
  // const [isOpen, setIsOpen] = useState(true)
  // const [color, setColor] = useState('white')
  const [state, dispatch] = useReducer(reducer, {
    color: 'white',
    isOpen: true,
  })

  const setIsOpen = () => {
    dispatch({ type: ACTION_TYPES.MODAL })
  }

  const setColor = (color) => {
    dispatch({ type: ACTION_TYPES.COLOR, payload: color })
  }

  const contextValues = {
    isOpen: state.isOpen,
    setIsOpen,
    color: state.color,
    setColor,
  }

  return (
    <>
      <Context.Provider value={contextValues}>
        <div className='container mt-2'>
          <button
            className='btn btn-success mb-2'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            Open Modal
          </button>
          <FirstComponent />
          <Card title={10} />
        </div>
      </Context.Provider>
    </>
  )

  // const [count, setCount] = useState(0)

  // const add = () => {
  //   for (let i = 0; i < 100; i++) {
  //     setCount(count + 1)
  //   }
  // }

  // const add1 = () => {
  //   for (let i = 0; i < 100; i++) {
  //     setCount((prev) => prev + 1)
  //   }

  //   // setCount((prev) => prev + 1)
  //   // setCount((prev) => prev + 1)
  //   // setCount((prev) => prev + 1)
  //   // setCount((prev) => prev + 1)
  // }
  // return (
  //   <div>
  //     <h1>Count: {count}</h1>
  //     <button className='btn btn-success' onClick={add}>
  //       +
  //     </button>
  //     <button className='btn btn-success ms-2' onClick={add1}>
  //       +
  //     </button>
  //     {/* <button className='btn btn-danger ms-2'>-</button> */}
  //   </div>
  // )
}

export default App

// https://www.makeuseof.com/firebase-react-authentication/
