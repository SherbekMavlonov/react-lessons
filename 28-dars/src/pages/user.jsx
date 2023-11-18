import { Button } from 'react-bootstrap'
import {
  useAddNewUserMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from '../features/user'

function User() {
  const { data, isLoading } = useGetAllUsersQuery()
  const [addUser, { isLoading: addUserLoading }] = useAddNewUserMutation()
  const [update] = useUpdateUserMutation()
  const [deleteUser] = useDeleteUserMutation()
  if (isLoading) {
    return <h1>Loading</h1>
  }
  console.log(addUserLoading)

  const create = () => {
    addUser({
      firstName: 'John ' + Math.floor(Math.random() * 1000),
    })
  }
  const updateUser = (id) => {
    update({
      id,
      firstName: 'Dilshodbek Aqiyev',
    })
  }
  return (
    <>
      <Button onClick={create}>Create</Button>
      <Button onClick={updateUser}>Update</Button>
      {data.map((user) => (
        <div key={user.id} className='d-flex gap-4 mt-2'>
          <h1 key={user.id}>{user.firstName}</h1>
          <Button variant='danger' onClick={() => deleteUser(user.id)}>
            Delete
          </Button>
          <Button variant='warning' onClick={() => updateUser(user.id)}>
            Update
          </Button>
        </div>
      ))}
    </>
  )
}
export default User
