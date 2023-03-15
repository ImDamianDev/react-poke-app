//hooks
import { useState, useEffect } from 'react';
//Api
import * as API from "../services/pokemones";
import './ContainerCards.css'

const ContainerCards = () => {

  const [pokemones, setPokemones] = useState([]);

  useEffect(() => {
    let pokeInfo = []
    //solicitando la informacion de los pokemon
    API.getAllPokemon().then((results) => {
      //recorriendo los resultados
      results.forEach((p) => {
        //almacenando el una variable el nombre de cada poquemon encontrado
        let pokemonName = p.name
        //
        pokeInfo.push(API.getPokemonByName(pokemonName))
      })

      Promise.all(pokeInfo).then((data) => {
        let infoP = []
        data.forEach((d) => {
          infoP.push(d)
        })
        setPokemones(infoP)
      })
    })
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        {pokemones.map(poke => (
          <div className="col-12 col-md-6 col-lg-4 g-3" key={poke.id} onClick={event => window.location.href = '/pokemon/' + poke.name}>
            <div className={'poke-box ' + poke.types[0].type.name}>
              <div className='poke-info'>
                <h5 className="poke-name">{poke.name}</h5>
                <h4 className='poke-id'># {poke.id}</h4>
              </div>
              <img src={poke.sprites.front_default} alt="Logo" className="poke-img" />
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ContainerCards
