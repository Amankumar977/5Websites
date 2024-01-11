let Search = ({ updateSearchTerm }) => {
  return (
    <div className="text-center mt-4">
      <label htmlFor="pokedex"></label>
      <input
        type="text"
        name="pokedex"
        id="pokedex"
        onChange={(e) => updateSearchTerm(e.target.value)}
        className="px-24 py-4 rounded-md outline-none"
        placeholder="Enter Pokemon Name...."
      />
    </div>
  );
};
export default Search;
