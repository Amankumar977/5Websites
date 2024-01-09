import { Link } from "react-router-dom";

let Images = ({ animalImage, id }) => {
  return (
    <Link to={`/photos/${id}`}>
      <div className="w-96 rounded-md">
        <img src={animalImage} alt="Images" className="rounded-md" />
      </div>
    </Link>
  );
};
export default Images;
