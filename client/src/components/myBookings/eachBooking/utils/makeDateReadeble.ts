export function makeDateReadeable(date: string): string {
  const splittedDate = date.split("");
  splittedDate.splice(3, 0, "-");
  splittedDate.splice(6, 0, "-");
  const concatDate = splittedDate.join("");
  return concatDate;
}
