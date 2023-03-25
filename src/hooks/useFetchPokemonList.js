import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPokemonList = (limit) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  const LOCAL_STORAGE_KEY = "pokemonList";

  const getPokemonData = async (pokemon) => {
    const result = await axios.get(pokemon.url);
    return {
      id: result.data.id,
      name: result.data.name,
      sprite: result.data.sprites.other.dream_world.front_default,
      types: result.data.types
    };
  };

  const fetchPokemonList = async () => {
    setIsLoading(true);
    try {
      const pokemonListFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (pokemonListFromLocalStorage) {
        setPokemonList(JSON.parse(pokemonListFromLocalStorage));
        setIsLoading(false);
      } else {
        const response = await axios.get(`${API_URL}?limit=${limit}`);
        const pokemonData = await Promise.all(response.data.results.map(getPokemonData));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pokemonData));
        setPokemonList(pokemonData);
        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return { pokemonList, isLoading };
};

export default useFetchPokemonList;
