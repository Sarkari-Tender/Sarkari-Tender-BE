import express from "express";
import { getCorrigendum, getCorrigendumByTenderId } from "../controllers/corrigendum.controller"

const router = express.Router();

router.get("/" , getCorrigendum);
router.get("/:id" , getCorrigendumByTenderId);

export default router;
