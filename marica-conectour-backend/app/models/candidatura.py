from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from app.database import Base

class Candidatura(Base):
    __tablename__ = "candidaturas"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    nome = Column(String, nullable=False)
    sobrenome = Column(String, nullable=False)
    email = Column(String, nullable=False)
    cpf = Column(String, nullable=False)
    rg = Column(String, nullable=True)
    nascimento = Column(String, nullable=True)
    genero = Column(String, nullable=True)
    telefone = Column(String, nullable=True)
    celular = Column(String, nullable=False)
    cep = Column(String, nullable=True)
    cidade = Column(String, nullable=True)
    endereco = Column(String, nullable=True)
    bairro = Column(String, nullable=True)
    numero = Column(String, nullable=True)
    complemento = Column(String, nullable=True)
    referencia = Column(String, nullable=True)
    experiencias = Column(Text, nullable=True)
    formacao = Column(String, nullable=True)
    cadastur = Column(String, nullable=True)
    certificado = Column(String, nullable=True)
    criado_em = Column(DateTime, default=datetime.utcnow)
