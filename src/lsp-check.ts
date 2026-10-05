import { IPaymentMethod } from './IPaymentMethod';
import { CreditCardPayment } from './CreditCardPayment';
import { CryptoPayment } from './CryptoPayment';

// LSP: любой наследник подставляется туда, где ожидается интерфейс
const methods: IPaymentMethod[] = [
  new CreditCardPayment(),
  new CryptoPayment(),
];

// Проверяем, что ВСЕ возвращают Promise<boolean> — контракт един
for (const m of methods) {
  const r: Promise<boolean> = m.pay(100);
  console.log(typeof r.then === 'function' ? 'OK: Promise' : 'FAIL');
}
