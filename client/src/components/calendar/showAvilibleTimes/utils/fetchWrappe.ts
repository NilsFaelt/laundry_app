import { getBookedTimesByUser } from "../../../../api/getTimesByUser";
import { LaundryTimes } from "../../../../types/laundryTypes";
import { UserTypeWithNestedAdress } from "../../../../types/userType";

export const fetchWrapper = async (
  user: UserTypeWithNestedAdress | null,
  setusersBookedLimit: React.Dispatch<React.SetStateAction<LaundryTimes[]>>
) => {
  if (user!.email) {
    const bookedTimes = await getBookedTimesByUser(user!.email);
    if (bookedTimes) setusersBookedLimit(bookedTimes);
  }
};
