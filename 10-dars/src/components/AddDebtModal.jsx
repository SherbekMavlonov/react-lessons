import PropTypes from 'prop-types'
import { useState } from 'react'

function AddDebtModal({ addDebt }) {
  // const [amount, setAmount] = useState(0)
  // const [userName, setUserName] = useState('')
  // const [description, setDescription] = useState('')
  // const [date, setDate] = useState('')
  // const [type, setType] = useState('')

  const [debt, setDebt] = useState({
    amount: 0,
    userName: '',
    description: '',
    date: '',
    type: 'My',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    debt[name] = value
    setDebt({ ...debt })
  }
  const add = () => {
    addDebt(debt)
    setDebt({
      amount: 0,
      userName: '',
      description: '',
      date: '',
      type: 'My',
    })
  }
  return (
    <>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel'>
                Add Debt
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  UserName
                </label>
                <input
                  name='userName'
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='John Doe'
                  value={debt.userName}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Amount
                </label>
                <input
                  name='amount'
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='John Doe'
                  value={debt.amount}
                  onChange={handleChange}
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlInput1'
                  className='form-label'
                >
                  Date
                </label>
                <input
                  name='date'
                  type='date'
                  value={debt.date}
                  onChange={handleChange}
                  className='form-control'
                  id='exampleFormControlInput1'
                  placeholder='John Doe'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='exampleFormControlTextarea1'
                  className='form-label'
                >
                  Description
                </label>
                <textarea
                  name='description'
                  value={debt.description}
                  onChange={handleChange}
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                ></textarea>
              </div>
              <select
                name='type'
                className='form-select'
                aria-label='Default select example'
                value={debt.type}
                defaultChecked={debt.type}
                onChange={handleChange}
              >
                <option value='My'>My Debt</option>
                <option value='Their'>Their debt</option>
              </select>
            </div>
            <div className='modal-footer'>
              <button
                className='btn btn-primary'
                data-bs-dismiss='modal'
                onClick={add}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddDebtModal

AddDebtModal.propTypes = {
  addDebt: PropTypes.func,
}
