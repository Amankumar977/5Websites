import axios from "axios";
import { useEffect, useState } from "react";
import { usePokemonList } from "../index";
let usePokemonDetails = ({ id, pokemonName }) => {
  // let [pokemon, setPokemon] = useState({});
  // let [isLoading, setIsLoading] = useState(false);
  const [pokemondet, setPokemondet] = useState({
    pokemon: {},
    isLoading: false,
  });
  async function downloadData() {
    // setIsLoading(true);
    setPokemondet((state) => ({ ...state, isLoading: true }));
    let response;
    if (pokemonName) {
      response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
    } else {
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
    let pokemonDeatil = response.data;
    setPokemondet(() => ({
      isLoading: false,
      pokemon: {
        name: pokemonDeatil.name,
        image: pokemonDeatil.sprites.other.dream_world.front_default,
        weight: pokemonDeatil.weight,
        type: pokemonDeatil.types.map((p) => p.type.name),
        height: pokemonDeatil.height,
      },
    }));
    // setPokemon({
    //   name: pokemonDeatil.name,
    //   image: pokemonDeatil.sprites.other.dream_world.front_default,
    //   weight: pokemonDeatil.weight,
    //   type: pokemonDeatil.types.map((p) => p.type.name),
    //   height: pokemonDeatil.height,
    // });
    // setIsLoading(false);
  }
  useEffect(() => {
    downloadData();
  }, []);
  return { pokemondet, setPokemondet };
};
export default usePokemonDetails;
