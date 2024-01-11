import React from "react";
import { Loader, usePokemonDetails, usePokemonList } from "../index";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

let PokemonDetails = ({ pokemonName }) => {
  let { id } = useParams();
  let { pokemondet } = usePokemonDetails({ id, pokemonName });
  let { pokemonListState } = usePokemonList(
    `https://pokeapi.co/api/v2/type/${
      pokemondet.type ? pokemondet.type[0] : "fire"
    }`,
    true
  );

  return (
    <>
      {pokemondet.isLoading ? (
        <Loader />
      ) : (
        <div className="bg-blue-400 h-[100vh] w-[100vw] font-mono text-white">
          <div className="flex justify-center flex-col items-center">
            {pokemonName ? (
              ""
            ) : (
              <Link to="/" className="text-6xl text-center">
                PokeDex
              </Link>
            )}
            <h1 className="text-6xl py-8"> {pokemondet.pokemon.name}</h1>
            <img
              src={pokemondet.pokemon.image}
              className="w-72 h-72"
              alt="Pokemon Image"
            />
            <h1 className="mt-4 text-4xl">
              Height:{pokemondet.pokemon.height}
            </h1>
            <h1 className="mt-4 text-4xl">
              Weight:{pokemondet.pokemon.weight}
            </h1>
            <h1 className="mt-4 text-4xl">Type:{pokemondet.pokemon.type}</h1>
            {pokemondet.type && (
              <div className="text-center text-2xl mt-4 text-black">
                <h3 className="text-4xl">More {pokemondet.type[0]} type</h3>
                <ul className="flex justify-evenly p-4">
                  {pokemonListState.pokemonList &&
                  pokemonListState.pokemonList.length > 0
                    ? pokemonListState.pokemonList.map((p) => (
                        <li key={p.url} className="cursor-pointer">
                          {p.pokemon.name}
                        </li>
                      ))
                    : "No more pokemon of this type"}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetails;
