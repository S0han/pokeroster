import Slot from './slot.component';

const Roster = ({rosterData}) => {
    return (
        <div className="roster-container">
            {
                rosterData.map((pokemon, index) =>  (
                    <Slot key={index} pokemon={pokemon} />
                ))
            }
        </div>
    );
}

export default Roster;