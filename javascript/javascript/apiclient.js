import axios from 'axios';

// Crear una instancia de Axios
const apiClient = axios.create({
  baseURL: 'https://api.crypto.com/v1', // Reemplaza esto con la URL base de tu API
  timeout: 10000, // Tiempo de espera en ms
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptores (opcional, para manejar errores globales)
apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error('Error en la respuesta de la API:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
