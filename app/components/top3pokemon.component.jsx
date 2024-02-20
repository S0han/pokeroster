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
            setTop3DisplayData([...top3DisplayData, pokeFormat]);
        } catch (e) {
            console.error(e.message);
        }
    }

    const displayTop3PokemonHandler = () => {
        top3PokemonHandler();
        //go through each name of top3Pokemon and fetch data to add to slots
        //creating a for loop and call fetch 3 times to get all 3 pokemon
        for (let i = 0; i < top3Pokemon.length; i++) {
            getPokemonDataHandler(top3Pokemon[i].pokemon_name);
        }
    }

    displayTop3PokemonHandler();

    return (
        <div>   
            <Top3Roster top3DisplayData={top3DisplayData} />
        </div>
    );
}

export default Top3PokemonSlots;