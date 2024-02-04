'use client';
import { useState, useEffect } from 'react'; 
import Preview from './preview.component';
import Roster from './roster.component';

const Search = () => {
    //name that is input into the search bar
    const [inputValue, setInputValue] = useState('');
    //retrieve pokemon data based on enetered name when preview button is clicked
    const [pokeData, setPokeData] = useState('Select Pokemon');
    //maintain roster state ----> an array of Slot elements with stored preiview data
    const [rosterData, setRosterData] = useState([]);

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue])

    //detects a change in the search bar
    const searchInputHandler = (event) => {
        setInputValue(event.target.value);
    };

    //API call to URL to pull in desired data on pokemon (sprite, name)
    const previewInputHandler = async () => {
        console.log('Preview Button Pressed')
        const previewValue = `https://pokeapi.co/api/v2/pokemon/${inputValue}/`
        try {
            const response = await fetch(previewValue);
            
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

    //logic for adding slot components with valid preview data to roster
    const addToRosterHandler = () => {
        return 
    }

    //stops the form from refreshing when enter is pressed
    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Submit Button Pressed');
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label> Enter Pokemon name:</label>
                <input type="text" id="name_input" value={inputValue} onChange={searchInputHandler} />
                <button type="button" onClick={previewInputHandler} >PREVIEW POKEMON</button>
                <button type="button" onClick={addToRosterHandler} >ADD TO ROSTER</button>
                <input type="submit" value="SUBMIT" />
            </form>
            <Preview id="preview-pokemon" searchBarData={pokeData}/>
            <Roster />
        </div>
    );
}

export default Search;