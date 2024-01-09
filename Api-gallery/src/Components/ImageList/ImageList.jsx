import { useEffect, useState } from "react";
import { Images } from "../index";
import axios from "axios";

let ImageList = () => {
  let [image, setImage] = useState([]);
  let [urlOffset, setUrlOffset] = useState(0);
  let [urlLimit, setUrlLimit] = useState(21);
  let [imageURL, setImageURL] = useState(
    `https://api.slingacademy.com/v1/sample-data/photos?offset=${urlOffset}&limit=${urlLimit}`
  );
  let [prevDisable, setPrevDisable] = useState(true);
  let [nextDisable, setNextDisable] = useState(false);

  // Corrected loadprevImage function
  let loadprevImage = () => {
    setUrlOffset((prevCount) => Math.max(prevCount - 21, 0));
  };

  // Corrected loadnextImage function
  let loadnextImage = () => {
    setUrlOffset((prevCount) => prevCount + 21);
  };

  useEffect(() => {
    async function downloadData() {
      const response = await axios.get(imageURL);
      let imageGallery = response.data.photos;

      const res = imageGallery.map((images) => {
        return {
          image: images.url,

          id: images.id,
        };
      });
      setImage(res);
      setPrevDisable(urlOffset === 0);
      setNextDisable(urlOffset + 21 >= 132);
    }

    downloadData();
  }, [imageURL]);

  useEffect(() => {
    // Updated the URL construction in the useEffect hook
    setImageURL(
      `https://api.slingacademy.com/v1/sample-data/photos?offset=${urlOffset}&limit=${urlLimit}`
    );
  }, [urlOffset, urlLimit]);

  return (
    <div>
      <div className="flex justify-center gap-14 items-center  flex-wrap">
        {image.map((p) => (
          <Images animalImage={p.image} id={p.id} key={p.id} />
        ))}
      </div>
      <div className="text-center mt-4 text-3xl">
        <button
          onClick={loadprevImage}
          className={
            prevDisable
              ? "m-4 text-gray-400 border border-gray-400 px-4 py-1 rounded-md"
              : "m-4 px-4 py-1 rounded-md border border-black"
          }
          disabled={prevDisable}>
          Prev
        </button>
        <button
          onClick={loadnextImage}
          className={
            nextDisable
              ? "m-4 text-gray-400 border border-gray-400 px-4 py-1 rounded-md"
              : "m-4 px-4 py-1 rounded-md border border-black"
          }
          disabled={nextDisable}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageList;
