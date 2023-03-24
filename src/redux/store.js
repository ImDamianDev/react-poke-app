import { configureStore } from '@reduxjs/toolkit'
import pokesReducer from './pokemonsSlice'

export const store = configureStore({
    reducer: {
        pokes: pokesReducer,
    },
})