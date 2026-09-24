from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import bcrypt

from app.database import get_db
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    if len(user.password) < 6:
        raise HTTPException(
            status_code=400,
            detail="A senha precisa ter pelo menos 6 caracteres"
        )

    if not user.nome.strip():
        raise HTTPException(
            status_code=400,
            detail="Informe seu nome"
        )

    exists = db.query(User).filter(User.email == user.email).first()

    if exists:
        raise HTTPException(
            status_code=400,
            detail="Email já cadastrado"
        )

    hashed_password = bcrypt.hashpw(
        user.password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    new_user = User(
        nome=user.nome.strip(),
        email=user.email,
        password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "Usuário criado com sucesso"
    }


@router.post("/login")
def login(data: UserLogin, db: Session = Depends(get_db)):

    user = db.query(User).filter(
        User.email == data.email
    ).first()

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Credenciais inválidas"
        )

    if not bcrypt.checkpw(
        data.password.encode("utf-8"),
        user.password.encode("utf-8")
    ):
        raise HTTPException(
            status_code=401,
            detail="Credenciais inválidas"
        )

    return {
        "message": "Login realizado",
        "user": {
            "id": user.id,
            "nome": user.nome,
            "email": user.email
        }
    }