import { useEffect } from "react";
import { deleteBookTimeById } from "../../../api/deleteBookTimeById";
import { BookedLaundrytimes } from "../../../types/laundryTypes";

interface Data {
  data: BookedLaundrytimes[] | null;
  loading: boolean;
  error: any;
}

export const deleteOutdatedBooking = (bookedTimes: Data | null) => {
  useEffect(() => {
    const oldDate = new Date().getTime() - 86400000;
    if (bookedTimes) {
      const filteredToDelete = bookedTimes.data?.find(
        (time) => time.dateAsMilisecs < oldDate
      );
      if (filteredToDelete) {
        deleteBookTimeById(filteredToDelete._id);
      }
    }
  }, [bookedTimes]);
};
