import PropTypes from 'prop-types'
import { Card, Col, Row, Button } from 'react-bootstrap'

function UserCard(props) {
  const { name, email, setShow, setSelectedUser, id, deleteUser } = props
  const handleEditBtn = () => {
    setShow((prev) => !prev)
    setSelectedUser({ name, email, id })
  }

  return (
    <Card className='mb-3'>
      <Card.Body>
        <Row className='align-items-center'>
          <Col xs={6}>
            <h5>{name}</h5>
            <p>{email}</p>
          </Col>
          <Col xs={6}>
            <Button variant='primary me-5' xs={5} onClick={handleEditBtn}>
              Edit
            </Button>
            <Button variant='danger' xs={5} onClick={() => deleteUser(id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default UserCard

UserCard.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  id: PropTypes.number,
  setShow: PropTypes.func,
  setSelectedUser: PropTypes.func,
  deleteUser: PropTypes.func,
}
