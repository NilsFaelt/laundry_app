import { LaundryTimes } from "./laundryTypes";

export interface ShowAvailibleTimesProps {
  bookedTime: LaundryTimes;
  handleBookTimeClick: (time: LaundryTimes) => void;
  date: Date;
}
