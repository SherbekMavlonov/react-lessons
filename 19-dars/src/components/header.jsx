import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Header({ isLogged, setIsLogged }) {
  const onLogout = () => {
    localStorage.removeItem('access_token')
    setIsLogged(false)
  }
  return (
    <header className='flex justify-between py-6 px-2  border-b-2'>
      <Link to={'/'}>Book</Link>
      <div>
        {isLogged ? (
          <>
            <Link to={'/shop'} className='rounded-full bg-blue-400 p-2'>
              Shop
            </Link>
            <Link to={'/wishlist'} className='rounded-full bg-blue-400 p-2'>
              Wishlist
            </Link>
            <Link to={'/'} className='rounded-full bg-blue-400 p-2'>
              Cart
            </Link>
            <Link to={'/'} className='rounded-full bg-blue-400 p-2'>
              Orders
            </Link>
            <Button onClick={onLogout}>Logout</Button>
          </>
        ) : (
          <Link to={'/login'} className='p-2 bg-slate-500 text-white'>
            Login
          </Link>
        )}
      </div>
    </header>
  )
}
export default Header

Header.propTypes = {
  isLogged: PropTypes.any,
  setIsLogged: PropTypes.func,
}
