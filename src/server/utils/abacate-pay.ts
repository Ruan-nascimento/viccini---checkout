import AbacatePay from "abacatepay-nodejs-sdk";

let abacateInstance: ReturnType<typeof AbacatePay> | null = null;

export const getAbacate = () => {
    if (!abacateInstance) {
        const apiKey = process.env.ABACATEPAY_API_KEY;

        if (!apiKey) {
            throw new Error('ABACATEPAY_API_KEY não está configurada no .env');
        }

        abacateInstance = AbacatePay(apiKey);
    }

    return abacateInstance;
};