import './Hero.css' // Importa el archivo de estilos CSS para el componente
import React, { useContext } from 'react'
import ContainerCards from './ContainerCards'
import ButtonsType from './ButtonsType'
import Loading from './Loading'
//hooks
import { useState } from 'react';

import { DataContext } from '../context/dataContext';

const Hero = () => {

  const { pokemonList, pokemons, isLoading, currentPage, setCurrentPage } = useContext(DataContext)

  function verificarVariableLocalStorage() {
    // Verificar si la variable "miVariable" existe en Local Storage
    if (localStorage.getItem('search')) {
      // Si la variable existe, retornar su valor
      return localStorage.getItem('search');
    } else {
      // Si la variable no existe, retornar una cadena vacía
      return '';
    }
  }

  const [search, setSearch] = useState(verificarVariableLocalStorage())

  const setSearchLocalStorage = ({ target }) => {
    setCurrentPage(0);
    window.localStorage.setItem("search", target.value.toLowerCase())
    setSearch(target.value.toLowerCase())
  }
  console.log(search)

  const filteredPokemons = () => {
    if (search.length === 0) {
      return pokemonList.slice(currentPage, Number(currentPage) + 10)
    }

    const filtered = pokemonList.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, Number(currentPage) + 10)
  }
  /*
    const searchPokemon = ({ target }) => {
      setCurrentPage(0);
      setSearch(target.value)
    }
  */
  return (
    <div className='hero'> {/* Contenedor principal */}
      <h1 className='hero-title'> {/* Título principal */}
        Pokedex
      </h1>
      <hr />
      <div className='d-flex'>
        <input
          type="text"
          className='form-control'
          placeholder=''
          value={search}
          onChange={setSearchLocalStorage}
        >
        </input>
        <h3 className='filter-titl ms-3'>
          <i class="bi-search"></i>
        </h3>
      </div>
      <hr />
      {isLoading && <Loading />}
      {pokemonList && <ContainerCards pokemons={filteredPokemons()} />}
    </div>
  )
}

export default Hero