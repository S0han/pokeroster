'use client'
import { useState, useEffect } from 'react';
import Top3Roster from './top3pokemon.component';

const Top3PokemonSlots = () => {

    const [top3Pokemon, setTop3Pokemon] = useState([]);
    
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

    top3PokemonHandler();
   
  }
    
    return (
        <div>   
            <Top3Roster />
        </div>
    );
}

export default Top3PokemonSlots;