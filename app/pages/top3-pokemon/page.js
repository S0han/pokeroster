export default function Page() {

  //get the top 3 pokemon names from the database
  const top3PokemonHandler = async () => {
    console.log('Displaying Top 3 Pokemon Selections from Database!');
    try {
      //get the data from the top-3 folder in API
      const res = await fetch('../../api/top-3');
      const data = res.json()
      console.log(data)
    } catch(e) {
      console.error(e.message);
    } 
   
  }
  return (
    <div>
        <h1>Top 3 Pokemon</h1>
        <div>{top3PokemonHandler()}</div>
    </div>
  );
}
