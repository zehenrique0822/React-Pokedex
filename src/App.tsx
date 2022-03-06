import React from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { Searchbar } from './components/Searchbar';
import { Pokedex } from './components/Pokedex';


function App() {
  
  return (
    <div>
      <Navbar/>
      <Searchbar/>
      <Pokedex/>
      </div>    
  );
}

export default App;
