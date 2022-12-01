export const checkSoDateIsStillRelevant = (date: Date): boolean => {
  let returnValue = true;
  const choosendateInMiliSecs = new Date(date).getTime();
  const miliSecsNow = new Date().getTime();
  const calculatedMilisecs = miliSecsNow - 86200000;
  if (calculatedMilisecs > choosendateInMiliSecs) {
    returnValue = false;
  }
  return returnValue;
};
