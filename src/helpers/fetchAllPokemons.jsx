import { pokemonApi } from "../api/pokemonApi"

export const fetchAllPokemons = async () => {
    const resp = await pokemonApi.get('/pokemon?limit=1500')
    //console.log(resp)
    //console.log(resp.data.results)
    const basePokemonList = resp.data.results;
    return basePokemonData(basePokemonList)
}


export const basePokemonData = async(basePokemonList) =>{
    const pokemonArr = basePokemonList.map(poke=>{
        const pokeArr = poke.url.split('/');
        const id = pokeArr[6];
        const name = poke.name;
        const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return {
            id,
            name,
            img
        }
    })

    return pokemonArr;
}