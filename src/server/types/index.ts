// Tipos de resposta da API
export interface ApiResponse<T = any> {
    success: boolean;
    message?: string;
    data?: T;
    error?: string;
}

// Tipo de usuário (exemplo)
export interface Usuario {
    id: number;
    nome: string;
    email: string;
}

// Tipo de dados do formulário
export interface FormData {
    nome: string;
    email: string;
}
