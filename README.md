# Maricá ConecTOUR

Portal de turismo da cidade de Maricá (RJ): praias, trilhas, lagoas, cultura e guias turísticos locais.

- **Site:** React + Vite (`marica-conectour-site`)
- **API:** FastAPI + SQLite (`marica-conectour-backend`)

## Como rodar

Pré-requisitos: [Node.js](https://nodejs.org) e [Python](https://www.python.org) instalados.

Na pasta raiz do projeto:

```bash
# 1. Instalar as dependências (só na primeira vez)
pip install -r requirements.txt
npm run install-site

# 2. (Opcional) Preencher o banco com dados fictícios de exemplo
npm run seed

# 3. Iniciar a API (deixe este terminal aberto)
npm run backend

# 4. Em outro terminal, iniciar o site
npm run dev
```

Depois abra http://localhost:5173 no navegador. A documentação da API fica em http://localhost:8000/docs.

O banco de dados (`marica_conectour.db`) não fica no repositório, porque guarda dados pessoais. A API cria um banco vazio automaticamente na primeira vez que roda. O passo 2 adiciona usuários e avaliações fictícios para demonstração. Login de exemplo: `demo@conectour.com`, senha `demo123`.

## Funcionalidades

- Destinos com busca e filtros por região e tipo, e página de detalhe de cada um
- Mapa interativo com praias, trilhas, restaurantes, pontos turísticos e hospedagem
- Guias turísticos com filtros e perfil, com contato pelo WhatsApp
- Cadastro, login e favoritos
- Avaliações de viagem com foto
- Cadastro de guias ("Trabalhe conosco")

## Onde editar o conteúdo

- Destinos: `marica-conectour-site/src/data/destinos.js`
- Guias e WhatsApp: `marica-conectour-site/src/data/guias.js`
- Pontos do mapa: `marica-conectour-site/src/data/mapa.js`
- Cores do site: `marica-conectour-site/src/index.css`
