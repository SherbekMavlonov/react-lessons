// import VanillaTilt from 'vanilla-tilt'
// import { useEffect, useRef } from 'react'

// import { useState } from 'react'
import { useEffect } from 'react'
// import { useRequest } from './utils/httpRequest'
import styles from 'styled-components'

const Heading = styles.h1`
  color: ${({ color }) => {
    return color || 'red'
  }};  
`
const BaseInput = styles.input`
  border: none;  
  outline: none;
  background-color: red;
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
`
// import JobCard from './components/JobCard'
// import './App.css'

// function App() {
//   const elementRef = useRef()
//   // const nameInputRef = useRef()
//   // VanillaTilt.init(document.querySelector(".your-element"), {
//   // 	max: 25,
//   // 	speed: 400
//   // });
//   useEffect(() => {
//     VanillaTilt.init(elementRef.current, {
//       glare: true,
//       maxGlare: 0.5,
//       // reset: false,
//       scale: 1.2,
//       axis: 'x',
//     })
//     // return () => {
//     //   elementRef.current.vanillaTilt.destroy()
//     // }
//   }, [])
//   return (
//     <>
//       {/* <div  className='your-element' data-tilt></div> */}
//       <div
//         style={{
//           backgroundColor: 'green',
//           width: '100px',
//           height: '100px',
//         }}
//         ref={elementRef}
//         className='your-element'
//         data-tilt
//         data-tilt-max='50'
//         data-tilt-speed='400'
//         data-tilt-perspective='500'
//       >
//         hello world
//       </div>
//       {/* <input type='text' ref={nameInputRef} />
//       <button onClick={() => console.log(nameInputRef.current.value)}>
//         Show
//       </button> */}
//     </>
//   )
// }

// export default App

// function App() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://www.arbeitnow.com/api/job-board-api')
//       .then((res) => res.json())
//       .then((data) => setData(data.data))
//       .catch((err) => console.log(err))
//   }, [])

//   return (
//     <div>
//       {data.map((job, index) => (
//         <JobCard {...job} key={index} />
//       ))}
//     </div>
//   )
// }
// export default App

function App() {
  // const [searchValue, setSearchValue] = useState('')
  // const [result, setResult] = useState(null)
  // const [loading, setLoading] = useState(false)

  const search = async () => {
    // if (e.keyCode === 13) {
    // setLoading(true)
    // https://api.agify.io/?name=michael&country_id=US
    // const data = await axios.get(`https://api.agify.io/?name=${searchValue}`)
    // const data = await axios({
    //   method: 'GET',
    //   url: `https://api.agify.io/?name=${searchValue}`,
    // })
    // const data = await useRequest.get('photos')
    // const todos = await useRequest.get('todos')
    // console.log(data.data)
    // console.log(todos.data)
    // setResult(data.data)
    // setSearchValue('')
    // setLoading(false)
    // }
  }

  useEffect(() => {
    search()
  }, [])
  // const handleSearchInputChange = (e) => {
  //   setSearchValue(e.target.value)
  // }

  return (
    <div>
      {/* {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <input
            type='text'
            onChange={handleSearchInputChange}
            onKeyDown={search}
            value={searchValue}
          />
          <h1>
            {result && (
              <>
                {result?.name} ning yoshi {result?.age} da
              </>
            )}
          </h1>
        </>
      )} */}
      <Heading color='green' className='heading'>
        Hello world
      </Heading>
      <Heading>Hello world</Heading>
      <BaseInput />
    </div>
  )
}
export default App
