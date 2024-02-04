'use client';
import { useState, useEffect } from 'react'; 
import Preview from './preview.component';

const Search = () => {
    //name that is input into the search bar
    const [inputValue, setInputValue] = useState('');
    //retrieve pokemon data based on enetered name when preview button is clicked
    const [pokeData, setPokeData] = useState('Select Pokemon');

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue])

    //detects a change in the search bar
    const searchInputHandler = (event) => {
        setInputValue(event.target.value);
    };

    //API call to URl to pull in desired data on pokemon (sprite, name)
    const previewInputHandler = async () => {
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

    //stops the form from refreshing when enter is pressed
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label> Enter Pokemon name:</label>
                <input type="text" id="name_input" value={inputValue} onChange={searchInputHandler} />
                <button type="button" onClick={previewInputHandler} >Preview</button>
                <input type="submit" value="Submit" />
            </form>
            <Preview id="preview-pokemon" searchBarData={pokeData}/>
        </div>
    );
}

export default Search;