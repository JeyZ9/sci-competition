import express from "express";
import activityController from "../controllers/activity.controller.js";

const router = express.Router();

// ต้องเรียงถ้ารับ params ให้อยู่ข้างล่าง
router.post("/", activityController.create);
router.get("/", activityController.getAll);
router.get("/search", activityController.search);
router.get("/:id", activityController.getById);
router.put("/:id", activityController.update);
router.delete("/:id", activityController.delete);

export default router;