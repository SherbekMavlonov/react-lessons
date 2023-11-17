import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Home from './pages/home.jsx'
import SingleTodo from './pages/single-todo.jsx'
import './index.css'
import { store } from './store/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleTodo />} />
      </Routes>
    </Provider>
  </BrowserRouter>
)
