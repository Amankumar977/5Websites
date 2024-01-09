import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../index";
import { Link } from "react-router-dom";
let PokemonDetails = () => {
  let { id } = useParams();
  let [pokemon, setPokemon] = useState({});
  let [isLoading, setIsLoading] = useState(false);
  async function downloadData() {
    setIsLoading(true);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemonDeatil = response.data;
    setPokemon({
      name: pokemonDeatil.name,
      image: pokemonDeatil.sprites.other.dream_world.front_default,
      weight: pokemonDeatil.weight,
      type: pokemonDeatil.types.map((p) => p.type.name),
    });
    setIsLoading(false);
  }
  useEffect(() => {
    downloadData();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-blue-300 h-[100vh] w-[100vw] font-mono text-white">
          <div className="flex justify-center flex-col items-center">
            <Link to="/" className="text-6xl text-center">
              PokeDex
            </Link>
            <h1 className="text-6xl py-8">Name: {pokemon.name}</h1>
            <img
              src={pokemon.image}
              className="w-72 h-72"
              alt="Pokemon Image"
            />
            <h1 className="mt-4 text-5xl">Weight: {pokemon.weight}</h1>
            <h1 className="mt-4 text-5xl">Type: {pokemon.type}</h1>
          </div>
        </div>
      )}
    </>
  );
};
export default PokemonDetails;
