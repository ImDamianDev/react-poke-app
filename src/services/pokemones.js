const API_URL = "https://pokeapi.co/api/v2";

export const getAllPokemon = async () => {
    try {
        const response = await fetch(`${API_URL}/pokemon?limit=151&offset=0`);
        const data = await response.json();
        //console.log(data.results)
        return data.results;
    } catch (error) {
        console.error(error);
    }
};

export const getPokemonByName = async (name) => {
    try {
        const response = await fetch(`${API_URL}/pokemon/${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};