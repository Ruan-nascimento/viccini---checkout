import AbacatePay from 'abacatepay-nodejs-sdk';
import { env } from './env';

let abacateInstance: any | null = null;

export const getAbacate = (): any => {
    if (!abacateInstance) {
        abacateInstance = AbacatePay(env.ABACATEPAY_API_KEY);
    }
    return abacateInstance;
};
