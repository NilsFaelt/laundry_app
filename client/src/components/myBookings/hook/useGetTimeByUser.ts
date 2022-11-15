import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBookedTimesByUser } from "../../../api/getTimesByUser";
import { addLaundryTime } from "../../../redux/bookedTimesSlice";
import { LaundryTimes } from "../../../types/laundryTypes";

export const useGetTimeByUser = (email: string, rerenderBookings: boolean) => {
  const [data, setData] = useState<LaundryTimes[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const fetch = async () => {
    setLoading(true);
    try {
      const data = await getBookedTimesByUser(email);
      console.log(data, "in hook");
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
