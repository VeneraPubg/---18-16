import { IPaymentMethod } from './IPaymentMethod';

export class Checkout {
  constructor(private readonly payment: IPaymentMethod) {}

  async process(amount: number): Promise<boolean> {
    return this.payment.pay(amount);
  }
}
