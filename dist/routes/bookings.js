"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookings_1 = require("../controllers/bookings");
const validation_1 = require("../middleware/validation");
const bookingRouter = (0, express_1.Router)();
bookingRouter.get("/list", bookings_1.fetchAllBookings);
bookingRouter.post("/create", validation_1.checkCreateBooking, bookings_1.createBooking);
exports.default = bookingRouter;
