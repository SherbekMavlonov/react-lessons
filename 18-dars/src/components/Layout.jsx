import PropTypes from 'prop-types'

function Layout({ children }) {
  return <div className='container'>{children}</div>
}

export default Layout

Layout.propTypes = {
  children: PropTypes.any,
}
