import express from "express";
const router = express.Router();
import authController from "../controllers/auth.controller.js";

// POST: http://localhost:5000/api/v1/register
router.post("/signup", authController.signUp);

// POST: http://localhost:5000/api/v1/login
// router.post("/login", authController.login);

export default router;