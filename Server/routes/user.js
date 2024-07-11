import express from "express";
import {
  forgotPassword,
  getUser,
  login,
  logout,
  resetPassword,
  signup,
  verifyUser,
} from "../controllers/controllers.js";

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

router.get("/verify-user", verifyUser, getUser);

router.get("/logout", logout);

export default router;
