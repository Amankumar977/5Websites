import { Route, Routes, useParams } from "react-router-dom";
import { Pokedex, PokemonDetails } from "../Components/index";
useParams;
function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />
    </Routes>
  );
}
export default CustomRoutes;
