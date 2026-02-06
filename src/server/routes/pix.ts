import { Request, Response } from "express";
import { getAbacate } from "../utils/abacate-pay";

export const createPix = async (req: Request, res: Response) => {
    try {
        const { amount } = req.body;

        const amountNumber = Number(amount);

        if (!amountNumber) {
            return res.status(400).json({ error: 'Dados inválidos, Preencha todos os dados' });
        }

        const abacate = getAbacate();

        const pixQrCodeData = {
            amount: amountNumber,
            expiresIn: 60 * 60 * 5,
            description: `Pagamento de Produto - ${amountNumber}`,
        }

        const pix = await abacate.pixQrCode.create(pixQrCodeData);

        if (!pix) {
            return res.status(500).json({ error: 'Erro ao criar pix' });
        }

        return res.status(201).json(pix);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao criar pix' });
    }
}

export const checkPix = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const abacate = getAbacate();

        const pix = await abacate.pixQrCode.check({ id: id as string });

        if (!pix) {
            return res.status(404).json({ error: 'Nenhum Pix Encontrado!' });
        }
        return res.status(200).json(pix);
    }
    catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar pix' });
    }
}