import { json } from "react-router-dom";
interface DateObj {
  dayLetters: string;
  month: string;
  day: string;
  year: string;
  date: string;
}

export const shortenDateToString = (date: Date): DateObj => {
  if (date) {
    const stringifiedDate = date.toString();
    const splittedDate = stringifiedDate.split(" ");
    const dateObj = {
      dayLetters: splittedDate[0],
      month: splittedDate[1],
      day: splittedDate[2],
      year: splittedDate[3],
      date: `${splittedDate[3]}-${splittedDate[1]}-${splittedDate[2]}`,
    };

    return dateObj;
  }
  return {
    dayLetters: "unknown",
    month: "unknown",
    day: "unknown",
    year: "unknown",
    date: "unknown",
  };
};
