/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function Count({ count, inc, dec }) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

// function mapState(state) {
//   return { count: state.count }
// }

// function mapDispatch(dispatch) {
//   return {
//     inc: () => dispatch({ type: 'INC' }),
//     dec: () => dispatch({ type: 'DEC' }),
//   }
// }

export default connect(
  (state) => ({ count: state.count }),
  (dispatch) => ({
    inc: () => dispatch({ type: 'INC' }),
    dec: () => dispatch({ type: 'DEC' }),
  })
)(Count)

Count.propTypes = {
  count: PropTypes.number,
  inc: PropTypes.func,
  dec: PropTypes.func,
}
