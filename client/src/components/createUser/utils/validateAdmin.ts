export function validateAdmin(value: string): boolean {
  let admin = false;
  if (value === "true") {
    admin = true;
  }

  return admin;
}
