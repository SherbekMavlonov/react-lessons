import PropTypes from 'prop-types'

function Report({ totalMyDebts, totalTheirDebts }) {
  return (
    <div className='row'>
      <div className='col-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Mening qarzlarim</h5>
            <p className='card-text'>$ {totalMyDebts}</p>
          </div>
        </div>
      </div>
      <div className='col-6'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Ularning qarzlari</h5>

            <p className='card-text'>$ {totalTheirDebts}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Report

Report.propTypes = {
  totalMyDebts: PropTypes.number,
  totalTheirDebts: PropTypes.number,
}
