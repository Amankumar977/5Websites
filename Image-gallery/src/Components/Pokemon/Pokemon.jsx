import { Link } from "react-router-dom";
let Pokemon = ({ name, image, id }) => {
  return (
    <>
      <Link to={`pokemon/${id}`}>
        <div className=" flex justify-evenly items-center flex-col w-[250px] h-[250px] hover:bg-[#000] rounded-lg hover:text-white hover:cursor-pointer">
          <h3 className="text-center mb-4 tracking-[0.5rem] ">{name}</h3>
          <img
            src={image}
            alt="Pokemon Image"
            className="text-center h-[170px] max-h-[80%]"
          />
        </div>
      </Link>
    </>
  );
};
export default Pokemon;
