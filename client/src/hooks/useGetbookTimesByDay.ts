import { useEffect, useState } from "react";
import { getBookedTimesByDate } from "../api/getBookedTimesByDate";

export const useGetbookTimesByDay = (dateString: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(<any>null);
  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getBookedTimesByDate(dateString);
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [dateString]);
  return { data: data, loading: loading, error: error };
};
