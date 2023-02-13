//hooks principales
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
//import styles
import './Pokemon.css';
//Api
import * as API from "../services/pokemones";

function Home() {

    const [pokemones, setPokemones] = useState([]);

    //console.log(pokemones)

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
        <div className="card-container row">

            <h1 className='py-4 text-center'>Poke-App</h1>

            {pokemones.map(poke => (
                <div key={poke.id} onClick={event =>  window.location.href='/pokemon/' + poke.name} className={"card mb-4 col-6 col-lg-4 " + poke.types[0].type.name}>
                    <div className="row g-0">

                        <div className="col-8">
                            <div className="card-body">
                                <h4 className='poke-id'># {poke.id}</h4>
                                <h5 className="poke-name">{poke.name}</h5>
                            </div>
                        </div>

                        <div className="col-4">
                            <img src={poke.sprites.front_default} alt="Logo" className="img-fluid rounded-start" />
                        </div>

                    </div>
                </div>
            ))}

            <Outlet/>

        </div>
    );
}

export default Home;
