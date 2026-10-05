export interface IPaymentMethod {
  pay(amount: number): Promise<boolean>;
}
