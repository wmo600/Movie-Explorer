import express from "express";
const router = express.Router();
import authRoutes from "./authRoutes.js";

router.use("/auth", authRoutes);
router.use("/movies", movieRoutes);
router.use("/users", userRoutes);
router.use("/reviews", reviewRoutes);
router.use("/activities", activityRoutes);

export default router;
