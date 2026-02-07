import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  PORT: z.string().default('3000'),
  CORS_ORIGINS: z.string().transform((val) => val.split(',').map((s) => s.trim())),
  ABACATEPAY_API_KEY: z.string().min(1, 'ABACATEPAY_API_KEY is required'),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error('❌ Invalid environment variables:', _env.error.format());
  process.exit(1);
}

export const env = _env.data;
