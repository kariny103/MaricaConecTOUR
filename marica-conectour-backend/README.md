# Maricá ConecTOUR Backend

API do site de turismo Maricá ConecTOUR (FastAPI + SQLite).

## Executar

Rode os comandos dentro desta pasta (`marica-conectour-backend`):

```
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

Para preencher o banco com dados fictícios de exemplo (opcional):

```
python seed.py
```

Login de exemplo: `demo@conectour.com`, senha `demo123`.

Swagger (documentação e testes da API):
http://localhost:8000/docs

## Rotas

| Método | Rota            | Uso                                              |
|--------|-----------------|--------------------------------------------------|
| POST   | /auth/register  | Criar conta (nome, email, senha com 6+ caracteres) |
| POST   | /auth/login     | Entrar                                           |
| GET    | /avaliacoes     | Últimas avaliações (`?limite=3`)                 |
| POST   | /avaliacoes     | Enviar avaliação (formulário, foto opcional)     |
| POST   | /candidaturas   | Cadastro de guia no "Trabalhe conosco"           |

Os dados ficam em `marica_conectour.db` e as fotos e certificados enviados na pasta `uploads/`.
