import PropTypes from 'prop-types'
import DebtCard from './DebtCard'
function MyDebts({ debts }) {
  return (
    <div className='mt-5'>
      {debts.map((debt, idx) => (
        <DebtCard {...debt} key={idx} />
      ))}
    </div>
  )
}
export default MyDebts

MyDebts.propTypes = {
  debts: PropTypes.array,
}
