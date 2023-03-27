import React, { useState, useContext } from 'react'
import { DataContext } from '../context/dataContext';
import './Hero.css'
import ContainerCards from './ContainerCards'
import Loading from './Loading'

const Hero = () => {

  const { pokemonList, isLoading, currentPage, setCurrentPage } = useContext(DataContext)
  const [search, setSearch] = useState(verificarVariableLocalStorage())

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

  /**
 * Actualiza la búsqueda en el local storage y establece el valor de búsqueda actual.
 * @param {Event} event - El evento que se disparó al cambiar el valor de búsqueda.
 */
  const setSearchLocalStorage = ({ target: { value } }) => {
    // Se convierte el valor de búsqueda a minúsculas.
    const targetValue = value.toLowerCase();

    // Se establece la página actual a 0 para mostrar los primeros resultados.
    setCurrentPage(0);

    // Se establece el valor de búsqueda actual.
    setSearch(targetValue);

    // Se actualiza el valor de búsqueda en el local storage.
    window.localStorage.setItem("search", targetValue);
  }

  const filteredPokemons = () => {
    if (search.length === 0) {
      return pokemonList.slice(currentPage, Number(currentPage) + 10)
    }

    const filtered = pokemonList.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, Number(currentPage) + 10)
  }
  
  return (
    <div className='hero'> {/* Contenedor principal */}

      <h1 className='hero-title text-danger'> {/* Título principal */}
        Pokedex
      </h1>

      <hr />

      <div className='d-flex align-items-center'>

        <input
          type="text"
          className='form-control'
          placeholder='Busca tu pokemon'
          value={search}
          onChange={setSearchLocalStorage}
        >
        </input>

        <i className="bi-search ms-3"></i>

      </div>

      <hr />

      {isLoading && <Loading />}

      {pokemonList && <ContainerCards pokemons={filteredPokemons()} />}
    </div>
  )
}

export default Hero