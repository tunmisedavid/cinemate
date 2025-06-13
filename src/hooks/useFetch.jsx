import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm= "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=ba64bf26e4268d7a4118057e76a738ae&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};

export default useFetch;
