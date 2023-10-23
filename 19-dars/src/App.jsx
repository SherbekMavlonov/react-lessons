import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './pages/home.jsx'

import Header from './components/header.jsx'
import Layout from './components/layout.jsx'
import SingleProduct from './pages/single-product.jsx'
import Shop from './pages/shop.jsx'
import { instance } from './utils/use-request.js'

function App() {
  const [products, setProducts] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])
  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const data = await instance.get('/home/products')
      setProducts(data.data?.productsList)
    })()
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
              />
            }
          />
          <Route
            path='/shop'
            element={
              <Shop
                products={products}
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
              />
            }
          />
          <Route path='/product/:productID' element={<SingleProduct />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
