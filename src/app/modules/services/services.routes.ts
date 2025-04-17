import { Router } from "express";
import { createServices, getAllPendingServices, getAllServices, getServicesByID, updateServicesByID } from "./services.controller";

const router = Router();

router.post('/', createServices);
router.get('/', getAllServices);
router.get('/status', getAllPendingServices);
router.get('/:serviceId', getServicesByID);
router.put('/:serviceId', updateServicesByID);

export const servicesRoutes = router;