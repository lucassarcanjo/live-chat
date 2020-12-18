import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [response, setReponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url, options);
      const json = await res.json();

      setReponse(json);
    };

    fetchData().catch((err) => setError(err));
  }, [options, url]);

  return [response, error];
};

export default useFetch;
