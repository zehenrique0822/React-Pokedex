import { PokemonType } from "../types/PokemonType";
import { Pokemon } from "./Pokemon";
import { Pagination } from "../components/Pagination";

type Props = {
  pokemons: PokemonType[];
  loading: boolean;
  page: number;
  totalPages: number;
  setPage: any;
};

export const Pokedex = ({ pokemons, loading, page, totalPages, setPage }: Props) => {
  const onLeftClickHandler = () => {
    if(page > 0) {
      setPage(page-1)
    }
  };
  const onRigthClickHandler = () => {
    if(page+1 !== totalPages) {
      setPage(page+1)
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRigthClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando, segura ai fera..</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
};
