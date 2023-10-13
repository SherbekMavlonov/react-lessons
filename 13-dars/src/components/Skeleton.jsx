import { Card, Col, Placeholder, Row } from 'react-bootstrap'

function Skeleton() {
  return (
    <>
      {Array.from(Array(6)).map((_, idx) => (
        <Card key={idx} className='mb-3'>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <Placeholder as={Card.Title} animation='glow'>
                  <Placeholder xs={10} />
                  <Placeholder xs={6} />
                </Placeholder>
              </Col>
              <Col xs={6}>
                <Placeholder.Button variant='primary' xs={5} />
                <Placeholder.Button variant='danger' xs={5} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
export default Skeleton
