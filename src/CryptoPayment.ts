import { IPaymentMethod } from './IPaymentMethod';

export class CryptoPayment implements IPaymentMethod {
  async pay(amount: number): Promise<boolean> {
    console.log(`Оплата криптой: ${amount}`);
    return true;
  }
}
