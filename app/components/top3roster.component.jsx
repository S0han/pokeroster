import Slot from './slot.component';

const Top3Roster = ({top3DisplayData}) => {
    return (
        <div className="top3roster-container">
            {
                top3DisplayData.map((pokemon, index) => {
                    <Slot key={index} pokemon={pokemon} />
                })
            }
        </div>
    );
}

export default Top3Roster;