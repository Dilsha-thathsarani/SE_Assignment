import express from "express";
const router = express.Router();
import {
  createUser,
  firstLogin,
  getAccessToken,
  resetPassword,
} from "../controllers/userCtrl.js";
import auth from "../middleware/auth.js";

router.post("/createUser", createUser);
router.post("/firstLogin", firstLogin);
router.post("/refresh_token", getAccessToken);
router.post("/reset", auth, resetPassword);

export default router;
