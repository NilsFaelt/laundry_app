export function validateAdmin(value: string): boolean {
  let admin = false;
  if (value !== "true") {
    console.log("true mufker");
    admin = true;
  }
  if (value !== "false") {
    console.log("false mufker");
    admin = false;
  }

  return admin;
}
