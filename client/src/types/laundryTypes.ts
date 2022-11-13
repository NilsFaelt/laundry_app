export interface LaundryTimes {
  availible: boolean;
  time: number;
  timeAsString: string;
  bookedBy: string;
  laundryRoom: string;
}

export interface BookedLaundrytimes {
  bookedHours: number;
  createdAt: string;
  dateForBooking: string;
  email: string;
  laundryRoom: string;
  name: string;
  updatedAt: string;
  _id: string;
}
