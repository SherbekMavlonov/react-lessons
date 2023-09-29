function Input({ type = 'text', onChange, placeholder, value }) {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className='input'
      value={value}
    />
  )
}
export default Input
