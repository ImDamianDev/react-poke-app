import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../helpers/fetchAllPokemons";
import { fetchPokemonData } from "../helpers/fetchPokemonData";


export const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    
    
    useEffect(() => {

        fetchAllPokemons()
            .then((pokes) => {
                let pokeInfo = []
                //console.log(pokes)
                pokes.forEach((poke) => {
                    let pokeId = poke.id
                    //console.log(pokeId)
                    pokeInfo.push(fetchPokemonData(pokeId))
                })

                Promise.all(pokeInfo).then((data) => {
                    let infoP = []
                    data.forEach((d) => {
                        infoP.push(d)
                        //console.log(d)
                    })
                    setPokemons(infoP)
                    setIsLoading(false)
                })
            })
    }, [])

    return {pokemons, isLoading}
}