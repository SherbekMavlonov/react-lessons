// import Box from './components/Box'
// import Form from './components/Form'
import { useState } from 'react'
// import Accordion from './components/Accordion'
// import Box2 from './components/Box2'

function App() {
  // const submit = (name) => alert(name)
  const [isLogged, setIsLogged] = useState(false)
  // const isLogged = false

  return (
    <>
      {/* <Box
        size={'box-small'}
        // style={{
        //   backgroundColor: 'red',
        //   color: 'blue',
        // }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
        modi ratione incidunt quas quisquam animi tempore qui libero commodi?
      </Box>
      <Box
        size='box-medium'
        // style={{
        //   backgroundColor: 'blue',
        // }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
        modi ratione incidunt quas quisquam animi tempore qui libero commodi?
      </Box>

      <Box size='box-large'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
        modi ratione incidunt quas quisquam animi tempore qui libero commodi?
      </Box>
      <Box>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minus
        modi ratione incidunt quas quisquam animi tempore qui libero commodi?
      </Box> */}

      {/* <Form send={submit} /> */}
      {/* {show ? <Accordion /> : null} */}
      {/* <Box2> */}
      {/* <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion />
      <Accordion /> */}
      {/* </Box2> */}
      {/* <Box2 /> */}
      {/* <Accordion show={show} /> */}
      {/* <Accordion show={show} /> */}
      {/* <h1>{String(isLogged)}</h1> */}

      {isLogged ? (
        <div>
          <h1>John Doe</h1>
          <p>Salom John</p>
        </div>
      ) : (
        <form>
          <input type='text' placeholder='Enter name ...' />
          <br />
          <br />
          <button onClick={() => setIsLogged(true)}>Login</button>
        </form>
      )}
    </>
  )
}
export default App

// margin-bottom
// marginBottom:
