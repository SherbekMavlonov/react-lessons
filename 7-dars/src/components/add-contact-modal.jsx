import Modal from './ui/modal'
import Input from './ui/input'
import Button from './ui/button'
import { useState } from 'react'

function AddContactModal({ setAddModalOpen, addNewContact }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const addContact = () => {
    addNewContact({
      id: new Date().getMilliseconds(),
      phoneNumber: phone,
      avatarUrl: '',
      name,
      messages: [],
      lastMessage: {},
    })
    setAddModalOpen(false)
  }
  return (
    <Modal close={() => setAddModalOpen(false)}>
      <div className='d-flex column gap-40'>
        <Input placeholder={'Name'} onChange={(e) => setName(e.target.value)} />
        <Input
          placeholder={'Phone number'}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Button text={'Add'} type={'btn-success'} onClick={addContact} />
      </div>
    </Modal>
  )
}
export default AddContactModal
