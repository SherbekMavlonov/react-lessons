import React, { useState } from 'react'
import Heading from './components/Heading'
import Sidebar from './components/Sidebar'
// const className = 'heading'
// const children = 'Hello world'

// const props = {
//   className,
//   children,
// }

// const heading = (extraProps = {}) =>
//   React.createElement('h1', {
//     className: 'nimadir',
//     ...props,
//     ...extraProps,
//   })

// const sayHI = (props) => {
//   console.log(props)
// }

// const Heading = (
//   <HeadingComponent>
//     <div>
//       <ul>
//         <li>Olma</li>
//         <li>Anjir</li>
//       </ul>
//     </div>
//   </HeadingComponent>
// )

// const Heading1 = <HeadingComponent />

// export const App = React.createElement('div', {}, Heading1)

// export const App = () => (
//   <>
//     <Heading className='headingRed' title='salom dunyo' />
//     <Heading title='Hello world' />
//     <Heading className='headingRed' title='Xayr world' />
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
//       reiciendis, exercitationem voluptas nobis nemo blanditiis temporibus ipsum
//       quos minus saepe libero, commodi, eos magni quam? Possimus quod
//       consequuntur distinctio sunt?
//     </p>
//     <Sidebar />
//   </>
// )

export const App = () => {
  // const [state, setState] = useState({
  //   darsgaQarange: 'Samandar darsga qarang',
  //   mingSomdan: 'Akajonlar',
  // })
  const [state, setState] = useState(0)
  // console.log(React)
  // let x = 10
  const clicked = function () {
    // x++
    // const func = (prev) => {
    //   console.log(prev)
    //   return ++prev
    // }
    // setState(func)

    setState((prev) => ++prev)
    // setState({
    //   darsgaQarange: 'Asadbek siz ham qarang',
    //   mingSomdan: 'Ikki somdan',
    // })
  }

  // 👎🏿
  // document.querySelector('#btn').addEventListener('click', () => {
  //   console.log('test')
  // })

  return (
    <>
      {/* <button onClick={() => setState((prev) => ++prev)} id='btn'>
        Click me
      </button> */}
      <button onClick={clicked} id='btn'>
        Click me
      </button>
      <h1>{state}</h1>
      {/* <h1>{state.darsgaQarange}</h1>
      <h1>{state.mingSomdan}</h1> */}
    </>
  )
}
