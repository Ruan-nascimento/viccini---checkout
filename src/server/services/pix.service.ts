import { getAbacate } from '../config/abacate';

export class PixService {
    static async create(amount: number) {
        const abacate = getAbacate();
        const pixQrCodeData = {
            amount,
            expiresIn: 60 * 60 * 5,
            description: `Pagamento de Produto - R$ ${amount.toFixed(2)}`,
        };

        const pix = await abacate.pixQrCode.create(pixQrCodeData);
        if (!pix) {
            throw new Error('Erro ao criar QR Code PIX.');
        }
        return pix;
    }

    static async check(id: string) {
        const abacate = getAbacate();
        const pix = await abacate.pixQrCode.check({ id });
        if (!pix) {
            throw new Error('PIX não encontrado.');
        }
        return pix;
    }
}
