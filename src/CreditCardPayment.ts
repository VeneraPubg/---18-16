import { IPaymentMethod } from './IPaymentMethod';

export class CreditCardPayment implements IPaymentMethod {
  async pay(amount: number): Promise<boolean> {
    console.log(`Оплата картой: ${amount}`);
    return true;
  }
}
