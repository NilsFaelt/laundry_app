interface User {
  name?: string;
  lastName?: string;
  email?: string;
  brf?: string;
  apartment?: number | null;
  adress?: any;
  city?: any;
  postal?: any;
  bookingNr?: number | null;
  admin?: boolean;
  id?: string;
}

export const changeUserStructubforebeforeSend = async (user: User) => {
  const newUserStructure = {
    id: user.id,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    brf: user.brf,
    apartment: user.apartment,
    adress: {
      adress: user.adress,
      city: user.city,
      postal: user.postal,
    },
    bookingNr: user.bookingNr,
    admin: user?.admin,
  };
  return newUserStructure;
};
