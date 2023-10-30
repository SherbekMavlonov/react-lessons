// // import { useMemo, useState } from 'react'
// // import ChildComponent from './components/ChildComponent'

import { useReducer } from 'react'

// // import { useRef, useState } from 'react'

// // import { useReducer } from 'react'

// // function addCount(state, { payload, type }) {
// //   // console.log(hozirgiState, '=======hozirgi state', )
// //   // console.log(yangiState, '=========yangistate')

// //   switch (type) {
// //     case 'INC':
// //       return state + payload
// //     case 'DEC':
// //       return state - payload

// //     case 'DIV':
// //       return state / payload

// //     case 'MUL':
// //       return state * payload
// //   }
// //   // return hozirgiState + yangiState.count
// // }

// function App() {
//   // const [count, setCount] = useReducer(addCount, 0)
//   // const [count, setCount] = useState(0)
//   // const [count10, setCount10] = useState(0)
//   // const add = useCallback(() => {
//   //   console.log('Added')
//   // }, [])

//   // const add = useMemo(() => {
//   //   for (let i = 0; i < 1000000000; i++) {
//   //     // Og'ir jarayon
//   //   }
//   //   return 'Hello world'
//   // }, [count10])

//   // const add = () => {
//   //   for (let i = 0; i < 1000000000; i++) {
//   //     // Og'ir jarayon
//   //   }
//   //   return 'Hello world'
//   // }
//   // console.log(count)

//   // const abc = (type) => {
//   //   setCount({
//   //     payload: 10,
//   //     type,
//   //   })
//   // }

//   // const inputRef = useRef(132312312)
//   // const [value, setValue] = useState(0)
//   // const onSubmit = () => {
//   //   // inputRef.current.focus()
//   //   console.log(inputRef)
//   // }

//   // console.log('test1')

//   return (
//     <>
//       {/* <h1>{count}</h1>
//       <button onClick={() => setCount((prev) => prev + 1)}>+</button>
//       <button onClick={() => setCount((prev) => prev - 1)}>-</button>
//       <br />
//       <br />
//       <br />
//       <h1>{count10}</h1>
//       <button onClick={() => setCount10((prev) => prev + 1)}>+</button>

//       <br />
//       <br />
//       <h1>{add}</h1> */}
//       {/* <ChildComponent add={add} /> */}
//       {/* <input type='text' />
//       <br />
//       <br /> */}
//       {/* <input type='text' onChange={(e) => setValue(e.target.value)} /> */}
//       {/* <button onClick={onSubmit}>Submit</button> */}
//       {/* <h1>Count: {count}</h1>
//       <button onClick={() => abc('INC')}>+</button>
//       <button onClick={() => abc('DEC')}>-</button>
//       <button onClick={() => abc('DIV')}>/</button>
//       <button onClick={() => abc('MUL')}>*</button> */}

//       {/* <button>Hello world</button> */}
//     </>
//   )
// }

// export default App

const TYPES = {
  INC: 'INC',
  DEC: 'DEC',
  FIRST_INPUT: 'FIRST_INPUT',
  SECOND_INPUT: 'SECOND_INPUT',
  CLEAR: 'CLEAR',
}

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.INC:
      state.result = +state.firstInputValue + +state.secondInputValue
      break
    case TYPES.DEC:
      state.result = +state.firstInputValue - +state.secondInputValue
      break
    case TYPES.FIRST_INPUT:
      state.firstInputValue = action.payload
      break
    case TYPES.SECOND_INPUT:
      state.secondInputValue = action.payload
      break
    case TYPES.CLEAR:
      state.firstInputValue = ''
      state.secondInputValue = ''
      break
    default:
      break
  }
  return { ...state }
}

const App = () => {
  const [state, setState] = useReducer(reducer, {
    firstInputValue: '',
    secondInputValue: '',
    result: '',
  })

  const calculate = (type) => {
    setState({ type })
    setState({ type: TYPES.CLEAR })
  }

  return (
    <>
      <input
        type='number'
        inputMode='numeric'
        value={state.firstInputValue}
        onChange={(e) =>
          setState({
            type: TYPES.FIRST_INPUT,
            payload: e.target.value ? Number(e.target.value) : e.target.value,
          })
        }
      />
      <input
        type='number'
        value={state.secondInputValue}
        onChange={(e) =>
          setState({
            type: TYPES.SECOND_INPUT,
            payload: e.target.value ? Number(e.target.value) : e.target.value,
          })
        }
      />
      <br />
      <button onClick={() => calculate(TYPES.INC)}>+</button>
      <button onClick={() => calculate(TYPES.DEC)}>-</button>
      <h1>{state.result}</h1>
    </>
  )
}

export default App
