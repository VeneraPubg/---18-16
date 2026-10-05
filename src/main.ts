import { Checkout } from './Checkout';
import { CreditCardPayment } from './CreditCardPayment';
import { CryptoPayment } from './CryptoPayment';
import { PayPalPayment } from './PayPalPayment';

async function run() {
  const methods = [
    new CreditCardPayment(),
    new CryptoPayment(),
    new PayPalPayment(),
  ];

  for (const m of methods) {
    const checkout = new Checkout(m);
    const ok = await checkout.process(1000);
    console.log(`→ результат: ${ok}\n`);
  }
}

run();
