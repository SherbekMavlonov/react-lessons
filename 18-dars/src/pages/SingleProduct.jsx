import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRequest } from '../utils/useRequest'

function SingleProduct() {
  const [product, setProduct] = useState(null)
  const { productID } = useParams()

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const data = await useRequest.get('products/' + productID)
      setProduct(data.data)
    })()
  }, [productID])

  return product ? (
    <div className='flex justify-between mt-9 gap-10 items-center'>
      <div>
        <img src={product.image} alt='' className='w-2/3' />
      </div>
      <div className='w-2/3'>
        <h1 className={'text-2xl text-gray-500 mb-3 font-bold'}>
          {product.title}
        </h1>
        <p className='text-gray-400'>{product.description}</p>
        <p className='mt-3'>${product.price}</p>
      </div>
    </div>
  ) : (
    <h1>Loading</h1>
  )
}
export default SingleProduct
