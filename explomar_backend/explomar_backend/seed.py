"""
Preenche o banco com dados FICTÍCIOS de exemplo (usuários e avaliações),
para demonstrar o site sem precisar de dados reais.

Uso (dentro desta pasta):
    python seed.py

Pode rodar mais de uma vez: o que já existe não é duplicado.
"""
from datetime import datetime, timedelta, timezone

import bcrypt

from app.database import Base, SessionLocal, engine
from app.models.user import User
from app.models.avaliacao import Avaliacao
from app.models.candidatura import Candidatura  # noqa: F401 (cria a tabela)

SENHA_DEMO = "demo123"

USUARIOS = [
    ("Visitante Demonstração", "demo@conectour.com"),
    ("Mariana Costa", "mariana.demo@conectour.com"),
    ("Rafael Oliveira", "rafael.demo@conectour.com"),
]

# (nome, destino, nota, comentário, dias atrás)
AVALIACOES = [
    ("Mariana Costa", "Pedra do Elefante", 5,
     "Trilha puxada, mas a vista lá de cima compensa cada passo. O guia foi super atencioso e parou várias vezes para explicar sobre a Serra da Tiririca.", 3),
    ("Rafael Oliveira", "Praia de Itaipuaçu", 5,
     "Fomos no fim da tarde para ver o pôr do sol atrás da Pedra do Elefante. Um dos mais bonitos que já vi. Voltaremos!", 8),
    ("Ana Beatriz Souza", "Lagoa de Maricá", 4,
     "Passeio tranquilo e perfeito para ir com crianças. Os pescadores contaram histórias incríveis sobre a lagoa.", 15),
    ("Pedro Henrique Lima", "Centro Histórico de Maricá", 5,
     "Não sabia que Maricá tinha tanta história. A visita à Igreja Matriz foi o ponto alto do passeio.", 22),
    ("Juliana Martins", "Cachoeiras do Espraiado", 4,
     "Água gelada e muito verde. Almoçamos num sítio da região e a comida estava maravilhosa.", 30),
]


def main():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    novos_usuarios = novas_avaliacoes = 0

    try:
        senha_hash = bcrypt.hashpw(SENHA_DEMO.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
        for nome, email in USUARIOS:
            if not db.query(User).filter(User.email == email).first():
                db.add(User(nome=nome, email=email, password=senha_hash))
                novos_usuarios += 1

        agora = datetime.now(timezone.utc).replace(tzinfo=None)
        for nome, destino, nota, comentario, dias in AVALIACOES:
            existe = db.query(Avaliacao).filter(
                Avaliacao.nome == nome, Avaliacao.comentario == comentario
            ).first()
            if not existe:
                db.add(Avaliacao(
                    nome=nome,
                    destino=destino,
                    nota=nota,
                    comentario=comentario,
                    criado_em=agora - timedelta(days=dias),
                ))
                novas_avaliacoes += 1

        db.commit()
    finally:
        db.close()

    print(f"Usuários de exemplo criados: {novos_usuarios}")
    print(f"Avaliações de exemplo criadas: {novas_avaliacoes}")
    print(f"Login de demonstração: demo@conectour.com / senha {SENHA_DEMO}")


if __name__ == "__main__":
    main()
