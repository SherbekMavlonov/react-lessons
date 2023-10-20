import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  // createBrowserRouter,
  // RouterProvider,
  BrowserRouter,
  // Route,
} from 'react-router-dom'

import MainRoute from './MainRoute.jsx'
// import './index.css'
// import AddTodo from './pages/Add.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/login',
//     element: <AddTodo />,
//   },
//   {
//     path: '*',
//     element: <h1>404 Sahifa topilmadi</h1>,
//   },
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  </React.StrictMode>
)
