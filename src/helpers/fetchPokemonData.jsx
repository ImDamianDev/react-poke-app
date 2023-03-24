import { pokemonApi } from "../api/pokemonApi"

export const fetchPokemonData = async (pokeIdentifier) => {
    try {
        const resp = await pokemonApi.get(`/pokemon/${pokeIdentifier}`)
        //console.log(resp)
        //console.log(resp.data)
        const pokeData = resp.data
        //const basePokemonList = resp.data.results;
        return preparedPokemonData(pokeData)
    } catch (error) {
        console.log(error)
    }
}


export const preparedPokemonData = async (pokeData) => {
        const id = pokeData.id;
        const name = pokeData.name;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        const base_experience = pokeData.base_experience;
        const height = pokeData.height;
        const weight = pokeData.weight;
        const types = pokeData.types;

        return {
            id,
            name,
            img,
            base_experience,
            height,
            weight,
            types
        }
}