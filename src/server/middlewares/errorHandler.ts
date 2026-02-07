import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const errorHandler = (
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof z.ZodError) {
        return res.status(400).json({
            success: false,
            error: 'Erro de validação nos dados enviados.',
            details: err.flatten().fieldErrors,
        });
    }

    // Erros específicos de negócio ou do SDK poderiam ser tratados aqui

    return res.status(500).json({
        success: false,
        error: err.message || 'Ocorreu um erro interno no servidor.',
    });
};
