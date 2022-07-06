import express from "express";
const router = express.Router();
import { createNote, getNoteByID } from "../controllers/noteCtrl.js";

router.post("/createNote", createNote);
router.get("/getNote/:id", getNoteByID);
export default router;
