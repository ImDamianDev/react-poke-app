import { useEffect, useState } from "react";
import { createContext } from "react";
import useFetchPokemonList from "../hooks/useFetchPokemonList";

import { usePokemon } from '../hooks/usePokemons';
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";
import { fetchPokemonData } from "../helpers/fetchPokemonData";

//import { useDispatch } from "react-redux";
//import { addPokemones } from "../redux/pokemonsSlice";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { pokemonList, isLoading } = useFetchPokemonList(1500);
    //const [isLoading, setIsLoading] = useState(true)
    //const [pokemons, setPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(setInitialCurrentPage())

    console.log(pokemonList)
    function setInitialCurrentPage() {
        // Verificar si la variable "miVariable" existe en Local Storage
        if (localStorage.getItem('currentPage')) {
            // Si la variable existe, retornar su valor
            return localStorage.getItem('currentPage');
        } else {
            // Si la variable no existe, retornar una cadena vacía
            return 0;
        }
    }

    function setInitialPokemons() {
        // Verificar si la variable "miVariable" existe en Local Storage
        if (localStorage.getItem('pokemons')) {
            // Si la variable existe, retornar su valor
            return localStorage.getItem('pokemons');
        } else {
            // Si la variable no existe, retornar una cadena vacía
            return [];
        }
    }

    /*
    useEffect(() => {
        
        fetchAllPokemons()
            .then((pokes) => {
                let pokeInfo = []
                pokes.forEach((poke) => {
                    let pokeId = poke.id
                    pokeInfo.push(fetchPokemonData(pokeId))
                })

                Promise.all(pokeInfo).then((data) => {
                    let infoP = []
                    data.forEach((d) => {
                        infoP.push(d)
                    })
                    setPokemons(infoP)
                    setIsLoading(false)
                })
            })
    }, [])
*/
    return (
        <DataContext.Provider value={{
            pokemonList,
            isLoading,
            currentPage,
            setCurrentPage
        }}>
            {children}
        </DataContext.Provider>
    )
}
