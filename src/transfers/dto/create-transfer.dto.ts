export class CreateTransferDto {
  name: string;
  date: string;
  amount: number;
  detail?: string;
  from_account_id: number;
  to_account_id: number;
}
