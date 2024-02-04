'use client';
import { useState, useEffect } from 'react';

const Slot = () => {
    const [pokeData, setPokeData] = useState('Select Pokemon');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/charmander/');
                
                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }
                const data = await response.json();
                const pokeFormat = {
                    name: data.name,
                    sprites: data.sprites.front_default
                };
                setPokeData(pokeFormat);
            } catch(e) {
                console.error(e.message)
            }
        };
        
        fetchData();
    }, []);

    return  (
        <div className="slot-container">
            <img src={pokeData.sprites} alt={pokeData.name} />
            <p>{pokeData.name}</p>
       </div>
    );
}

export default Slot;