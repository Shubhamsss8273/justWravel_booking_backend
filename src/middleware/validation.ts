import { Request, Response, NextFunction } from "express";
import { BookingPayload } from "../type";

const validateEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

export const checkCreateBooking = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: BookingPayload = req.body;
  if (!payload.email || !validateEmail(payload.email)) {
    return res
      .status(400)
      .json({ status: false, response_code: 400, message: "Invalid Email" });
  }
  if (!payload.first_name || !(payload.first_name.length >= 3)) {
    return res.status(400).json({
      status: false,
      response_code: 400,
      message: "First Name should be of minimum 3 characters",
    });
  }
  if (!payload.booking_start) {
    return res.status(400).json({
      status: false,
      response_code: 400,
      message: "Booking start date can not be empty",
    });
  }
  if (!payload.booking_end) {
    return res.status(400).json({
      status: false,
      response_code: 400,
      message: "Booking end date can not be empty",
    });
  }
  next();
};
