import { ReactNode, createContext, useState } from "react";

type FavoriteContextProps = {
  children: ReactNode;
};

type ContextType = {
  favorites: string[];
  updatedFavoritesPokemons: (name: string) => void;
  loadFavoritePokemons: () => void;
};

const initialValue = {
  favorites: [],
  updatedFavoritesPokemons: () => {},
  loadFavoritePokemons: () => {}
};

const favoritesKey = "f";

export const FavoriteContext = createContext<ContextType>(initialValue);

export const FavoriteProvider = ({ children }: FavoriteContextProps) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const updatedFavoritesPokemons = (name: string) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };
 
  const loadFavoritePokemons = () => {
    const pokemons: any = window.localStorage.getItem(favoritesKey) || [];    
    const FavoritePokemonsLS = JSON.parse(pokemons);
    setFavorites(FavoritePokemonsLS);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        updatedFavoritesPokemons,
        loadFavoritePokemons
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
