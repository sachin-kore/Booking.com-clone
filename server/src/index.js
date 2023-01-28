import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './router/auth.js'
import usersRoute from './router/users.js'
import hotelRoute from './router/hotels.js'
import roomRoute from './router/room.js'
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MANGO_URL);
        console.log("connected to mangodb")
    } catch (err) {
        throw err;
    }
}

mongoose.connection.on("Disconnectes", () => {
    console.log("MongoDB disconnected");
})

// middleware
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/room", roomRoute);


app.use((err, req, res, next) => {
    const erroStatus = err.status || 500;
    const erroMessage = err.message || "Something went wrong";
    return res.status(erroStatus).json({
        success: false,
        status: erroStatus,
        message: erroMessage,
        stack: err.stack
    })
})

const port = 5000;
app.listen(port, () => {
    connect();
    console.log(`server started port number ${port}`);
})