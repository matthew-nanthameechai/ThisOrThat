import { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName, fetchPokemonGeneration, fetchPokemonList } from '../apis/pokemon.ts'
import {Link, useParams} from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'
import IndividualPokemon from "./IndividualPokemon.tsx";

export default function PokemonGame () {
    // const name = 'pidgey'

    const [indexes, setIndexes] = useState(null as null | [number, number])

    const { data: pokemonlist, isPending, isError} = useQuery({
        queryKey: ['pokemonlist'],
        queryFn: () => fetchPokemonList()
    }) 

    useEffect(() => {
        if (pokemonlist === undefined){
            return
        }
        const first = Math.floor(Math.random()*pokemonlist.results.length)
        const second = Math.floor(Math.random()*pokemonlist.results.length)
        setIndexes([first, second])
    }, [pokemonlist])

    if (isPending || indexes === null) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>An error occured!</p>
    }
    
    const pokemonArray = pokemonlist.results.map((pokemon) => pokemon.name)

   
    return(
        <>
            <IndividualPokemon pokemonName={pokemonArray[indexes[0]]}/>
            <IndividualPokemon pokemonName={pokemonArray[indexes[1]]}/>
        </>

        
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
