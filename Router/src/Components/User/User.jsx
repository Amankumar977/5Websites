import { useParams } from "react-router-dom";
let User = () => {
  const { userid } = useParams();
  return (
    <>
      <h1 className="text-center text-4xl m-5 ">
        {" "}
        The Paramter which is given is {userid}
      </h1>
    </>
  );
};
export default User;
