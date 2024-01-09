import { Search, PokemonList } from "../index";

let Pokedex = () => {
  return (
    <div className="font-mono text-2xl bg-blue-400 w-full">
      <h1 className="pt-6 text-center text-6xl">Pokedex</h1>
      <Search />
      <PokemonList />
    </div>
  );
};
export default Pokedex;
