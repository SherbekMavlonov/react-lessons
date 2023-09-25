const Button = (props) => (
  <button className='btn' disabled={props.disabled}>
    {props.btnTitle}
    {props.component}
  </button>
)

export default Button
