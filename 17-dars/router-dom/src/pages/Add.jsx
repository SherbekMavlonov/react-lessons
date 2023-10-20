function Add() {
  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <input
            id='q'
            aria-label='Search contacts'
            placeholder='Search'
            type='search'
            name='q'
          />
          <div id='search-spinner' aria-hidden hidden={true} />
          <div className='sr-only' aria-live='polite'></div>

          <button type='submit'>New</button>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>Your Name</a>
            </li>
            <li>
              <a href={`/contacts/2`}>Your Friend</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id='detail'></div>
    </>
  )
}
export default Add
