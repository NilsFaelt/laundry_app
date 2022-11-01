export interface UserType {
  name: string;
  lastName: string;
  password: string;
  email: string;
  brf: string;
  apartment: number | null;
  adress: string;
  city: string;
  postal: number | null;
  bookingNr: number | null;
  admin: boolean;
}
