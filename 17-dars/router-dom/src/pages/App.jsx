import { Breadcrumb, theme } from 'antd'
import { Content } from 'antd/es/layout/layout'

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  return (
    <Content
      className='site-layout'
      style={{
        padding: '0 50px',
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          padding: 24,
          minHeight: 380,
          background: colorBgContainer,
        }}
      >
        Content
      </div>
    </Content>
  )
}
export default App
