import request from 'superagent'
import type { Pokemon, PokemonGeneration, SearchResult} from '../../models/pokemon.ts'

export async function fetchPokemonGeneration(generation: number) {
  const res = await request.get(
    `https://pokeapi.co/api/v2/generation/${generation}`
  )

  return res.body as PokemonGeneration
}

export async function fetchPokemonByName(name: string) {
  
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  return res.body as Pokemon
}

export async function fetchPokemonList() {
  
  const res = await request.get(`https://pokeapi.co/api/v2/pokemon`).query({limit: 40})
  return res.body as SearchResult
}