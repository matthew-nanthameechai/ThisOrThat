import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName, fetchPokemonGeneration } from '../apis/pokemon.ts'
import {Link, useParams} from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'

export default function PokemonGame () {
    const name = 'pidgey'
    // const { name } = useParams()

    const { data: pokemon, isPending, isError} = useQuery({
        queryKey: ['pokemon', name],
        queryFn: () => fetchPokemonByName(name)
    }) 

    if (isPending) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>An error occured!</p>
    }
    console.log(pokemon)
    return(
        <h1>🐸🐸{name}</h1>
    )
}


// create function
    // create query / handle api
        // create array with images
    // get random image function
    // create a visible/not visible state
    // handle click
    
    // create return
        // create containers
        // add reset button
        // add images to containers
            // make images clickable
