import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName, fetchPokemonGeneration, fetchPokemonList } from '../apis/pokemon.ts'
import {Link, useParams} from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'

interface Props {
    pokemonName: string
}



export default function IndividualPokemon({pokemonName}: Props) {
    const { data: pokemon, isPending, isError} = useQuery({
        queryKey: ['pokemon', pokemonName],
        queryFn: () => fetchPokemonByName(pokemonName)
    }) 

    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>An error occured!</p>
    }
    console.log(pokemon.sprites.front_default)
    return (
        <>
        <img src = {pokemon.sprites.front_default} alt={pokemonName}/>
        {/* <p>Hi, my name is {pokemonName}</p> */}
        {/* <pre>{JSON.stringify(pokemon, null, 2)} </pre> */}
        </>
    )
}