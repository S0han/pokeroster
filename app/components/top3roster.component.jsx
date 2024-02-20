import Slot from './slot.component';

const Top3Roster = ({top3data}) => {
    return (
        <div className="top3roster-container">
            {
                top3data.map((pokemon, index) => {
                    <Slot key={index} pokemon={pokemon} />
                })
            }
        </div>
    );
}

export default Top3Roster;