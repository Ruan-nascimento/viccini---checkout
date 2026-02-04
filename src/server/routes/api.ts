import { Router } from 'express';
import { createCustomer, getCustomers } from './customer';
import { createBilling } from './billing';

const router = Router();

// POST /api/create-customer
router.post('/create-customer', createCustomer);

// GET /api/get-customers
router.get('/get-customers', getCustomers);

// POST /api/create-billing
router.post('/create-billing', createBilling);

export default router;
