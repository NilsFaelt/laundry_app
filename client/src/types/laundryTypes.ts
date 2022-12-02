export interface LaundryTimes {
  availible: boolean;
  time: number;
  timeAsString: string;
  bookedBy: string;
  laundryRoom: string;
  _id?: string;
}

export interface BookedLaundrytimes {
  bookedHours: number;
  createdAt: string;
  dateAsMilisecs: number;
  dateForBooking: string;
  email: string;
  laundryRoom: string;
  __v: any;
  name: string;
  updatedAt: string;
  _id: string;
}

export interface BookingInfo {
  laundryRoom: string;
  dateForBooking: string;
  email: string;
  name: string;
  bookedHours: number;
  dateAsMilisecs?: number;
}
