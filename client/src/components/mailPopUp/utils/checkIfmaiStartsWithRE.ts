export const checkIfmaiStartsWithRE = (mailName: string) => {
  const splitted = mailName.split("");
  const slicedArray = splitted.slice(0, 3);
  const joinedArray = slicedArray.join("");

  if (joinedArray === "RE:") return true;
  else return false;
};
