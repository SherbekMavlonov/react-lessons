import PropTypes from 'prop-types'

function DebtCard({ userName, date, description, amount }) {
  return (
    <div className='card mb-2'>
      <div className='card-header'>{userName}</div>
      <div className='card-body'>
        <h5 className='card-title'>{description} </h5>
        <h5 className='card-title'>{amount} </h5>
        <p className='card-text'>{date}</p>
      </div>
    </div>
  )
}
export default DebtCard

DebtCard.propTypes = {
  userName: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.string,
}
