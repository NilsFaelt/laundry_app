import { useEffect, useState } from "react";
import { getBookedTimesByUser } from "../../../api/getTimesByUser";
import { LaundryTimes } from "../../../types/laundryTypes";

export const useGetTimeByUser = (email: string) => {
  const [data, setData] = useState<LaundryTimes[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getBookedTimesByUser(email);
      console.log(data, " in hook");
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return { data, loading, error };
};
