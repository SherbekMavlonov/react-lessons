import { useState } from 'react'
import Report from './components/Report'
import Tabbar from './components/Tabbar'
import MyDebts from './components/MyDebts'
import TheirDebts from './components/TheirDebts'
import AddDebtModal from './components/AddDebtModal'

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [debts, setDebts] = useState([])

  const addDebt = (debt) => {
    setDebts([...debts, debt])
  }
  const myDebts = debts.filter((debt) => debt.type === 'My')
  const theirDebts = debts.filter((debt) => debt.type !== 'My')
  const totalMyDebts = debts.reduce((acc, curr) => {
    if (curr.type === 'My') {
      acc += Number(curr.amount)
    }
    return acc
  }, 0)

  const totalTheirDebts = debts.reduce((acc, curr) => {
    if (curr.type !== 'My') {
      acc += Number(curr.amount)
    }
    return acc
  }, 0)

  return (
    <div className='container mt-3'>
      <button
        type='button'
        className='btn btn-primary mt-2 mb-3'
        data-bs-toggle='modal'
        data-bs-target='#staticBackdrop'
      >
        Add debt
      </button>

      <Report totalMyDebts={totalMyDebts} totalTheirDebts={totalTheirDebts} />
      <Tabbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? <MyDebts debts={myDebts} /> : undefined}
      {activeTab === 1 ? <TheirDebts debts={theirDebts} /> : undefined}
      <AddDebtModal addDebt={addDebt} />
    </div>
  )
}

export default App
