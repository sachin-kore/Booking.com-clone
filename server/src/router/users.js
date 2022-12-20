import express from "express";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { getUsers, getUser, updateUser, deleteUser } from "../Controllers/user.js";



const router = express.Router();
// Get all users
router.get("/", verifyAdmin, getUsers);
router.get("/:id", verifyUser, getUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);


export default router;