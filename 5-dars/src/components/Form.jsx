import { useRef, useState } from 'react'

function Form({ send }) {
  // const [error, setError] = useState(null)
  // const [name, setName] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)
  // const nameInputRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(nameInputRef.current.value)
    // send(e.target[0].value)
    // console.log(e.target.elements[0].value)
  }
  const handleOnChange = (e) => {
    // if (e.target.value.trim().length < 3) {
    //   setError(true)
    // } else{
    //   setError(null)
    // }
    // if (e.target.value.trim().length === 8) {
    //   return
    // } else {
    //   setName(e.target.value.trim())
    // }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id='name'
          type='text'
          placeholder='Enter name ...'
          // onChange={handleOnChange}
          // ref={nameInputRef}
        />
        {/* <h1 style={{ color: 'red' }}>{error ? "To'g'ri yozilmagan" : null}</h1> */}
        <input
          // value={name}
          onChange={handleOnChange}
          id='password'
          type={isShowPassword ? 'text' : 'password'}
          className='input'
          placeholder='Enter password ...'
        />
        <button>Submit</button>
      </form>
      <button onClick={() => setIsShowPassword((prev) => !prev)}>
        {isShowPassword ? 'Yashirish' : "Ko'rsatish"}
      </button>
    </>
  )
}

export default Form
