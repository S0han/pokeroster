'use client'
import { useState, useEffect } from 'react';
import Top3Roster from './top3pokemon.component';

const Top3PokemonSlots = () => {

    //get the top 3 pokemon names from the database
    const [top3Pokemon, setTop3Pokemon] = useState([]);
    //store top3 pokemon names and sprites fetched from server into array to be added to slots
    const [top3DisplayData, setTop3DisplayData] = useState([]);
    
    //get the top 3 pokemon names from the database
    const top3PokemonHandler = async () => {
        console.log('Displaying Top 3 Pokemon Selections from Database!');
        try {
            //get the data from the top-3 folder in api/top-3
            const res = await fetch('/api/top-3');
            const data = await res.json();
            setTop3Pokemon(data);
            console.log(data);
        } catch(e) {
            console.error(e.message);
        }
    }

    const getPokemonDataHandler = async (top3PokemonName) => {
        console.log('fetching top3 pokemon data');
        const pokemonValue = `https://pokeapi.co/api/v2/pokemon/${top3PokemonName}/`;
        try {
            const response = await fetch(pokemonValue);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            const data = await response.json();
            const pokeFormat = {
                name: data.name,
                sprites: data.sprites.front_default
            }
            return pokeFormat
        } catch (e) {
            console.error(e.message);
        }
    }

    const displayTop3PokemonHandler = async () => {
        try {
            await top3PokemonHandler();
            const pokemonData = []
            for (let i = 0; i < top3Pokemon.length; i++) {
                const pokemon = await getPokemonDataHandler(top3Pokemon[i].pokemon_name);
                pokemonData.push(pokemon);
            }
            setTop3DisplayData(pokemonData);
        } catch(e) {
            console.error(e.message);
        }
        
    }

    useEffect(() => {
        displayTop3PokemonHandler();
    }, []);
    
    return (
        <div>   
            {
                top3DisplayData !== null ? 
                    (<Top3Roster top3DisplayData={top3DisplayData} />) : 
                    (<div>Loading...</div>)
            }
        </div>
    );
}

export default Top3PokemonSlots;