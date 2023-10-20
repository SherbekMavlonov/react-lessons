import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useRequest } from '../utils/useRequest'
import SortBy from '../components/SortBy'

function Product() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortBy, setSortBy] = useState('desc')

  const getProducts = async () => {
    setIsLoading(true)
    const data = await useRequest.get('products?sort=' + sortBy)
    setProducts(data.data)
    setIsLoading(false)
  }
  useEffect(() => {
    getProducts()
  }, [sortBy])

  return (
    <>
      <div className='mt-2'>
        <SortBy setSortBy={setSortBy} sortBy={sortBy} />
      </div>
      {isLoading ? (
        <div className='flex justify-center items-center w-full h-screen'>
          Loading ...
        </div>
      ) : (
        <div className='flex justify-around	flex-wrap gap-2 mt-5'>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </>
  )
}
export default Product
