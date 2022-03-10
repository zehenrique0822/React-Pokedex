import axios from "axios"

export const searchPokemon = async (pokemon: string) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getPokemons = async (limit = 50, offset = 0) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}

export const getPokemonData = async (url: string) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log(error);
    }
}