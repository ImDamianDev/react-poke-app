import './App.css';
//hooks principales
import { useState, useEffect } from 'react';
//Api
import * as API from "./services/pokemones";

function App() {

  const [pokemones, setPokemones] = useState([]);

  //console.log(pokemones)
  useEffect(() => {
    const pokeInfo = []
    const getPokeInfo = async () => {
      const results = await API.getAllPokemon()
      results.map(async (p) => {
        let pokeName = p.name
        let infoPoke = await API.getPokemonByName(pokeName)
        //console.log(pokeName)
        //console.log(await API.getPokemonByName(pokeName))
        pokeInfo.push(infoPoke)
      })
      console.log(pokeInfo)
      setPokemones(pokeInfo)
    }
    getPokeInfo()
    
  }, []);
  //console.log(pokemones)


  return (
    <div className="PokeApp">
      <h1>Pokemones</h1>

      <ul>
        {pokemones.map(poke => (
          <li key={poke.id}>Nombre: {poke.name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
