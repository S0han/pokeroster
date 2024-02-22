import Top3PokemonSlots from '../../components/top3pokemon.component';

 //get the top 3 pokemon names from the database
 const threeNamesFromDb = async () => {
  console.log('Displaying Top 3 Pokemon Selections from Database!');
  try {
      //get the data from the top-3 folder in api/top-3
      const res = await fetch('http://localhost:3000/api/top-3');
      const data = await res.json();
      console.log(`Fetched Data: ${data}`);

      // Extracting only the names from the data
      const names = data.top3.map(item => item.pokemon_name);
      console.log(`Extracted names:`, names);
      
      return names;
  } catch(e) {
      console.error(e.message);
  }
}

export default async function Page() {
  try {
      let data = await threeNamesFromDb();
      console.log(`This is the data being fed as a prop: ${data}`);

      // Ensure data is an array
      if (!Array.isArray(data)) {
        data = [data]; // Convert to array if not already an array
      }
    
      return (
        <div>
            <h1>Top 3 Pokemon</h1>
            <Top3PokemonSlots threeNamesFromDb={data} />
        </div>
      );
  } catch (e) {
    // handle error
    console.error('Error fetching data:', e.message);
    return <div>Error fetching data</div>;
  }
}
