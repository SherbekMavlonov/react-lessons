function UserAccount({
  id,
  name,
  phoneNumber,
  avatarUrl,
  lastMessage: { createdDate, text, isMyMessage, isRead },
  handleClickUserAccount,
  handleDelete,
}) {
  return (
    <div
      className='d-flex align-center gap-40 user-container'
      onClick={() => handleClickUserAccount(id)}
      onDoubleClick={() => handleDelete(id)}
    >
      <img
        className='avatar'
        src={
          avatarUrl || 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
        }
        alt='avatar'
      />

      <div>
        <h3>{name}</h3>
        <p>
          {text}
          <br />
        </p>
        <span className='message-status'>
          {isMyMessage && isRead ? '✓✓' : isMyMessage ? '✓' : ''}
        </span>
      </div>
    </div>
  )
}
export default UserAccount
