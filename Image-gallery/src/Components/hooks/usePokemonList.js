import { useEffect, useState } from "react";
import axios from "axios";
let usePokemonList = (url, type) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [pokemonList, setPokemonList] = useState([]);
  // const [pokedexURL, setPokedexURL] = useState(
  //   "https://pokeapi.co/api/v2/pokemon"
  // );
  // const [nextURL, setNextURL] = useState("");
  // const [prevURL, setPrevURL] = useState("");
  // const [isPrevDisable, setIsPrevDisable] = useState(true);
  // const [isNextDisable, setIsNextDisable] = useState(false);
  const [pokemonListState, setPokemonListState] = useState({
    isLoading: true,
    pokemonList: [],
    pokedexURL: url,
    nextURL: "",
    prevURL: "",
    isPrevDisable: true,
    isNextDisable: false,
  });
  async function downloadData() {
    // setIsLoading(true);
    setPokemonListState((state) => ({ ...state, isLoading: true }));
    try {
      const response = await axios.get(pokemonListState.pokedexURL);
      // setNextURL(response.data.next);
      // setPrevURL(response.data.previous);
      setPokemonListState((state) => ({
        ...state,
        nextURL: response.data.next,
        prevURL: response.data.previous,
      }));
      // Check if nextURL and prevURL are not present to disable the buttons
      // setIsNextDisable(response.data.next === null);
      // setIsPrevDisable(response.data.previous === null);
      setPokemonListState((state) => ({
        ...state,
        isNextDisable: response.data.next === null,
        isPrevDisable: response.data.previous === null,
      }));
      if (type) {
        setPokemonListState((state) => ({
          ...state,
          pokemonList: response.data.pokemon.slice(5, 10),
        }));
      } else {
        const pokemonResponse = response.data.results;
        const pokemonResultPromise = pokemonResponse.map((pokemon) =>
          axios.get(pokemon.url)
        );
        const pokemonData = await axios.all(pokemonResultPromise);

        const res = pokemonData.map((pokeData) => {
          const pokemon = pokeData.data;

          return {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            type: pokemon.types,
          };
        });
        // setPokemonList(res);
        // setIsLoading(false);
        setPokemonListState((state) => ({
          ...state,
          pokemonList: res,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    downloadData();
  }, [pokemonListState.pokedexURL]);
  return { pokemonListState, setPokemonListState };
};
export default usePokemonList;
