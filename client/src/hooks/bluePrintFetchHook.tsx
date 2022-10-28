import axios, { AxiosPromise } from "axios";
import { useEffect, useState } from "react";
import { getData } from "../redux/bookedTimesSlice";

export function useFetchHook() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      console.log("in fetch ");
      const response = await axios<AxiosPromise>(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
    } catch (err) {
      console.log(`Something went wrong in fetch, ERR: ${err}`);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return { data: data, error: error, loading: loading };
}
