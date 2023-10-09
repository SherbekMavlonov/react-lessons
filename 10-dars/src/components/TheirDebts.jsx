import PropTypes from 'prop-types'
import DebtCard from './DebtCard'

function TheirDebts({ debts }) {
  return (
    <div className='mt-5'>
      {debts.map((debt, idx) => (
        <DebtCard {...debt} key={idx} />
      ))}
    </div>
  )
}
export default TheirDebts

TheirDebts.propTypes = {
  debts: PropTypes.array,
}
