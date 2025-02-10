const axios = require("axios");

const getCryptoPrice = async (crypto, currency = "usd") => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${currency}`;
    const response = await axios.get(url);
    const price = response.data[crypto][currency];
    console.log(`El precio de ${crypto} en ${currency.toUpperCase()} es: ${price}`);
  } catch (error) {
    console.error("Error al obtener datos de la API:", error.message);
  }
};

// Ejecución
const crypto = process.argv[2] || "bitcoin";
const currency = process.argv[3] || "usd";
getCryptoPrice(crypto, currency);
