import Slot from './slot.component';

const Top3Roster = ({data}) => {
    return (
        <div className="top3roster-container">
            {
                data.map((pokemon, index) => {
                    <Slot key={index} pokemon={pokemon} />
                })
            }
        </div>
    );
}

export default Top3Roster;