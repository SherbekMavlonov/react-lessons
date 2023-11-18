import React from 'react'
import ReactDOM from 'react-dom/client'

// import { ApiProvider } from '@reduxjs/toolkit/query/react'
import 'bootstrap/dist/css/bootstrap.min.css'

// import { baseApi } from './store/apiSlice.js'
import Header from './components/header.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { ErrorBoundary } from 'react-error-boundary'

import Todos from './pages/todos.jsx'
import Posts from './pages/posts.jsx'
import SinglePost from './pages/single-post.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import User from './pages/user.jsx'
import { ErrorBoundary } from './components/error-boundary.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ErrorBoundary fallback={<h1>Something went wrong</h1>}> */}
    <ErrorBoundary>
      <Provider store={store}>
        {/* <ApiProvider api={baseApi}> */}
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<User />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/post/:id' element={<SinglePost />} />
          </Routes>
        </BrowserRouter>
        {/* </ApiProvider> */}
      </Provider>
    </ErrorBoundary>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
)
