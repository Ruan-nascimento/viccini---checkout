import { z } from 'zod';

export const createPixSchema = z.object({
    body: z.object({
        amount: z.union([z.number(), z.string().regex(/^\d+(\.\d{1,2})?$/)]).transform(Number),
    }),
});

export const checkPixSchema = z.object({
    params: z.object({
        id: z.string().min(1, 'ID do PIX é obrigatório'),
    }),
});
