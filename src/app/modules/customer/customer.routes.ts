import { Router } from "express";
import { createCustomer, deleteCustomer, getAllCustomer, getCustomerByID, updateCustomerByID } from "./customer.controller";

const router = Router();

router.post('/', createCustomer);
router.get('/', getAllCustomer);
router.get('/:customerId', getCustomerByID);
router.put('/:customerId', updateCustomerByID);
router.delete('/:customerId', deleteCustomer);

export const customerRoutes = router;