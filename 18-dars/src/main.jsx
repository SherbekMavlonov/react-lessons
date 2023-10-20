import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct.jsx'
import './i18n.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Layout>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product'>
          <Route index element={<Product />} />
          <Route path=':productID' element={<SingleProduct />} />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
)
