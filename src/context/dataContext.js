import { useEffect, useState } from "react";
import { createContext } from "react";
import { usePokemon } from '../hooks/usePokemons';
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";
import { fetchPokemonData } from "../helpers/fetchPokemonData";

//import { useDispatch } from "react-redux";
//import { addPokemones } from "../redux/pokemonsSlice";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [currentPage, setCurrentPage] = useState(
        window.localStorage.getItem('currentPage')
    )

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

    return (
        <DataContext.Provider value={{
            pokemons,
            isLoading,
            currentPage,
            setCurrentPage
        }}>
            {children}
        </DataContext.Provider>
    )
}
