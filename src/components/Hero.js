import './Hero.css' // Importa el archivo de estilos CSS para el componente
import React, { useContext } from 'react'
import ContainerCards from './ContainerCards'
import Loading from './Loading'
//hooks
import { useState } from 'react';

import { DataContext } from '../context/dataContext';

const Hero = () => {

  const {pokemons, isLoading, currentPage, setCurrentPage} = useContext(DataContext)

  const [search, setSearch] = useState(
    window.localStorage.getItem('search')
  )

  const setSearchLocalStorage = ({target}) =>{
    try{
      setCurrentPage(0);
      setSearch(target.value)
      window.localStorage.setItem("search", target.value)
    } catch(error) {
      console.log(error)
    }
  }

  const filteredPokemons = () => {
    if (search.length !== null) {
      return pokemons.slice(currentPage, Number(currentPage) + 10)
    }

    const filtered = pokemons.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, Number(currentPage) + 10)
  }

  const nextPage = () => {
    setCurrentPage(Number(currentPage) + 10)
      window.localStorage.setItem("currentPage", Number(currentPage) + 10)
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(Number(currentPage) - 10)
      window.localStorage.setItem("currentPage", Number(currentPage) - 10)
    }
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
      <h3 className='filter-title'>
        Tipo
      </h3>
      <hr />
      <h3 className='filter-title'>
        Busca tu pokemon
      </h3>
      <input
        type="text"
        className='mb-3 form-control'
        placeholder=''
        value={search}
        onChange={setSearchLocalStorage}
      >
      </input>
      <hr />
      <button
        className='btn btn-secondary ms-3'
        onClick={prevPage}
      >
        anterior
      </button>
      <button
        className='btn btn-secondary ms-3'
        onClick={nextPage}
      >
        siguiente
      </button>
      <hr />
      {isLoading && <Loading />}
      {pokemons && <ContainerCards pokemons={filteredPokemons()} isLoading={false} />}
    </div>
  )
}

export default Hero