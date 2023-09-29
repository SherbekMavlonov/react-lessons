import { useState } from 'react'
import Button from './ui/button'
import Input from './ui/input'

function Chat({ selectChat, sendMessage, deleteMessages }) {
  const [message, setMessage] = useState('')
  const send = () => {
    sendMessage(selectChat.id, {
      text: message,
      isMyMessage: true,
    })
    setMessage('')
  }
  return (
    <>
      <div className='chat'>
        {selectChat ? (
          <>
            <h1>
              {selectChat.name} {selectChat.phoneNumber}
              {selectChat.messages.length ? (
                <Button
                  onClick={() => deleteMessages(selectChat.id)}
                  text={'delete chat'}
                  type={'btn-delete'}
                />
              ) : undefined}
            </h1>
            {!selectChat.messages.length ? (
              <h1>No message</h1>
            ) : (
              selectChat?.messages?.map((message, idx) => (
                <p
                  key={idx}
                  className={`msg ${message.isMyMessage ? 'my-message' : ''}`}
                >
                  {message.text}
                </p>
              ))
            )}
            <div className='input-container'>
              <Input
                placeholder={'Message ...'}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type={'btn-success'} text={'Send'} onClick={send} />
            </div>
          </>
        ) : (
          <h1>Select chat</h1>
        )}
      </div>
    </>
  )
}
export default Chat
