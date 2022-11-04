import { useEffect, useState } from "react";
import { getAllUsers } from "../api/getAllUsers";

export const useGetAllUsers = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const fetch = async () => {
    setLoading(true);
    try {
      const users = await getAllUsers();

      setData(users);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return { data: data, loading: loading, error: error };
};
