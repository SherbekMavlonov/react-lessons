import PropTypes from 'prop-types'
import Card from '@/components/card'
import { useEffect, useState } from 'react'
import { instance } from '@/utils/use-request'

function WishList() {
  const [data, setData] = useState([])
  const getData = async () => {
    const data = await instance.get('/user')
    setData(data.data?.user?.wishlist)
  }
  const click = async (id) => {
    await instance.delete('/wishlist/' + id)
    getData()
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className='flex  mt-5 flex-wrap gap-10'>
      {data?.length ? (
        data.map((wishItem) => (
          <Card key={wishItem._id} {...wishItem} handleLikeBtnClick={click} />
        ))
      ) : (
        <h1 className='text-4xl'>No Wishlist</h1>
      )}
    </div>
  )
}
export default WishList

WishList.propTypes = {
  wishList: PropTypes.array,
  setWishList: PropTypes.func,
}
