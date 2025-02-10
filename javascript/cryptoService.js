import axios from 'axios';

/**
 * Obtiene el precio de una criptomoneda desde la API de CoinGecko.
 * @param {string} crypto - Nombre de la criptomoneda (ejemplo: 'bitcoin').
 * @param {string} currency - Moneda de conversión (por defecto 'usd').
 * @returns {Promise<string|number>} - Precio de la criptomoneda en la moneda seleccionada o un mensaje de error.
 */
export const getCryptoPrice = async (crypto, currency = 'usd') => {
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;

  try {
    const response = await axios.get(url);
    const data = response.data;
    const price = data[crypto]?.[currency] || 'No disponible';
    return price;
  } catch (error) {
    console.error('Error al obtener datos de la API:', error.message);
    return 'Error al obtener datos de la API';
  }
};

// Ejemplo de uso:
const main = async () => {
  const crypto = 'bitcoin'; // Puedes reemplazar con una entrada del usuario si quieres
  const currency = 'usd'; // También configurable
  const price = await getCryptoPrice(crypto, currency);
  console.log(`El precio de ${crypto} en ${currency.toUpperCase()} es: ${price}`);
};

main();
