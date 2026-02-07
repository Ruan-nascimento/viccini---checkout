import { CreateCustomerData } from 'abacatepay-nodejs-sdk/dist/types';
import { getAbacate } from '../config/abacate';

export class CustomerService {
    static async create(data: CreateCustomerData) {
        if (!data) {
            throw new Error('Dados do cliente inválidos.');
        }
        const abacate = getAbacate();
        return await abacate.customer.create(data);
    }

    static async list() {
        const abacate = getAbacate();
        const response = await abacate.customer.list();
        if (!response) {
            throw new Error('Nenhum cliente encontrado.');
        }
        return response;
    }
}
