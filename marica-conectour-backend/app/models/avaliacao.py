from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, String, Text
from app.database import Base

class Avaliacao(Base):
    __tablename__ = "avaliacoes"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String, nullable=False)
    email = Column(String, nullable=True)
    destino = Column(String, nullable=True)
    nota = Column(Integer, nullable=False)
    comentario = Column(Text, nullable=False)
    foto = Column(String, nullable=True)
    criado_em = Column(DateTime, default=datetime.utcnow)
