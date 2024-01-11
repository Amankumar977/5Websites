import { Search, PokemonList, Loader, PokemonDetails } from "../index";
import { Link } from "react-router-dom";
import { useState } from "react";

let Pokedex = () => {
  let [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="font-mono text-2xl bg-blue-400 w-full">
      <h1 className="pt-6 text-center text-6xl">
        <Link to="/"> Pokedex</Link>
      </h1>
      <Search updateSearchTerm={setSearchTerm} /> {/* Fix the prop name here */}
      {!searchTerm ? (
        <PokemonList />
      ) : (
        <PokemonDetails key={searchTerm} pokemonName={searchTerm} />
      )}
    </div>
  );
};

export default Pokedex;
