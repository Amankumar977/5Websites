import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;
export default function useFetch(query) {
  const [getData, setData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setData((prev) => ({ ...prev, isLoading: true }));
        const { data, status } = await axios.get(`/api/${query}`);
        if (status === 200) {
          console.log(getData);
          setData((prev) => ({
            ...prev,
            apiData: data,
            status: status,
            isLoading: false,
          }));
        }
        console.log(getData.apiData);
      } catch (error) {
        setData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };

    fetchData();
  }, [query]);
  useEffect(() => {
    console.log("After the state update");
    console.log(getData);
  }, [getData]);
  return [getData, setData];
}
