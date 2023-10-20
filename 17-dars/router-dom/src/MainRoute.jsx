import { Route, Routes } from 'react-router-dom'
import AddTodo from './pages/Add'
import App from './pages/App'
import { Layout } from 'antd'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'

function MainRoute() {
  return (
    <Layout>
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/add-todo' element={<AddTodo />} />
      </Routes>
      <FooterComponent />
    </Layout>
  )
}

export default MainRoute
