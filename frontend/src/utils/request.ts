export const BASE_URL = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080";

export const coinFormat = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };
