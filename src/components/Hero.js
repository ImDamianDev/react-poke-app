import './Hero.css' // Importa el archivo de estilos CSS para el componente
import React from 'react'
import ContainerCards from './ContainerCards'
import Loading from './Loading'
//hooks
import { useState, useEffect } from 'react';
//Api
import * as API from "../services/pokemones";
import {gsap} from 'gsap'

const Hero = () => {

  const [pokemones, setPokemones] = useState([]);
  const [types, setTypes] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState(pokemones)
  const [isLoading, setIsLoading] = useState(false)

  const filtrar = (tipo) => {
    if (tipo === "borrar") {
      setFilteredPokemon(pokemones)
    } else {
      let filterPoke = pokemones.filter(poke =>
        poke.types.some(p => p.type.name === tipo)
      )
      setFilteredPokemon(filterPoke)
    }
  }
  useEffect(() => {
    setIsLoading(true)
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
        setIsLoading(false)
      })
    })
  }, []);


  //console.log(filteredPokemon)

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

  useEffect(() => {
    const timeline = gsap.timeline();
    const buttonType = document.querySelectorAll('.button-type')

      timeline.fromTo(buttonType, {
        opacity: 0,
        x: 25,
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      })
  }, [types])

  return (
    <div className='hero'> {/* Contenedor principal */}
      <h1 className='hero-title'> {/* Título principal */}
        Pokedex
      </h1>
      <hr />
      <h3 className='filter-title'>
        Tipo
      </h3>
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
      <hr />
      {isLoading && <Loading />}
      {pokemones && <ContainerCards pokemones={filteredPokemon.length === 0 ? pokemones : filteredPokemon} isLoading={isLoading} />}
    </div>
  )
}

export default Hero