function Modal({ children, close }) {
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        {children}
        <span onClick={close} className='modal-close'>
          x
        </span>
      </div>
    </div>
  )
}
export default Modal
