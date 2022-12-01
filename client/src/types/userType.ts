interface Adress {
  adress: string;
  city: string;
  postal: number | null;
}

export interface UserType {
  id?: string;
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
  admin?: boolean;
}

export interface UserTypeWithNestedAdress {
  name: string;
  lastName: string;
  password: string;
  email: string;
  brf: string;
  apartment: number | null;
  nrOfActiveBookings?: number;
  adress: Adress;
  bookingNr: number | null;
  admin?: boolean;
  _id?: string;
}

export interface GetAllUsers {
  data: UserTypeWithNestedAdress[] | null;
  loading: boolean;
  error: any;
}
