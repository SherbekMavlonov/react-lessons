import PropTypes from 'prop-types'

const tabs = [
  {
    tabTitle: 'All',
  },
  {
    tabTitle: 'Un completed',
  },
  {
    tabTitle: 'Completed',
  },
]

function Tabs({ currentTab, setCurrentTab }) {
  return (
    <ul className='nav nav-underline mb-5'>
      {tabs.map((tab, idx) => (
        <li
          className='nav-item'
          key={tab.tabTitle}
          onClick={() => setCurrentTab(idx)}
        >
          <a
            className={`nav-link ${currentTab === idx ? 'active' : ''}`}
            aria-current='page'
            href='#'
          >
            {tab.tabTitle}
          </a>
        </li>
      ))}
    </ul>
  )
}

Tabs.propTypes = {
  currentTab: PropTypes.number,
  setCurrentTab: PropTypes.func,
}
export default Tabs
