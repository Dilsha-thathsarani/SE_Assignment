import express from "express";
const router = express.Router();
import { createNote } from "../controllers/noteCtrl.js";

router.post("/createNote", createNote);
export default router;
