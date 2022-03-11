import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./services/api";
import "./App.css";
import { PokemonsType } from "./types/PokemonsType";
import { PokemonType } from "./types/PokemonType";

function App() {
  const [page, setPage] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);
  const itensPerPage = 50;

  const fetchPokemons = async () => {
    try {
      setLoading(true);
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
    console.log("carergou");
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        loading={loading}
        pokemons={pokemons}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default App;
