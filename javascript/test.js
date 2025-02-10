import { getCryptoPrice } from './cryptoService.js';

const testCryptoPrice = async () => {
  const crypto = 'bitcoin';
  const currency = 'usd';
  const price = await getCryptoPrice(crypto, currency);
  console.log(`El precio de ${crypto} en ${currency.toUpperCase()} es: ${price}`);
};

testCryptoPrice();
