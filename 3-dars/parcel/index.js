// const heading = React.createElement('h1', null, 'Hello world')
// const myClassName = 'heading'
// const textContent = 'Hello world'
import ReactDOM from 'react-dom/client'

import App from './src/App'

ReactDOM.createRoot(document.querySelector('#root')).render(<App />)

// const h1 = `<h1 class="${myClassName}"></h1>`

// const headingJSX = <h1 className={myClassName}>{textContent}</h1>

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <div>
//     {headingJSX}
//     {headingJSX}
//     {headingJSX}
//   </div>
// )

// function

// const myClassName = 'heading'

// const HeadingJSX = ({ children = 'Hello world' }) => (
//   <h1 className={myClassName}>{children}</h1>
// )

// ReactDOM.createRoot(document.querySelector('#root')).render(
//   <div>
//     {/* {headingJSX({ children: 'Salom dunyo' })} */}
//     {/* {headingJSX({ children: 'Salom john' })} */}
//     {/* {headingJSX({ children: 'Salom ' })} */}

//     <HeadingJSX>Salom dunyo</HeadingJSX>
//     <HeadingJSX>Salom john</HeadingJSX>
//     <HeadingJSX>Salom </HeadingJSX>
//   </div>
// )

// const className = 'default'
// const children = (
//   <div>
//     <span>Test</span>
//     <span>Test</span>
//     <span>Test</span>
//   </div>
// )

// const props = {
//   className,
//   children,
// }

// const MyFirstComponent = ({ text, className }) => {
//   return (
//     <h1 className={className}>{text === 'salom dunyo' ? 'salom' : text}</h1>
//   )
// }

// const headingJSX = <h1 {...props} />

// const heading = React.createElement(
//   'h1',
//   { className: props.className },
//   props.children
// )

// const heading = (className) =>
//   React.createElement('h1', { ...props, className })
