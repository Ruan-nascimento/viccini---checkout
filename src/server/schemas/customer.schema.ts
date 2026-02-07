import { z } from 'zod';

export const createCustomerSchema = z.object({
    body: z.object({
        name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
        email: z.string().email('E-mail inválido'),
        cellphone: z.string().min(10, 'Celular inválido'),
        taxId: z.string().min(11, 'CPF/CNPJ inválido'),
    }),
});
