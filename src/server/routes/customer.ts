// create customer function
import { Request, Response } from 'express';
import { CreateCustomerData } from "abacatepay-nodejs-sdk/dist/types";
import { getAbacate } from "../utils/abacate-pay";

export const createCustomer = async (req: Request, res: Response) => {
    try {
        const { name, email, cellphone, taxId } = req.body as CreateCustomerData;

        if (!name || !email || !cellphone || !taxId) {
            return res.status(400).json({ error: 'Dados inválidos, Preencha todos os dados' });
        }

        const abacate = getAbacate();
        const customer = await abacate.customer.create({
            name,
            email,
            cellphone,
            taxId,
        });

        return res.status(201).json(customer);

    } catch (error) {
        console.error('Erro ao criar cliente:', error);
        return res.status(500).json({ error: 'Erro ao criar cliente' });
    }
};

export const getCustomers = async (req: Request, res: Response) => {

    try {

        const abacate = getAbacate();
        const customers = await abacate.customer.list();

        if (!customers) {
            return res.status(400).json({ error: 'Erro ao buscar clientes' });
        }

        return res.status(200).json(customers);

    } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        return res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
};