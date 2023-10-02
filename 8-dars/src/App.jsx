import { useState } from 'react'
import Users from './components/Users'
import Modal from './components/Modal'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)
  const [inputVal, setInputVal] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  // const [x,setX] = useState(0)
  // let x = array[0]
  // let ozgartirish = array[1]
  // const handleClick = (action) => {
  //   if(action === "add"){
  //     // ++x
  //     setX((prevValue) => ++prevValue)
  //   }else{
  //     // --x
  //     setX( (prevValue) => --prevValue)
  //   }
  // }
  const handleModalBtnClick = () => {
    if (selectedUser) {
      const idx = users.findIndex((user) => user.id === selectedUser.id)
      users[idx] = { id: selectedUser.id, name: inputVal }
      setUsers([...users])
    } else {
      setUsers([...users, { id: users.length + 1, name: inputVal }])
    }
    closeModal()
  }
  const closeModal = () => {
    setSelectedUser(null)
    setInputVal(null)
    setIsOpen(false)
  }
  const handleEditClick = (user) => {
    setIsOpen(true)
    setSelectedUser(user)
  }
  return (
    <>
      {isOpen ? (
        <Modal close={closeModal}>
          <input
            onChange={(e) => setInputVal(e.target.value)}
            defaultValue={selectedUser ? selectedUser.name : ''}
          />
          <button onClick={handleModalBtnClick}>
            {selectedUser ? 'Edit' : 'Save'}
          </button>
        </Modal>
      ) : undefined}
      <button onClick={() => setIsOpen((prev) => !prev)}>Add</button>
      <Users users={users} handleEditClick={handleEditClick} />
    </>
  )
}

export default App
