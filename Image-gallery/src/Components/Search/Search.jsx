let Search = () => {
  return (
    <div className="text-center mt-4">
      <h2>
        <label htmlFor="pokedex"></label>
        <input
          type="text"
          name="pokedex"
          id="pokedex"
          className="px-24 py-4 rounded-md outline-none"
          placeholder="Enter Pokemon Name...."
        />
      </h2>
    </div>
  );
};
export default Search;
