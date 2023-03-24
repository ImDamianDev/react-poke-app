import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemones: [],
    isLoading: "",
    page: 0
}

export const pokemonsSlice = createSlice({
    name: "pokes",
    initialState,
    reducers: {
        addPokemones: (state, action) => {
            const payload = action.payload
            state.pokemones = payload
            //console.log(state)
            //console.log(action.payload)
        },
        setPage: (state, action) => {
            const payload = action.payload
            state.page = payload
            //console.log(state)
            //console.log(action.payload)
        }
    }
})

export const { addPokemones, setPage } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;