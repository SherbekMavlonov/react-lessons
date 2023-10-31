// import { useContext } from 'react'

import { useContext } from 'react'
import { Context } from '../App'

// import { MyContext } from '../App'
function ThirdComponent() {
  // const { name } = useContext(MyContext)
  // const value = useContext(MyContext1)
  // console.log(value)

  // return (
  //   <MyContext.Consumer>
  //     {(value) => <h1>I am {value.name}</h1>}
  //   </MyContext.Consumer>
  // )
  const { isOpen, color, setColor } = useContext(Context)

  const colors = ['white', 'black', 'red', 'blue', 'green']

  const cardStyle = {
    backgroundColor: color,
  }

  const changeColor = (color) => {
    setColor(color)
  }

  return (
    <div>
      {isOpen ? (
        <div className='card mb-4' style={cardStyle}>
          <div className='card-header'>Card</div>
          <div className='card-body'>body..</div>
        </div>
      ) : null}

      {/* <h1>I am {name}</h1> */}
      {colors.map((item, index) => (
        <button
          key={index}
          className='btn btn-outline-primary ms-3'
          onClick={() => changeColor(item)}
        >
          {item}
        </button>
      ))}
    </div>
  )
}
export default ThirdComponent
