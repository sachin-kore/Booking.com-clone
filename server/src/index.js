import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from './router/auth.js'
import usersRoute from './router/users.js'
import hotelRoute from './router/hotels.js'
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
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
app.use(cors());

// app.use(function (req, res, next) {
//     next();
// })

const port = 5000;
app.listen(port, () => {
    connect();
    console.log(`server started port number ${port}`);
})