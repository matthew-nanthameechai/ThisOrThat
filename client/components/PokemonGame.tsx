import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  fetchPokemonByName,
  fetchPokemonGeneration,
  fetchPokemonList,
} from '../apis/pokemon.ts'
import { Link, useParams } from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'
import IndividualPokemon from './IndividualPokemon.tsx'
import { get } from 'http'

export default function PokemonGame() {
  // const name = 'pidgey'
  const [left, setLeft] = useState<number[]>([0])
  const [right, setRight] = useState<number[]>([0])
  // const [indexes, setIndexes] = useState(null as null | [number, number])

  const {
    data: pokemonlist,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['pokemonlist'],
    queryFn: () => fetchPokemonList(),
  })

  useEffect(() => {
    if (pokemonlist === undefined) {
      return
    }
    const left: Array<number> = [
      Math.floor(Math.random() * pokemonlist.results.length),
    ]
    const right: Array<number> = [
      Math.floor(Math.random() * pokemonlist.results.length),
    ]
    setLeft(left)
    setRight(right)
  }, [pokemonlist])

  if (isPending || (left === null && right === null)) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>An error occured!</p>
  }

  const pokemonArray = pokemonlist.results.map((pokemon) => pokemon.name)

  const handleClick = (side: string) => {
    if (side === 'left') {
      console.log('left')
      const left: Array<number> = [
        Math.floor(Math.random() * pokemonlist.results.length),
      ]
      setLeft(left)
    }
    if (side === 'right') {
      console.log('right')
      const right: Array<number> = [
        Math.floor(Math.random() * pokemonlist.results.length),
      ]
      setRight(right)
    }
  }

  return (
    <>
      <div className="pokemonContainer">
        <button className="left" onClick={() => handleClick('left')}>
          <IndividualPokemon pokemonName={pokemonArray[left[0]]} />
        </button>
        <h1>or</h1>
        <button className="right" onClick={() => handleClick('right')}>
          <IndividualPokemon pokemonName={pokemonArray[right[0]]} />
        </button>
      </div>
    </>
  )
}

