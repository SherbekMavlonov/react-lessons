import React from 'react'
import ReactDOM from 'react-dom/client'
import { products } from './data'

// const heading = React.createElement('h1', {}, 'Hello world')

const heading1 = (
  <div>
    {products.map(({ title, productCount, imgUrl }, idx) => (
      <div className='box' key={idx}>
        <img src={imgUrl} alt='' />
        <h2>{title}</h2>
        <p>{productCount} products</p>
      </div>
    ))}
    {/* <img src={require('./assets/Vegetable.png')} alt='' /> */}
  </div>
)

ReactDOM.createRoot(document.querySelector('#root')).render(heading1)
// console.log('test')
// JSX => javascript xml
