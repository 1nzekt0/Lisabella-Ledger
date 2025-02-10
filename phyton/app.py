import requests

def get_crypto_price(crypto, currency="usd"):
    """
    Obtiene el precio de una criptomoneda desde la API de CoinGecko.
    Args:
        crypto (str): Nombre de la criptomoneda (ejemplo: 'bitcoin').
        currency (str): Moneda de conversión (por defecto 'usd').
    Returns:
        str: Precio de la criptomoneda en la moneda seleccionada.
    """
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={crypto}&vs_currencies={currency}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        price = data.get(crypto, {}).get(currency, "No disponible")
        return price
    else:
        return "Error al obtener datos de la API"

if __name__ == "__main__":
    crypto = input("Introduce la criptomoneda (ejemplo: bitcoin): ").strip().lower()
    currency = input("Introduce la moneda (ejemplo: usd): ").strip().lower()
    price = get_crypto_price(crypto, currency)
    print(f"El precio de {crypto} en {currency.upper()} es: {price}")
