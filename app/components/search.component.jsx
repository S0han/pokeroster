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
    //valid preview status as a condition to add to roster
    const [validPreview, setValidPreview] = useState(false);

    useEffect(() => {
        console.log(inputValue);
    }, [inputValue]);

    useEffect(() => {
        console.log('Roster Updated:', rosterData);
    }, [rosterData]);

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
            setValidPreview(true);
        } catch(e) {
            console.error(e.message);
            setValidPreview(false);
        }
    };

    //logic for adding slot components with valid preview data to roster
    const addToRosterHandler = () => {
        console.log('Add To Roster Button Pressed');
        if (validPreview && rosterData.length < 6) {
            setRosterData([...rosterData, pokeData]);
            setPokeData(null);
            setInputValue('');
            console.log(rosterData);
            setValidPreview(false);
        }
    }

    //****Commented out the section below because I will be using a route handler in the api folder****
    // const submitRoster = async () => {
    //     const finalRoster = {
    //         pokemon1: rosterData[0],
    //         pokemon2: rosterData[1],
    //         pokemon3: rosterData[2],
    //         pokemon4: rosterData[3],
    //         pokemon5: rosterData[4],
    //         pokemon6: rosterData[5]
    //     };

    //     try {
    //         const request = await fetch('/submit-roster', {
    //             method: "POST",
    //             headers: {
    //                 'Content-type': "application/json"
    //             },
    //             body: JSON.stringify(finalRoster)
    //         });
    //         const response = await request.json()
    //         console.log(response);
    //     }
    //     catch (e) {
    //         console.error(e)
    //     }

    // };

    //stops the form from refreshing when enter is pressed
 
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('Submit Button Pressed');
        if (rosterData.length === 6) {
            const finalRoster = {
                pokemon1: rosterData[0].name,
                pokemon2: rosterData[1].name,
                pokemon3: rosterData[2].name,
                pokemon4: rosterData[3].name,
                pokemon5: rosterData[4].name,
                pokemon6: rosterData[5].name
            };
            const settings = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(finalRoster)
            }
            try {
                const res = await fetch('/api/submit-roster', settings);
                console.log(res);
            } catch (e) {
                console.error(e);
            }
            setRosterData([]);
        } else {
            alert('You can only submit once your roster contains 6 pokemon!');
        }
    }

    return (
        <div>
            <form onSubmit = {submitHandler}>
                <label> Enter Pokemon Name:</label>
                <input form="none" type="text" id="name_input" value={inputValue} onChange={searchInputHandler} />
                <button type="button" onClick={previewInputHandler} >PREVIEW POKEMON</button>
                <button type="button" onClick={addToRosterHandler} >ADD TO ROSTER</button>
                <input type="submit" value="SUBMIT" />
            </form>
            <Preview id="preview-pokemon" searchBarData={pokeData}/>
            <Roster rosterData={rosterData} />
        </div>
    );
}

export default Search;