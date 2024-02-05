const Slot = ({pokemon}) => {
    return  (
        
        <div className="slot-container">
            <img src={pokemon ? pokemon.sprites : null} alt={pokemon ? pokemon.name : null} />
            <p>{pokemon ? pokemon.name : null}</p>
       </div>
    );
}

export default Slot;