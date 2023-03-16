import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
//import styles
import './Pokemon.css';
//Api
import * as API from "../services/pokemones";

const Pokemon = () => {

    const { pokeName } = useParams();
    const [pokeInfo, setPokeInfo] = useState({});
    const [pokeImg, setPokeImg] = useState({})
    const [pokeTypes, setPokeTypes] = useState({});

    console.log(pokeInfo)

    useEffect(() => {
        let pokeTypes = []
        //solicitando la informacion de los pokemon
        API.getPokemonByName(pokeName).then(
            data => {
                setPokeInfo(data)
                setPokeImg(data.sprites.other.dream_world.front_default)
                data.types.map(
                    t => (
                        pokeTypes.push(t.type.name)
                    )
                )
                setPokeTypes(pokeTypes)
            }
        )
    }, [pokeName]);


    return (
        <div className='container py-5'>
            <div className='row bg-danger'>
                <div className='basic-info bg-dark text-white basic col-12 col-md-6'>
                    <a href="/"><i className="bi bi-arrow-left"></i></a>
                    <img src={pokeImg} alt={"PokeImg" + pokeInfo.id} />
                    <h1 className='id'># {pokeInfo.id}</h1>
                    <h1 className='name'>{pokeName}</h1>
                </div>

                <div className='bg-warning stats col-12 col-md-6'>
                    {!pokeInfo === 0 ? (<div>Loading...</div>) :
                        (
                            <div className='poke-stats'>
                                <div className="poke-type-container">
                                    <div className={"poke-type " + pokeTypes[0]}>{pokeTypes[0]}</div>
                                    {!pokeTypes[1] ? "" : (<div className={"poke-type " + pokeTypes[1]}>{pokeTypes[1]}</div>)}
                                </div>
                                <div>
                                    <h5>EXP</h5>
                                    <p>{pokeInfo.base_experience}</p>
                                </div>
                                <div>
                                    <h5>HEIGHT</h5>
                                    <p>{pokeInfo.height}</p>
                                </div>
                                <div>
                                    <h5>WEIGHT</h5>
                                    <p>{pokeInfo.weight}</p>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Pokemon