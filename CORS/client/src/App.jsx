import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        if (!response) {
          throw new Error("Network request was not good");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>
        Hel {data.name} {data.topicStuding}
      </h1>
    </>
  );
}

export default App;
