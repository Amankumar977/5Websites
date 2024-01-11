import { usePokemonList, Loader, Pokemon } from "../index";

let PokemonList = () => {
  let { pokemonListState, setPokemonListState } = usePokemonList(
    "https://pokeapi.co/api/v2/pokemon"
  );

  return (
    <div>
      <div className="text-center text-xl flex justify-center items-center flex-wrap gap-5 mt-8">
        {pokemonListState.isLoading ? (
          <Loader />
        ) : (
          pokemonListState.pokemonList.map((p) => (
            <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
          ))
        )}
      </div>
      <div className="text-center mt-6 text-3xl">
        <button
          className={
            pokemonListState.isPrevDisable
              ? "border-[#949494] border m-4 px-5 py-1 text-gray-400 rounded-md"
              : "border-[#414040] border m-4 px-5 py-1 text-white hover:text-black rounded-md"
          }
          disabled={pokemonListState.isPrevDisable}
          // onClick={() => setPokedexURL(prevURL)}
          onClick={() =>
            setPokemonListState((state) => ({
              ...state,
              pokedexURL: pokemonListState.prevURL,
            }))
          }>
          Prev
        </button>
        <button
          className={
            pokemonListState.isNextDisable
              ? "border-[#949494] border m-4 px-5 py-1 text-gray-400 rounded-md"
              : " m-4 px-5 py-1 hover:text-white hover:border hover:border-[#414040] rounded-md"
          }
          disabled={pokemonListState.isNextDisable}
          // onClick={() => setPokedexURL(nextURL)}
          onClick={() =>
            setPokemonListState((state) => ({
              ...state,
              pokedexURL: pokemonListState.nextURL,
            }))
          }>
          Next
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
