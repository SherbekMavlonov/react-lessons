import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import React from 'react'
// import { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

// const Timer = () => {
//   const [state, setState] = useState(0)
//   const [timer, setTimer] = useState(null)
//   const [startDisabled, setStartDisabled] = useState(false)

//   const start = () => {
//     setStartDisabled(true)
//     const interval = setInterval(() => {
//       setState((prev) => prev + 1)
//     }, 100)
//     setTimer(interval)
//   }

//   const stop = () => {
//     setStartDisabled(false)
//     clearInterval(timer)
//   }

//   useEffect(() => {
//     if (state === 59) {
//       setState(0)
//     }
//   }, [state])

//   return (
//     <div>
//       <h1>{state}</h1>
//       <Button onClick={start} disabled={startDisabled}>
//         Start
//       </Button>
//       <Button onClick={stop}>Stop</Button>
//     </div>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    {/* <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img
            className='h-48 w-full object-cover md:h-full md:w-48'
            src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80'
            alt='Modern building architecture'
          />
        </div>
        <div className='p-8'>
          <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
            Company retreats
          </div>
          <a
            href='#'
            className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
          >
            Incredible accommodation for your team
          </a>
          <p className='mt-2 text-slate-500'>
            Looking to take your team away on a retreat to enjoy awesome food
            and take in some sunshine? We have a list of places to do just that.
          </p>
        </div>
      </div>
    </div>
    <div className='w-96 bg-black rounded text-white text-8xl'>w-96</div>
    <div className='w-80 bg-black rounded text-white'>w-80</div>
    <div className='w-64 bg-black rounded text-white'>w-64</div>
    <div className='w-48 bg-black rounded text-white'>w-48</div>
    <div className='w-40 bg-black rounded text-white'>w-40</div>
    <div className='w-32 bg-black rounded text-white'>w-32</div>
    <div className='w-24 bg-black rounded text-white'>w-24</div> */}
    <DrawerExample></DrawerExample>
    {/* <App /> */}
  </ChakraProvider>
)
