import { useEffect, useState } from "react";
import { randomNameApiUrl } from "../../constants";

export const useRandomName = (defaultName?: string) => {
  const [name, setName] = useState("Smart Vanderli");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(randomNameApiUrl);
      const data = await res.text();

      setName(data);
    };

    if (defaultName) {
      setName(defaultName);
    } else {
      fetchData();
    }
  }, [defaultName]);

  return { name, setName };
};
