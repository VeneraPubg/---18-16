import { IPaymentMethod } from './IPaymentMethod';

export class PayPalPayment implements IPaymentMethod {
  async pay(amount: number): Promise<boolean> {
    console.log(`Оплата через PayPal: ${amount}`);
    return true;
  }
}
