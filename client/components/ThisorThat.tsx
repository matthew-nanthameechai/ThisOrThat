import { Link } from 'react-router-dom'

function ThisorThat() {
  return (
    <>
      <div>
        <h1>This Or That Pokemon Edition</h1>
      </div>
      <Link to="/some-route">
        <input type="button" value="Type here" />
      </Link>
      <Link to="/some-other-route">
        <input type="button" value="Type here" />
      </Link>
    </>
  )
}

export default ThisorThat
