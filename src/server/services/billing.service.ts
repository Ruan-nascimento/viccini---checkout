import { CreateBillingData } from 'abacatepay-nodejs-sdk/dist/types';
import { getAbacate } from '../config/abacate';

export class BillingService {
    static async create(data: CreateBillingData) {
        const abacate = getAbacate();
        const billing = await abacate.billing.create(data);
        if (!billing) {
            throw new Error('Erro ao criar cobrança no AbacatePay.');
        }
        return billing.data;
    }

    static async list() {
        const abacate = getAbacate();
        const billing = await abacate.billing.list();
        if (!billing) {
            throw new Error('Nenhuma cobrança encontrada.');
        }
        return billing.data;
    }
}
