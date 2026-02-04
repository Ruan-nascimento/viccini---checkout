import { BillingKind, BillingMethods } from "abacatepay-nodejs-sdk/dist/types";

export interface BillinData {
    completionUrl: string;
    returnUrl: string;
    frequency: BillingKind;
    methods: BillingMethods[];
    products: {
        name: string;
        price: number;
        quantity: number;
        externalId: string;
        description: string;
    }[];
    customer: {
        name: string;
        cellphone: string;
        email: string;
        taxId: string;
    };
}