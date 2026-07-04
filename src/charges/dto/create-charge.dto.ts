export class CreateChargeDto {
  name: string;
  date: string;
  amount: number;
  detail?: string;
  charge_type_id: number;
  account_id: number;
}
