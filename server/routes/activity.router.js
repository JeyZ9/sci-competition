import express from "express";
import activityController from "../controllers/activity.controller.js";

const router = express.Router();

router.post("/", activityController.create);

export default router;