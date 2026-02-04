import { Request, Response } from 'express';
import { getAbacate } from '../utils/abacate-pay';
import { BillinData } from '../interfaces';

export const createBilling = async (req: Request, res: Response) => {

    try {
        const { completionUrl, returnUrl, frequency, methods, products, customer } = req.body as BillinData

        if (!completionUrl || !returnUrl || !products || !frequency || !methods || !customer) {
            return res.status(400).json({ error: 'Dados inválidos, Preencha todos os dados' });
        }


        const billingData = {
            completionUrl: completionUrl,
            returnUrl: returnUrl,
            frequency: frequency,
            methods: methods,

            products: products,

            customer: customer,
        };

        const abacate = getAbacate();
        const billing = await abacate.billing.create(billingData);

        if (!billing) {
            return res.status(500).json({ error: 'Erro ao criar cobrança' });
        }

        return res.status(201).json(billing.data);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao criar cobrança' });
    }

};

export const getBilling = async (req: Request, res: Response) => {
    try {
        const abacate = getAbacate();
        const billing = await abacate.billing.list();
        if (!billing) {
            return res.status(404).json({ error: 'Nenhuma Cobrança Encontrada!' });
        }
        return res.status(200).json(billing.data);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar cobrança' });
    }
};