import React from "react";

export const Navbar = () => {
  const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
  return (
    <nav>
        <div>
            <img src={logoImg} alt="Logo PokeApi"
            className="navbar-img"></img>  
        </div>
    </nav>
  );
};
