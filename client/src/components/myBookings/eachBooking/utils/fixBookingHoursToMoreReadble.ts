import { BookedLaundrytimes } from "../../../../types/laundryTypes";

export const fixBookingHoursToMoreReadble = (
  info: BookedLaundrytimes
): string => {
  if (info?.bookedHours === 710) {
    return "07-10";
  } else {
    const stringHour = info.bookedHours.toString();
    const splitted = stringHour.split("");
    const spliced = splitted.splice(2, 0, "-");
    const joinedString = splitted.join("");
    return joinedString;
  }
};
