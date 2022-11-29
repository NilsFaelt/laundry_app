import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBookedTimesByUser } from "../../../api/getTimesByUser";
import { addLaundryTime } from "../../../redux/bookedTimesSlice";
import { BookedLaundrytimes, LaundryTimes } from "../../../types/laundryTypes";

interface Data {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: any;
}

export const useGetTimeByUser = (
  email: string,
  rerenderBookings: boolean
): Data => {
  const [data, setData] = useState<BookedLaundrytimes[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getBookedTimesByUser(email);
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, [rerenderBookings]);

  return { data, loading, error };
};
