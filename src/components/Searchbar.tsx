import React, { useState } from "react";
import { searchPokemon } from "../services/api";
import { PokemonType } from "../types/PokemonType";

export const Searchbar = () => {
    const [search, setSearch] = useState<string>('');
    const [pokemon, setPokemon] = useState<PokemonType>();
    const onChangeHandler = (e: { target: { value: string } }) => {
        setSearch(e.target.value)
    };  

    const onSearchHandler = async (pokemon: string) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    };

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}></input>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
            {pokemon &&   
            <div>
                <div>{pokemon.name}</div> 
                <div>{pokemon.weight}</div> 
                <img src={pokemon.sprites.front_default} alt="Imagem do {pokemon.name}"/> 
            </div>
            } 
    </div >
  );
};
