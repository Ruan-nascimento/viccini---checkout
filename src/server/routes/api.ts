import { Router } from 'express';
import { createCustomer, getCustomers } from './customer';
import { createBilling, getBilling } from './billing';
import { checkPix, createPix } from './pix';

const router = Router();

// POST /api/create-customer
router.post('/create-customer', createCustomer);

// GET /api/get-customers
router.get('/get-customers', getCustomers);

// POST /api/create-billing
router.post('/create-billing', createBilling);

// GET /api/get-billing
router.get('/get-billing', getBilling);

// POST /api/create-pix
router.post('/create-pix', createPix);

// GET /api/check-pix/:id
router.get('/check-pix/:id', checkPix);

export default router;
