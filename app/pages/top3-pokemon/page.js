import Top3PokemonSlots from '../../components/top3pokemon.component';

 //get the top 3 pokemon names from the database
 const threeNamesFromDb = async () => {
  console.log('Displaying Top 3 Pokemon Selections from Database!');
  try {
      //get the data from the top-3 folder in api/top-3
      const res = await fetch('/api/top-3');
      const data = await res.json();
      console.log(data);
  } catch(e) {
      console.error(e.message);
  }
}

export default function Page() {

  const data = threeNamesFromDb()

  return (
    <div>
        <h1>Top 3 Pokemon</h1>
        <Top3PokemonSlots threeNamesFromDb={data} />
    </div>
  );
}
