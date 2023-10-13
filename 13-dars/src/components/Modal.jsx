import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'

function CustomModal({ handleChange, show, setShow, selectedUser }) {
  const handleClose = () => setShow(false)
  const [data, setData] = useState({
    email: '',
    name: '',
  })

  const handleFinish = () => {
    handleChange({
      ...data,
      id: selectedUser?.id || new Date().getMilliseconds(),
    })
    handleClose()
  }

  const handleInputValueChange = (e) => {
    const { name, value } = e.target
    data[name] = value
    setData({ ...data })
  }

  useEffect(() => {
    if (selectedUser) {
      setData({
        email: selectedUser?.email,
        name: selectedUser?.name,
      })
    }
  }, [selectedUser])
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedUser ? 'Edit' : 'Add'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type='email'
            name='email'
            placeholder='user@gmail.com'
            value={data.email}
            onChange={handleInputValueChange}
          />
          <br />
          <Form.Control
            type='text'
            name='name'
            placeholder='John Doe'
            value={data.name}
            onChange={handleInputValueChange}
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleFinish}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CustomModal

CustomModal.propTypes = {
  handleChange: PropTypes.func,
  show: PropTypes.bool,
  setShow: PropTypes.func,
  selectedUser: PropTypes.any,
}
