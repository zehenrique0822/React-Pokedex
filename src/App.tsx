import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import { Pokedex } from "./components/Pokedex";
import { getPokemons, getPokemonData } from "./services/api";
import "./App.css";
import { PokemonsType } from "./types/PokemonsType";
import { PokemonType } from "./types/PokemonType";

function App() {
  
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon: PokemonsType) => {
        return await getPokemonData(pokemon.url)
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    console.log('carergou');
    fetchPokemons();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex loading={loading} pokemons={pokemons} />
    </div>
  );
}

export default App;
