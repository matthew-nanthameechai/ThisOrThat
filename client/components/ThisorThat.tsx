import { Link } from 'react-router-dom'
import PokemonGame from './PokemonGame'

function ThisorThat() {
  return (
    <>
      <div>
        <h1>This Or That Pokemon Edition</h1>
        <PokemonGame />
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
