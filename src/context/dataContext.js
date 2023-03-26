import { useState } from "react";
import { createContext } from "react";
import useFetchPokemonList from "../hooks/useFetchPokemonList";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const { pokemonList, isLoading } = useFetchPokemonList(1500);
    const [currentPage, setCurrentPage] = useState(setInitialCurrentPage())

    function setInitialCurrentPage() {
        // Verificar si la variable "currentPage" existe en Local Storage
        if (localStorage.getItem('currentPage')) {
            // Si la variable existe, retornar su valor
            return localStorage.getItem('currentPage');
        } else {
            // Si la variable no existe, retornar 0
            return 0;
        }
    }

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
