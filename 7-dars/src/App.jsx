import { useState } from 'react'
import Chat from './components/Chat'
import Sidebar from './components/Sidebar'
import { usersFake } from './__mock__/data'
import Button from './components/ui/button'
import AddContactModal from './components/add-contact-modal'

function App() {
  const [users, setUsers] = useState(usersFake)
  const [search, setSearch] = useState('')
  const [selectChat, setSelectChat] = useState(null)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const handleClickUserAccount = (id) => {
    const currentUser = users.find((user) => user.id === id)
    setSelectChat(currentUser)
  }
  const addNewContact = (contactData) => {
    setUsers([...users, contactData])
  }

  const sendMessage = (id, msg) => {
    const idx = users.findIndex((user) => id === user.id)
    users[idx].messages.push(msg)
    setUsers([...users])
  }
  const handleSearch = (value) => {
    setSearch(value)
  }
  const deleteUser = (id) => {
    setSelectChat(null)
    const newUser = users.filter((user) => user.id !== id)
    setUsers(newUser)
  }
  const deleteMessages = (id) => {
    const idx = users.findIndex((user) => user.id === id)
    users[idx].messages = []
    setUsers([...users])
  }
  return (
    <div className='d-flex'>
      {addModalOpen ? (
        <AddContactModal
          setAddModalOpen={setAddModalOpen}
          addNewContact={addNewContact}
        />
      ) : undefined}

      <Sidebar
        users={
          !search.length
            ? users
            : users.filter((user) =>
                user.name
                  .toLocaleLowerCase()
                  .includes(search.trim().toLocaleLowerCase())
              )
        }
        handleClickUserAccount={handleClickUserAccount}
        handleSearch={handleSearch}
        deleteUser={deleteUser}
      />
      <Chat
        selectChat={selectChat}
        sendMessage={sendMessage}
        deleteMessages={deleteMessages}
      />
      <Button
        text={'+'}
        onClick={() => setAddModalOpen((prev) => !prev)}
        type={'btn-success add-contact-btn'}
      />
    </div>
  )
}
export default App
