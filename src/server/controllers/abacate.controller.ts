import { NextFunction, Request, Response } from 'express';
import { BillingService } from "../services/billing.service";
import { CustomerService } from '../services/customer.service';
import { PixService } from '../services/pix.service';

export class AbacateController {
    static async createBilling(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await BillingService.create(req.body);
            return res.status(201).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }

    static async listBilling(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await BillingService.list();
            return res.status(200).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }

    static async createCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await CustomerService.create(req.body);
            return res.status(201).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }

    static async listCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await CustomerService.list();
            return res.status(200).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }

    static async createPix(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await PixService.create(req.body);
            return res.status(201).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }

    static async listPix(req: Request, res: Response, next: NextFunction) {
        try {
            const abacate = await PixService.check(req.params.id as string);
            return res.status(200).json({ success: true, data: abacate });
        } catch (error) {
            next(error);
        }
    }
}