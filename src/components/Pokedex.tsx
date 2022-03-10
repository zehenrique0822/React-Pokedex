import { PokemonType } from "../types/PokemonType";
import { Pokemon } from "./Pokemon";

type Props = {
  pokemons: PokemonType[];
  loading: boolean;
};

export const Pokedex = ({ pokemons, loading }: Props) => {
  console.log('pokemon:', pokemons)
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Página:</div>
      </div>
      {loading ? (
        <div>Carregando, segura ai fera..</div>
      ) : (
        <div className="pokedex-grid">
            {pokemons.map((pokemon, index) => {
                return (
                  <Pokemon key={index} pokemon={pokemon}/>
                );
            })}
        </div>
      )}
    </div>
  );
};
