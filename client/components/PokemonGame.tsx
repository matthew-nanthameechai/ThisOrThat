import { useState } from "react";
import { useQuery } from '@tanstack/react-query'
import { fetchPokemonByName, fetchPokemonGeneration } from '../apis/pokemon.ts'
import {Link, useParams} from 'react-router-dom'
import { Pokemon } from '../../models/pokemon.ts'

export default function PokemonGame () {
    const { data: isPending, isError} = useQuery
    
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
