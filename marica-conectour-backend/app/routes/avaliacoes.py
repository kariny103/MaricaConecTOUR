from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy.orm import Session

from app.database import get_db
from app.models.avaliacao import Avaliacao
from app.uploads import salvar_arquivo

router = APIRouter(prefix="/avaliacoes", tags=["Avaliações"])

IMAGENS = {".jpg", ".jpeg", ".png", ".webp"}


def to_dict(a: Avaliacao):
    return {
        "id": a.id,
        "nome": a.nome,
        "destino": a.destino,
        "nota": a.nota,
        "comentario": a.comentario,
        "foto": a.foto,
        "criado_em": a.criado_em.isoformat() if a.criado_em else None,
    }


@router.get("")
def listar(limite: int = 10, db: Session = Depends(get_db)):
    avaliacoes = (
        db.query(Avaliacao)
        .order_by(Avaliacao.criado_em.desc())
        .limit(min(max(limite, 1), 50))
        .all()
    )
    return [to_dict(a) for a in avaliacoes]


@router.post("")
def criar(
    nome: str = Form(...),
    nota: int = Form(...),
    comentario: str = Form(...),
    email: str | None = Form(None),
    destino: str | None = Form(None),
    foto: UploadFile | None = File(None),
    db: Session = Depends(get_db),
):
    nome = nome.strip()
    comentario = comentario.strip()

    if not nome or not comentario:
        raise HTTPException(status_code=400, detail="Nome e comentário são obrigatórios")

    if nota < 1 or nota > 5:
        raise HTTPException(status_code=400, detail="A nota deve ser de 1 a 5 estrelas")

    avaliacao = Avaliacao(
        nome=nome,
        email=email or None,
        destino=destino or None,
        nota=nota,
        comentario=comentario,
        foto=salvar_arquivo(foto, IMAGENS),
    )

    db.add(avaliacao)
    db.commit()
    db.refresh(avaliacao)

    return {"message": "Avaliação enviada. Obrigado!", "avaliacao": to_dict(avaliacao)}
