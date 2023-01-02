import { getBookedTimesByUser } from "../../../../api/getTimesByUser";
import {
  BookedLaundrytimes,
  LaundryTimes,
} from "../../../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../../../types/userType";

export const fetchWrapper = async (
  user: UserTypeWithNestedAdress | null,
  setusersBookedLimit: React.Dispatch<
    React.SetStateAction<BookedLaundrytimes[]>
  >
) => {
  if (user!.email) {
    const bookedTimes = await getBookedTimesByUser(user!.email);
    if (bookedTimes) setusersBookedLimit(bookedTimes);
  }
};
