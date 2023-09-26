const HeadingComponent = (props) => {
  // let children = 'Salom dunyo'

  // if (props.children) {
  //   children = props.children
  // }
  // React.createElement("h1", null, children)

  const { className, title } = props

  return <h1 className={className || 'defaultHeadingStyle'}>{title}</h1>
}

export default HeadingComponent
