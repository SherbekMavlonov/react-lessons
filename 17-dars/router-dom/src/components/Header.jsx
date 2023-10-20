import { Button } from 'antd'
import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

const navbarLinks = [
  {
    to: '/',
    label: 'Home',
  },
  {
    to: '/add-todo',
    label: 'Add todo',
  },
  {
    to: '/delete-todo',
    label: 'Delete todo',
  },
]

function HeaderComponent() {
  return (
    <Header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='demo-logo' />

      {navbarLinks.map(({ to, label }, index) => (
        <Button key={index} style={{ marginRight: 10 }} type='link'>
          <Link to={to}>{label}</Link>
        </Button>
      ))}
    </Header>
  )
}
export default HeaderComponent
