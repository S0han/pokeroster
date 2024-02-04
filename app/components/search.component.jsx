'use client';
import { useState, useEffect } from 'react'; 
import Slot from './slot.component'

const Search = () => {

    const [inputValue, setInputValue] = useState('');

    const searchInputHandler = (event) => {
        setInputValue(event.target.value);
        console.log(inputValue);
    }

    return (
        <div>
            <form>
                <label> Enter Pokemon name:</label>
                <input type="text" id="name_input" value={inputValue} onChange={searchInputHandler} />
                <input type="submit" />
            </form>
            <Slot />
        </div>
    );
}

export default Search;