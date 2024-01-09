import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ImageDetail = () => {
  const [imageDetail, setImageDetail] = useState({});
  let { id } = useParams();
  async function downloadData() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    let imgResponse = response.data.photo;
    const res = {
      image: imgResponse.url,
      title: imgResponse.title,
      description: imgResponse.description,
    };
    setImageDetail(res);
  }
  useEffect(() => {
    downloadData();
  });
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      <h1 className="text-4xl mt-8 mb-2">Title: {imageDetail.title}</h1>
      <img src={imageDetail.image} alt="Image Detail" className="rounded-lg" />
      <h3 className="w-[35rem] mt-6">
        Description : {imageDetail.description}
      </h3>
    </div>
  );
};
export default ImageDetail;
