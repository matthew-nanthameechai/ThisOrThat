import { Link } from 'react-router-dom'
import Home from './Home'

function Nav() {
  return (
    <>
      <div className="header">
        <Home />
        <h1>
          <Link to={'/game/thisorthat'}>This Or That</Link>
        </h1>
      </div>
    </>
  )
}

export default Nav
