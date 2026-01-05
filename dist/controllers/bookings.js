"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBooking = exports.fetchAllBookings = void 0;
const db_1 = __importDefault(require("../db/db"));
const fetchAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookingList = yield db_1.default.bookings.findMany();
        return res
            .status(200)
            .json({ status: true, response_code: 200, data: bookingList });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: false,
            response_code: 500,
            message: "Inernal Server Error",
        });
    }
});
exports.fetchAllBookings = fetchAllBookings;
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const newBooking = yield db_1.default.bookings.create({
            data: Object.assign(Object.assign({ email: payload.email, first_name: payload.first_name }, (payload.last_name && { last_name: payload.last_name })), { booking_start: payload.booking_start, booking_end: payload.booking_end }),
        });
        return res
            .status(201)
            .json({ status: true, response_code: 201, data: newBooking });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: false,
            response_code: 500,
            message: "Inernal Server Error",
        });
    }
});
exports.createBooking = createBooking;
