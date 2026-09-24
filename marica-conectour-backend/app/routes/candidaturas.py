from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session
import bcrypt

from app.database import get_db
from app.models.candidatura import Candidatura
from app.models.user import User
from app.uploads import salvar_arquivo

router = APIRouter(prefix="/candidaturas", tags=["Trabalhe conosco"])

DOCUMENTOS = {".pdf", ".jpg", ".jpeg", ".png"}


@router.post("")
def criar(
    email: str = Form(...),
    senha: str = Form(...),
    nome: str = Form(...),
    sobrenome: str = Form(...),
    cpf: str = Form(...),
    celular: str = Form(...),
    rg: str | None = Form(None),
    nascimento: str | None = Form(None),
    genero: str | None = Form(None),
    telefone: str | None = Form(None),
    cep: str | None = Form(None),
    cidade: str | None = Form(None),
    endereco: str | None = Form(None),
    bairro: str | None = Form(None),
    numero: str | None = Form(None),
    complemento: str | None = Form(None),
    referencia: str | None = Form(None),
    experiencias: str | None = Form(None),
    formacao: str | None = Form(None),
    cadastur: str | None = Form(None),
    certificado: UploadFile | None = File(None),
    db: Session = Depends(get_db),
):
    email = email.strip()

    if len(senha) < 6:
        raise HTTPException(status_code=400, detail="A senha precisa ter pelo menos 6 caracteres")

    user = db.query(User).filter(User.email == email).first()

    if user:
        # Quem já tem conta pode se candidatar informando a mesma senha
        if not bcrypt.checkpw(senha.encode("utf-8"), user.password.encode("utf-8")):
            raise HTTPException(
                status_code=400,
                detail="Este e-mail já tem conta. Use a mesma senha da sua conta."
            )
    else:
        user = User(
            nome=f"{nome.strip()} {sobrenome.strip()}",
            email=email,
            password=bcrypt.hashpw(senha.encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
        )
        db.add(user)
        db.flush()

    candidatura = Candidatura(
        user_id=user.id,
        nome=nome.strip(),
        sobrenome=sobrenome.strip(),
        email=email,
        cpf=cpf,
        rg=rg,
        nascimento=nascimento,
        genero=genero,
        telefone=telefone,
        celular=celular,
        cep=cep,
        cidade=cidade,
        endereco=endereco,
        bairro=bairro,
        numero=numero,
        complemento=complemento,
        referencia=referencia,
        experiencias=experiencias,
        formacao=formacao,
        cadastur=cadastur,
        certificado=salvar_arquivo(certificado, DOCUMENTOS),
    )

    db.add(candidatura)
    db.commit()

    return {"message": "Candidatura enviada! Entraremos em contato pelo seu celular ou e-mail."}
