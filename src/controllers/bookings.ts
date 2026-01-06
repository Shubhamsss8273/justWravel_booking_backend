import { Request, Response } from "express";
import prisma from "../db/db";
import { BookingPayload } from "../type";

export const fetchAllBookings = async (req: Request, res: Response) => {
  try {
    const bookingList = await prisma.bookings.findMany();
    return res
      .status(200)
      .json({ status: true, response_code: 200, data: bookingList });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({
      status: false,
      response_code: 500,
      message: "Inernal Server Error",
    });
  }
};

export const createBooking = async (req: Request, res: Response) => {
  try {
    const payload: BookingPayload = req.body;
    const newBooking = await prisma.bookings.create({
      data: {
        email: payload.email,
        first_name: payload.first_name,
        ...(payload.last_name && { last_name: payload.last_name }),
        booking_start: payload.booking_start,
        booking_end: payload.booking_end,
        guest_count: payload.guest_count,
      },
    });
    return res
      .status(201)
      .json({ status: true, response_code: 201, data: newBooking });
  } catch (error: any) {
    console.log(error.message);
    return res.status(500).json({
      status: false,
      response_code: 500,
      message: "Inernal Server Error",
    });
  }
};
