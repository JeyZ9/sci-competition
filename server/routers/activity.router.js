import express from "express";
import activityController from "../controllers/activity.controller.js";
import authJwt from "../middleware/authJwt.js";

const router = express.Router();

const { verifyToken, isTeacher, isAdmin } = authJwt;

// ต้องเรียงถ้ารับ params ให้อยู่ข้างล่าง และ query ให้อยู่ข้างบน
router.post("/", verifyToken, isAdmin, activityController.create);
router.get("/", verifyToken, activityController.getAll);
router.get("/search", verifyToken, activityController.search);
router.get("/:id", verifyToken, activityController.getById);
router.put("/:id", verifyToken, isAdmin, activityController.update);
router.delete("/:id", verifyToken, isAdmin, activityController.delete);

export default router;