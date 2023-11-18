import { Link } from 'react-router-dom'

function Header() {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <Link className='nav-link' to='/'>
          Posts
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/todos'>
          Todos
        </Link>
      </li>
    </ul>
  )
}

export default Header
