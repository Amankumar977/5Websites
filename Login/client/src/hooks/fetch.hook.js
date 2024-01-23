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

  if (!query) {
    return;
  }

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        if (isMounted) {
          setData((prev) => ({ ...prev, isLoading: true }));

          const { data, status } = await axios.get(`/api/${query}`);

          if (status === 200) {
            setData((prev) => ({
              ...prev,
              apiData: data, // Set apiData only when the status is 200
              status: status,
              isLoading: false,
            }));
          }
        }
        console.log(getData);
      } catch (error) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            isLoading: false,
            serverError: error,
          }));
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [query]);

  return [getData, setData];
}
