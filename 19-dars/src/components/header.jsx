import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function Header() {
  const isLogged = true
  return (
    <header className='flex justify-between py-6 px-2  border-b-2'>
      <Link to={'/'}>Book</Link>
      <div>
        {isLogged ? (
          <>
            <Link to={'/shop'} className='rounded-full bg-blue-400 p-2'>
              Shop
            </Link>
            <Link to={'/'} className='rounded-full bg-blue-400 p-2'>
              Wishlist
            </Link>
            <Link to={'/'} className='rounded-full bg-blue-400 p-2'>
              Cart
            </Link>
            <Link to={'/'} className='rounded-full bg-blue-400 p-2'>
              Orders
            </Link>
          </>
        ) : (
          <Button>Login</Button>
        )}
      </div>
    </header>
  )
}
export default Header
