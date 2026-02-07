import 'express-async-errors';
import express, { Express } from 'express';
import cors, { CorsOptions } from 'cors';
import { env } from './config/env';
import apiRoutes from './routes/api';
import { errorHandler } from './middlewares/errorHandler';
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Express = express();
const PORT = env.PORT;

app.all("/api/auth/*", toNodeHandler(auth));

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin || env.CORS_ORIGINS.includes(origin)) {
            return callback(null, true);
        }
        return callback(new Error(`CORS bloqueado para a origem ${origin}`));
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ["content-type", "Authorization"]
}

// Middlewares
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas da API
app.use('/api', apiRoutes);

// Tratamento de Erros Global (Deve ser o último middleware)
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`🔌 API disponível em http://localhost:${PORT}/api`);
});

export default app;
