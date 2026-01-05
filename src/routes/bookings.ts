import { Router } from "express";
import { createBooking, fetchAllBookings } from "../controllers/bookings";
import { checkCreateBooking } from "../middleware/validation";
const bookingRouter = Router();

bookingRouter.get("/list", fetchAllBookings);
bookingRouter.post("/create", checkCreateBooking, createBooking);

export default bookingRouter;
