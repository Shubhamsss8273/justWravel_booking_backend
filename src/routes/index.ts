import { Router } from "express";
import bookingRouter from "./bookings";
const router = Router();

router.use("/booking", bookingRouter);

export default router;
