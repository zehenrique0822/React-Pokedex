import { useContext, useEffect } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

export const Navbar = () => {

  const { loadFavoritePokemons } = useContext(FavoriteContext);

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  const { favorites } = useContext(FavoriteContext);
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoImg} alt="Logo PokeApi" className="navbar-img"></img>
      </div>
      <div>{favorites.length} ❤️</div>
    </nav>
  );
};
