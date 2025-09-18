import express from "express";
const router = express.Router();
import authController from "../controllers/auth.controller.js";

// POST: http://localhost:5000/api/v1/register
router.post("/signup", authController.signUp);

// POST: http://localhost:5000/api/v1/login
// router.post("/login", authController.login);

// GET: http://localhost:3000/api/v1/auth/verify/:token
router.get("/verify/:token", authController.verifyEmail);

export default router;