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
    const [pokeStats, setPokeStats] = useState([]);

    console.log(pokeInfo)
    console.log(pokeStats)

    useEffect(() => {
        let pokeTypes = []
        let pokeStats = []

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
                data.stats.map(
                    stat => (
                        pokeStats.push(
                            {
                                stat: stat.stat.name,
                                value: stat.base_stat
                            }
                        )
                    )
                )
                setPokeStats(pokeStats)
            }
        )
    }, [pokeName]);


    return (
        <div className='poke-page container'>
            <div className='card'>
                <div className='card-header'>
                    <h1 className='name'>{pokeName}</h1>
                    <h1 className='id'># {pokeInfo.id}</h1>
                </div>
                <div className='card-body'>
                    <a href="/"><i className="bi bi-arrow-left"></i></a>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <img src={pokeImg} alt={"PokeImg" + pokeInfo.id} />
                            <div className="poke-type-container">
                                <div className={"poke-type " + pokeTypes[0]}>{pokeTypes[0]}
                                </div>
                                {!pokeTypes[1] ? "" : (<div className={"poke-type " + pokeTypes[1]}>{pokeTypes[1]}</div>)}
                            </div>
                        </div>
                        <div className='card-body-info col-12 col-md-6'>
                            <div className={'about-poke ' + pokeTypes[0]}>
                                <h5 class="card-title">
                                    About
                                </h5>
                                <hr />
                                {!pokeInfo === 0 ? (<div>Loading...</div>) :
                                    (
                                        <div className='about-stats'>
                                            <div>
                                                <h6 class="card-subtitle mb-2 text-muted">
                                                    Experience
                                                </h6>
                                                <p class="card-text">
                                                    {pokeInfo.base_experience}
                                                </p>
                                            </div>
                                            <div>
                                                <h6 class="card-subtitle mb-2 text-muted">
                                                    Height
                                                </h6>
                                                <p class="card-text">
                                                    {pokeInfo.height} ft
                                                </p>
                                            </div>
                                            <div>
                                                <h6 class="card-subtitle mb-2 text-muted">
                                                    Weight
                                                </h6>
                                                <p class="card-text">
                                                    {pokeInfo.weight} lbs
                                                </p>
                                            </div>

                                        </div>

                                    )
                                }
                            </div>
                            <div className='stats-poke'>
                                <h5 class="card-title">
                                    Base Stats
                                </h5>
                                <hr />
                                {pokeStats.map((stat) => {
                                    return (
                                        <div className='stat-item'>
                                            <div className='row'>
                                                <div className='col-4'>
                                                    <h6 className="card-subtitle">
                                                        {stat.stat}
                                                    </h6>
                                                </div>
                                                <div className='col-2'>
                                                    <h6 className="card-subtitle">
                                                        {stat.value}
                                                    </h6>
                                                </div>
                                                <div className="col-6 progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: stat.value }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon