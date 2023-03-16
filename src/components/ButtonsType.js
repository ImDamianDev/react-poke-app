//hooks
import { useState, useEffect } from 'react';
//Api
import * as API from "../services/pokemones";
import './ButtonsType.css'

const ButtonsType = ({ pokemones }) => {

  const [types, setTypes] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemones)

  const filtrar = (tipo) => {
    alert(tipo)
    if (tipo === "borrar") {
      setFilteredPokemon(pokemones)
    } else {
      let nuevoPokemon = pokemones.filter(pokemon => {
        pokemon.types.some(t => t.type.name === tipo)
      }).map(pokemones => {
        let nuevoPokemon = { ...pokemones }
        return nuevoPokemon
      })
      setFilteredPokemon(nuevoPokemon)
    }
  }

  console.log(filteredPokemon)

  useEffect(() => {
    let pokeType = []
    API.getType().then((results) => {
      //recorriendo los resultados
      results.forEach((type) => {
        //almacenando el una variable el nombre de cada poquemon encontrado
        let typeName = type.name
        pokeType.push(typeName)
      })
      setTypes(pokeType)
    })
  }, []);


  return (
    <div className='buttons-type'>
      <button onClick={() => filtrar("borrar")} className='button-type'>
        Todos
      </button>
      <div className='buttons-type-list'>
        {types.map((type) => {
          return (
            <button key={type} onClick={() => filtrar(type)} className={'button-type ' + type}>
              {type}
            </button>
          )
        }
        )}
      </div>
    </div>
  )
}

export default ButtonsType