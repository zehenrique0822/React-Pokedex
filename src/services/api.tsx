import axios from "axios"

export const searchPokemon = async (pokemon: string) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        return response.data
    } catch (error) {
        console.log(error);
    }
}