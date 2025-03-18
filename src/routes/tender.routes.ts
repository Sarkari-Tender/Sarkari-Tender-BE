import express from "express";
import { getTenders, getTendersByJobId } from "../controllers/tender.controller";


const router = express.Router();

router.get("/", getTenders);
router.get("/:id", getTendersByJobId);


export default router;
