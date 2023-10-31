import PropTypes from 'prop-types'

function Card({ title }) {
  return <div>{title}</div>
}
export default Card

Card.propTypes = {
  title: PropTypes.string,
}
