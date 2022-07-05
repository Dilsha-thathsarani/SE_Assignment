import express from "express";
const router = express.Router();
import { createUser } from "../controllers/userCtrl.js";

router.post("/createUser", createUser);

export default router;
