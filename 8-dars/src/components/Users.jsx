function Users({ users, handleEditClick }) {
  return (
    <>
      {users.map((user, idx) => (
        <div key={user.id}>
          <p>
            {idx + 1} . {user.name}{' '}
            <button onClick={() => handleEditClick(user)}>Edit</button>
          </p>
        </div>
      ))}
    </>
  )
}
export default Users
