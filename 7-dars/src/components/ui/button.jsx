function Button({ type, text, onClick }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {text || 'Click me'}
    </button>
  )
}
export default Button
