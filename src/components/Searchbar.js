import React, { useState } from "react";
import {searchPokemon} from "../Api"

const Searchbar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="search"
          placeholder="Buscar Pokemon"
          onChange={onChangeHandler}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}> Buscar </button>
      </div>
      {pokemon ? (
        <div> 
          <div>
            <div> Nome: {pokemon.name}</div>
            <div> Peso: {pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt="pokemon.name" />
          </div>
        </div>
    
      ) : null}
    </div>
  );
};

export default Searchbar;
