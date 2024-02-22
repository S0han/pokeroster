'use client';
import { useState, useEffect } from 'react';
import Top3Roster from './top3roster.component';

const Top3PokemonSlots = ({ threeNamesFromDb }) => {

    //store top3 pokemon names and sprites fetched from server into array to be added to slots
    const [top3DisplayData, setTop3DisplayData] = useState([]);

    const getPokemonDataHandler = async (PokemonName) => {
        console.log('fetching top3 pokemon data');
        const pokemonValue = `https://pokeapi.co/api/v2/pokemon/${PokemonName}/`;
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
            if (threeNamesFromDb.length > 0) {
                const promises = threeNamesFromDb.map(pokemonName => getPokemonDataHandler(pokemonName));
                const pokemonData = await Promise.all(promises);
                setTop3DisplayData(pokemonData);
            } else {
                console.error('Invalid data format for threeNamesFromDb: ', threeNamesFromDb);
            }
        } catch(e) {
            console.error(e.message);
        }
    }
    
    useEffect(() => {
        console.log("Data is being passed into Top3Roster component.");
        displayTop3PokemonHandler();
    }, [threeNamesFromDb]);
    
    

    return (
        <div>   
            <Top3Roster top3DisplayData={top3DisplayData} />
        </div>
    );
}

export default Top3PokemonSlots;