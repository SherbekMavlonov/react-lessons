import PropTypes from 'prop-types'
import { useEffect } from 'react'

function ChildComponent({ add }) {
  useEffect(() => {
    console.log('Changed')
  }, [add])

  return <div>ChildComponent</div>
}
export default ChildComponent

ChildComponent.propTypes = {
  add: PropTypes.func,
}
