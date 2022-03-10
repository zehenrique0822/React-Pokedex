export type PokemonType = {
    id: number
    name: string
    weight: number
    sprites: {
        front_default: string
    }
    types: [
        type: {
            type: {
                name: string
                url: string
            }
        }
    ]
}