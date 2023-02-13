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
                setPokeImg(data.sprites.front_default)
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
        <>
            <div className='poke-page-container'>
                <a href="/"><i className="bi bi-arrow-left"></i></a>
                <img src={pokeImg} alt={"PokeImg" + pokeInfo.id} />
                <h1 className='id'># {pokeInfo.id}</h1>
                <h1 className='name'>{pokeName}</h1>
                <div className="poke-type-container">
                    <div className={"poke-type " + pokeTypes[0]}>{pokeTypes[0]}</div>
                    {!pokeTypes[1] ? "" : (<div className={"poke-type " + pokeTypes[1]}>{pokeTypes[1]}</div>)}

                </div>
            </div>
            {!pokeInfo === 0 ? (<div>Loading...</div>) :
                (
                    <div className={'poke-stats ' + pokeTypes[0]}>
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
        </>

    )
}

export default Pokemon