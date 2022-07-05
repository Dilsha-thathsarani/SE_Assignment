import express from "express";
const router = express.Router();
import {
  createUser,
  firstLogin,
  getAccessToken,
} from "../controllers/userCtrl.js";

router.post("/createUser", createUser);
router.post("/firstLogin", firstLogin);
router.post("/refresh_token", getAccessToken);

export default router;
