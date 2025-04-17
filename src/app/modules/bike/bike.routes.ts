import { Router } from "express";
import { createBike, getAllBike, getBikeByID } from "./bike.controller";

const router = Router();

router.post('/', createBike);
router.get('/', getAllBike);
router.get('/:bikeId', getBikeByID);

export const bikeRoutes = router;