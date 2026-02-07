import { z } from 'zod';

const BillingKind = z.enum(['one-time', 'subscription']);
const BillingMethods = z.enum(['pix', 'credit-card']);

export const createBillingSchema = z.object({
    body: z.object({
        completionUrl: z.string().url(),
        returnUrl: z.string().url(),
        frequency: BillingKind,
        methods: z.array(BillingMethods),
        products: z.array(z.object({
            name: z.string(),
            price: z.number().positive(),
            quantity: z.number().int().positive(),
            externalId: z.string(),
            description: z.string().optional(),
        })).min(1, 'Pelo menos um produto é obrigatório'),
        customer: z.object({
            name: z.string(),
            cellphone: z.string(),
            email: z.string().email(),
            taxId: z.string(),
        }),
    }),
});
