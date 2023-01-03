import { useEffect, useState } from "react";
import { getBookedTimesByDate } from "../api/getBookedTimesByDate";
import { BookedLaundrytimes } from "../types/laundryTypes";

interface Error {
  message: string;
  status: number;
}
interface ReturnData {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: Error | null;
}

export const useGetbookTimesByDay = (dateString: string): ReturnData => {
  const [data, setData] = useState<BookedLaundrytimes[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getBookedTimesByDate(dateString);
      setData(data);
    } catch (err) {
      if (err) setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [dateString]);
  return { data: data, loading: loading, error: error };
};
