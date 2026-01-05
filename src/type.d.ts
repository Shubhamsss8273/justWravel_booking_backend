export interface BookingPayload {
  email: string;
  first_name: string;
  last_name?: string;
  booking_start: Date;
  booking_end: Date;
}
