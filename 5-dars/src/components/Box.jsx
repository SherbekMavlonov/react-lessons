// import PropTypes from 'prop-types'
import './box.css'

function Box({ size = '', ...otherProps }) {
  return <div className={`box ${size}`} {...otherProps} />
}

// Box.propTypes = {
//   size: PropTypes.string.isRequired,
// }
export default Box

// const styles = {
//   backgroundColor: "red"
// }
// <div style={{
//   backgroundColor: "red"
// }}></div>
