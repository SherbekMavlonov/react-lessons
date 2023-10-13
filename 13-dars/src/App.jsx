import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import { useHttp } from './utils/useRequest'
import Skeleton from './components/Skeleton'
import UserCard from './components/UserCard'
import Modal from './components/Modal'

function App() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const users = JSON.parse(localStorage.getItem('users'))
      if (!users.length) {
        setIsLoading(true)
        const data = await useHttp.get('users')
        setUsers(data.data)
        setIsLoading(false)
      } else {
        setUsers(users)
      }
    })()
  }, [])

  useEffect(() => {
    if (users.length) {
      localStorage.setItem('users', JSON.stringify(users))
    } else {
      localStorage.setItem('users', JSON.stringify([]))
    }
  }, [users])

  const handleEdit = async ({ id, name, email }) => {
    setIsLoading(true)
    const idx = users.findIndex((user) => user.id === id)
    if (idx === -1) {
      await useHttp.post('users', {
        id,
        name,
        email,
      })
      users.push({ name, email, id })
    } else {
      await useHttp.patch(`users/${id}`, { name, email })
      users[idx] = { ...users[idx], name, email }
    }
    setUsers([...users])
    setIsLoading(false)
  }
  const deleteUser = async (id) => {
    setIsLoading(true)
    await useHttp.delete('users/' + id)
    const filteredUser = users.filter((user) => user.id !== id)
    setUsers([...filteredUser])
    setIsLoading(false)
  }
  return (
    <>
      <Container>
        <Button onClick={() => setShow((prev) => !prev)} className='my-3'>
          Add
        </Button>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            {users.map((user) => (
              <UserCard
                key={user.id}
                {...user}
                setShow={setShow}
                setSelectedUser={setSelectedUser}
                deleteUser={deleteUser}
              />
            ))}
          </>
        )}
      </Container>
      <Modal
        show={show}
        setShow={setShow}
        selectedUser={selectedUser}
        handleChange={handleEdit}
      />
    </>
  )
}

export default App
