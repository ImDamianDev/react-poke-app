import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPokemon = (pokemonId) => {
  console.log(pokemonId)
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "https://pokeapi.co/api/v2/pokemon";

  const preparedPokemonData = async (data) => {

    // Obtener los tipos del Pokemon
    const pokemonTypes = data.types.map(type => type.type.name);

    // Obtener los stats del Pokemon
    const pokemonStats = data.stats.map(stat => ({
      name: stat.stat.name,
      value: stat.base_stat
    }));

    return {
      id: data.id,
      name: data.name,
      sprite: data.sprites.other.dream_world.front_default,
      base_experience: data.base_experience,
      height: data.height,
      weight: data.weight,
      types: pokemonTypes,
      stats: pokemonStats
    };
  };

  const fetchPokemon = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/${pokemonId}`);
      const data = response.data
      console.log(data)
      const preparedData = await preparedPokemonData(data)
      setIsLoading(false)
      return setPokemon(preparedData)
    } catch (error) {
      setIsLoading(false)
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon, isLoading };
};

export default useFetchPokemon;