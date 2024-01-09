import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import axios from "axios";
import Loader from "../Loader/Loader";

let PokemonList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pokedexURL, setPokedexURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");
  const [isPrevDisable, setIsPrevDisable] = useState(true);
  const [isNextDisable, setIsNextDisable] = useState(false);

  async function downloadData() {
    setIsLoading(true);
    try {
      const response = await axios.get(pokedexURL);
      setNextURL(response.data.next);
      setPrevURL(response.data.previous);
      // Check if nextURL and prevURL are not present to disable the buttons
      setIsNextDisable(response.data.next === null);
      setIsPrevDisable(response.data.previous === null);

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
      setPokemonList(res);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    downloadData();
  }, [pokedexURL]);

  return (
    <div>
      <div className="text-center text-xl flex justify-center items-center flex-wrap gap-5 mt-8">
        {isLoading ? (
          <Loader />
        ) : (
          pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
          ))
        )}
      </div>
      <div className="text-center mt-6 text-3xl">
        <button
          className={
            isPrevDisable
              ? "border-[#949494] border m-4 px-5 py-1 text-gray-400 rounded-md"
              : "border-[#414040] border m-4 px-5 py-1 text-white hover:text-black rounded-md"
          }
          disabled={isPrevDisable}
          onClick={() => setPokedexURL(prevURL)}>
          Prev
        </button>
        <button
          className={
            isNextDisable
              ? "border-[#949494] border m-4 px-5 py-1 text-gray-400 rounded-md"
              : " m-4 px-5 py-1 hover:text-white hover:border hover:border-[#414040] rounded-md"
          }
          disabled={isNextDisable}
          onClick={() => setPokedexURL(nextURL)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
