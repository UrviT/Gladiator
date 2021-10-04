import { Timestamp } from "rxjs";

export class TransactionHistories{
    id !: number;
    userId !: number;
    productId !:number;
    tenure !: number;
    amountPaid !: number;
    nextDate !: string;
    timestamp !: string;
}