import { genres } from '@/constants/genre'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

function Genres({ setSelectedGenres }) {
  const navigate = useNavigate()
  const handleClick = (item) => {
    setSelectedGenres(item)
    navigate('/shop')
  }
  return (
    <div className='flex justify-around mb-12'>
      {genres.map((genre) => (
        <div
          onClick={() => handleClick([genre])}
          key={genre.title}
          className='bg-blue-200 w-[100px] h-[100px] flex justify-center items-center text-lg cursor-pointer'
        >
          {genre.title}
        </div>
      ))}
    </div>
  )
}
export default Genres

Genres.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
}
