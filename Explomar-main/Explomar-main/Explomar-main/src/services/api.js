import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

const api = axios.create({
  baseURL: API_URL,
});

// Devolve a URL completa de um arquivo enviado (ex: /uploads/foto.jpg)
export const urlArquivo = (caminho) => (caminho ? `${API_URL}${caminho}` : null);

export const mensagemErro = (error, padrao) => {
  if (!error.response) {
    return "Não foi possível conectar ao servidor. Verifique se o backend está rodando.";
  }
  const detail = error.response.data?.detail;
  if (Array.isArray(detail)) {
    return "Preencha todos os campos obrigatórios corretamente.";
  }
  return detail || padrao;
};

export default api;
