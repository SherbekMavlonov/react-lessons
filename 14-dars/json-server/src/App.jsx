import { useState } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState('')

  const addProfile = async () => {
    await fetch('http://localhost:3000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: profile,
      }),
    })
    setProfile('')
  }

  const deleteProfile = async () => {
    fetch('http://localhost:3000/news/' + 2, {
      method: 'DELETE',
    })
  }
  const editProfile = async () => {
    fetch('http://localhost:3000/profile/' + 2, {
      method: 'PUT',
      body: JSON.stringify({
        name: 'Tesha',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return (
    <>
      <input type='text' onChange={(e) => setProfile(e.target.value)} />
      <button onClick={addProfile}>Add</button>
      <button onClick={deleteProfile}>delete</button>
      <button onClick={editProfile}>editProfile</button>
    </>
  )
}

export default App
