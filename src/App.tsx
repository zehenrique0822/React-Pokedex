import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { getPokemons, getPokemonData, searchPokemon } from "./services/api";
import "./App.css";
import { PokemonsType } from "./types/PokemonsType";
import { PokemonType } from "./types/PokemonType";
import { FavoriteProvider } from "./contexts/FavoriteContext";

const App = () => {
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);
  const itensPerPage = 50;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon: PokemonsType) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const onSearchHandler = async (pokemon: string) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
  }

  return (
    <FavoriteProvider>
      <div>
        <Navbar />
        <Searchbar
          onSearch={onSearchHandler}
        />
        {notFound ? (
          <div className="not-found-text"> Pokemon não existe! </div>
        ) :
          <Pokedex
            loading={loading}
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />}
      </div>
    </FavoriteProvider>
  );
};

export default App;
