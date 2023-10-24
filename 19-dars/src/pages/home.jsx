import PropTypes from 'prop-types'
import Genres from '@/components/genres'
import NewArrivals from '@/components/new-arrivals'

function Home({ selectedGenres, setSelectedGenres, wishList, setWishList }) {
  return (
    <div className='mt-3'>
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      <NewArrivals setWishList={setWishList} wishList={wishList} />
    </div>
  )
}
export default Home

Home.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
}
