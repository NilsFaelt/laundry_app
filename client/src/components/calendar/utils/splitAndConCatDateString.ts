export const splitAndConCatDateString = (date: Date): string => {
  const stringifiedDate = date.toString();
  const splittedDate = stringifiedDate.split(" ");
  const slicedDate = splittedDate.slice(1, 4);
  const joinedArrayTostring = slicedDate.join("");
  return joinedArrayTostring;
};
