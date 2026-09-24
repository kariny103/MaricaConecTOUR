# Maricá ConecTOUR

Portal de turismo da cidade de Maricá (RJ): praias, trilhas, lagoas, cultura e guias turísticos locais.

- **Site:** React + Vite (`Explomar-main/Explomar-main/Explomar-main`)
- **API:** FastAPI + SQLite (`explomar_backend/explomar_backend`)

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) e [Python](https://www.python.org) instalados.

Na pasta raiz do projeto:

```bash
# 1. Instalar as dependências (só na primeira vez)
pip install -r requirements.txt
npm run install-site

# 2. Iniciar a API (deixe este terminal aberto)
npm run backend

# 3. Em outro terminal, iniciar o site
npm run dev
```

Depois abra http://localhost:5173 no navegador. A documentação da API fica em http://localhost:8000/docs.

## Funcionalidades

- Destinos com busca e filtros por região e tipo, e página de detalhe de cada um
- Mapa interativo com praias, trilhas, restaurantes, pontos turísticos e hospedagem
- Guias turísticos com filtros e perfil, com contato pelo WhatsApp
- Cadastro, login e favoritos
- Avaliações de viagem com foto
- Cadastro de guias ("Trabalhe conosco")

## Onde editar o conteúdo

- Destinos: `Explomar-main/Explomar-main/Explomar-main/src/data/destinos.js`
- Guias e WhatsApp: `Explomar-main/Explomar-main/Explomar-main/src/data/guias.js`
- Pontos do mapa: `Explomar-main/Explomar-main/Explomar-main/src/data/mapa.js`
- Cores do site: `Explomar-main/Explomar-main/Explomar-main/src/index.css`
