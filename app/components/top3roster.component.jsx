import Slot from './slot.component';
import { useEffect } from 'react';

const Top3Roster = ({ top3DisplayData }) => {

    useEffect(() => {
        console.log("Data ready to be mapped: ", top3DisplayData)
    }, [top3DisplayData]);
    
    return (
        <div className="top3roster-container">
            {
                top3DisplayData.map((pokemon, index) => (
                    <Slot key={index} pokemon={pokemon} />
                ))
            }
        </div>
    );
}

export default Top3Roster;