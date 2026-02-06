import express, { Express, Request, Response } from 'express';
import cors, { CorsOptions } from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT;

const allowedOrigins = (process.env.CORS_ORIGINS as string).split(",").map(origin => origin.trim()).filter(Boolean);

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true)

        if (allowedOrigins.includes(origin)) return callback(null, true)

        return callback(new Error(`CORS bloqueado para a origem ${origin}`))
    },
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ["content-type", "Authorization"]
}

// Middlewares
app.use(cors(corsOptions));
app.options("*", cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));





// Rotas da API
app.use('/api', apiRoutes);




// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📁 Frontend disponível em http://localhost:${PORT}`);
    console.log(`🔌 API disponível em http://localhost:${PORT}/api`);
});

export default app;
