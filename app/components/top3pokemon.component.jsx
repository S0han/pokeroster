const Top3PokemonSlots = () => {
    
    //get the top 3 pokemon names from the database
    const top3PokemonHandler = async () => {
    console.log('Displaying Top 3 Pokemon Selections from Database!');
    try {
      //get the data from the top-3 folder in api/top-3
      const res = await fetch('/api/top-3');
      const data = res.json();
      console.log(data);
    } catch(e) {
      console.error(e.message);
    } 
   
  }
    
    return (
        <div>{top3PokemonHandler()}</div>
    );
}

export default Top3PokemonSlots;