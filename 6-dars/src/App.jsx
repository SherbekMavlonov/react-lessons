import React, { useState } from 'react'
import Tab1 from './components/Tab1'
import Tab2 from './components/Tab2'
import Tab3 from './components/Tab3'
// import { users } from './__mock__/users'

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const tabs = [
    {
      title: 'Comments',
      component: <Tab1 />,
    },
    {
      title: 'Payments',
      component: <Tab2 />,
    },
    {
      title: 'Contacts',
      component: <Tab3 />,
    },
  ]

  // const [usersList, setUsersList] = useState([...users])
  // const deleteUser = (id) => {
  //   const filteredUser = usersList.filter((user) => user.id !== id)
  //   setUsersList(filteredUser)
  // }

  // const start = () => {
  //   setInterval(() => {
  //     const newArr = [...usersList]
  //     for (let i = 0; i < newArr.length; i++) {
  //       const random = Math.floor(Math.random() * users.length)
  //       if (i !== random) {
  //         ;[newArr[random], newArr[i]] = [newArr[i], newArr[random]]
  //       }
  //     }
  //     setUsersList(newArr)
  //   }, 1000)
  // }

  return (
    <>
      {/* <h1>No key</h1>
      {usersList.map((user, idx) => (
        <input value={user.name} onChange={() => {}} />
      ))}
      <br />
      <br />
      <h1>Key index</h1>
      {usersList.map((user, index) => (
        <input value={user.name} key={index} onChange={() => {}} />
      ))}
      <br />
      <br />

      <h1>Key unique</h1>
      {usersList.map((user, index) => (
        <input value={user.name} key={user.id} onChange={() => {}} />
      ))}
      <br />
      <br />
      <button onClick={start}>Start</button> */}
      {tabs.map((el, idx) => (
        <button onClick={() => setActiveTab(idx)} key={idx}>
          {el.title}
        </button>
      ))}

      {tabs[activeTab].component}
    </>
  )
}
