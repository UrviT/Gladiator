import { Timestamp } from "rxjs";

export class TransactionHistories{
    Id !: number;
    UserId !: number;
    ProductId !:number;
    Tenure !: number;
    AmountPaid !: number;
    NextDate !: Date;
    TimeStamp !: Date;
}