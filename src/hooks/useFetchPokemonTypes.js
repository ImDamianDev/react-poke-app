import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPokemonTypes = () => {
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = "https://pokeapi.co/api/v2/type";

    const preparedTypesData = async (data) => {

        // Obtener los tipos del Pokemon
        const pokemonTypes = await data.results.map(type => type.name);

        return pokemonTypes
    };

    const fetchTypes = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${API_URL}`);
            const data = await response.data
            //console.log(data)
            const preparedData = await preparedTypesData(data)
            //console.log(preparedData)
            setIsLoading(false)
            setTypes(preparedData)
        } catch (error) {
            setIsLoading(false)
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return { types, setTypes };
};

export default useFetchPokemonTypes;