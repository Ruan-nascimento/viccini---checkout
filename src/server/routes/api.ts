import { Router } from 'express';
import { validateRequest } from '../middlewares/validateRequest';
import { createCustomerSchema } from '../schemas/customer.schema';
import { createBillingSchema } from '../schemas/billing.schema';
import { checkPixSchema, createPixSchema } from '../schemas/pix.schema';
import { AbacateController } from '../controllers/abacate.controller';

const router = Router();

// Clientes
router.post(
    '/create-customer',
    validateRequest(createCustomerSchema),
    AbacateController.createCustomer
);
router.get('/get-customers', AbacateController.listCustomer);

// Cobranças
router.post(
    '/create-billing',
    validateRequest(createBillingSchema),
    AbacateController.createBilling
);
router.get('/get-billing', AbacateController.listBilling);

// PIX
router.post(
    '/create-pix',
    validateRequest(createPixSchema),
    AbacateController.createPix
);
router.get(
    '/check-pix/:id',
    validateRequest(checkPixSchema),
    AbacateController.listPix
);

export default router;
