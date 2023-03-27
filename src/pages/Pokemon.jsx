import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchPokemon from "../hooks/useFetchPokemon";
import Loading from "../components/Loading"
import Footer from "../components/Footer"
//import styles
import './Pokemon.css';
import pokeball from '../pokeball.svg';

const Pokemon = () => {

    const { pokeName } = useParams();
    //console.log(pokeName)
    const { pokemon, isLoading, error } = useFetchPokemon(pokeName);

    const getFirstType = () => {
        if (!pokemon.types || pokemon.types.length === 0) {
            return null;
        }

        return pokemon.types[0];
    };

    if (isLoading) {
        return <Loading />;
    }


    return (
        <>
            <div className='poke-page container'>
                <div className='card'>
                    <div className={'card-header ' + getFirstType()}>
                        <a href="/"><i className="bi bi-arrow-left"></i></a>
                        <h1 className='name'>{pokeName}</h1>
                        <h1 className='id'># {pokemon.id}</h1>
                    </div>
                    <div className='card-body'>

                        <div className='row'>
                            <div className='card-body-basic col-12 col-md-6'>
                                <img className='pokeball' src={pokeball} alt="Pokeball" />
                                <img className='img-poke' src={pokemon.sprite} alt={pokeName} />
                                <div className="poke-type-container">
                                    <div className={"poke-type " + getFirstType()}>{getFirstType()}
                                    </div>
                                    {!pokemon.types[1] ? "" : (<div className={"poke-type " + pokemon.types[1]}>{pokemon.types[1]}</div>)}
                                </div>
                            </div>
                            <div className='card-body-info col-12 col-md-6'>
                                <div className={'about-poke ' + getFirstType()}>
                                    <h5 className="card-title">
                                        About
                                    </h5>
                                    <hr />
                                    {!pokemon === 0 ? (<Loading />) :
                                        (
                                            <div className='about-stats'>
                                                <div>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Experience
                                                    </h6>
                                                    <p className="card-text">
                                                        {pokemon.base_experience}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Height
                                                    </h6>
                                                    <p className="card-text">
                                                        {pokemon.height} ft
                                                    </p>
                                                </div>
                                                <div>
                                                    <h6 className="card-subtitle mb-2 text-muted">
                                                        Weight
                                                    </h6>
                                                    <p className="card-text">
                                                        {pokemon.weight} lbs
                                                    </p>
                                                </div>

                                            </div>

                                        )
                                    }
                                </div>
                                <div className='stats-poke'>
                                    <h5 className="card-title">
                                        Base Stats
                                    </h5>
                                    <hr />
                                    {pokemon.stats.map((stat) => {
                                        return (
                                            <div className='stat-item'>
                                                <div className='row'>
                                                    <div className='col-4'>
                                                        <h6 className="card-subtitle">
                                                            {stat.name}
                                                        </h6>
                                                    </div>
                                                    <div className='col-2'>
                                                        <h6 className="card-subtitle">
                                                            {stat.value}
                                                        </h6>
                                                    </div>
                                                    <div className="col-6 progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                                        <div className={"progress-bar " + getFirstType()} style={{ width: stat.value }}></div>
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
            <Footer />
        </>
    )
}

export default Pokemon