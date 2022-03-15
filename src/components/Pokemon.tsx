import { PokemonType } from "../types/PokemonType";
import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

type Props = {
  pokemon: PokemonType;
};

export const Pokemon = ({ pokemon }: Props) => {
  const { favorites, updatedFavoritesPokemons } = useContext(FavoriteContext);
  const onHeartClick = () => {
    updatedFavoritesPokemons(pokemon.name);
  };
  const heart = favorites.includes(pokemon.name) ? "❤️" : "🖤";
  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt="Imagem Pokemon" />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};
