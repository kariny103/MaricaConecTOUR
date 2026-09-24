# Maricá ConecTOUR

Site de turismo da cidade de Maricá (RJ), feito em React + Vite.

## Executar

1. Inicie o backend (veja `explomar_backend\explomar_backend\README.md`).
2. Nesta pasta, rode:

```
npm install
npm run dev
```

3. Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Páginas

- `/` página inicial
- `/home` explorar destinos, favoritos e busca
- `/destinos` lista de destinos com filtros; `/destinos/:slug` detalhe de cada um
- `/guias` guias turísticos com filtros; `/guias/:id` perfil do guia
- `/feedback` avaliar a viagem
- `/trabalhe-conosco` cadastro de guias
- `/login` e `/cadastro`

## Onde editar o conteúdo

- Destinos: `src/data/destinos.js`
- Guias e número de WhatsApp: `src/data/guias.js`

Os guias que estão lá hoje são exemplos. Troque pelos guias reais da equipe.
