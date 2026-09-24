import uuid
from pathlib import Path

from fastapi import HTTPException, UploadFile

from app.database import UPLOAD_DIR

MAX_SIZE = 5 * 1024 * 1024  # 5 MB


def salvar_arquivo(arquivo: UploadFile | None, extensoes: set[str]) -> str | None:
    """Salva o arquivo enviado em uploads/ e devolve o caminho público (/uploads/...)."""
    if arquivo is None or not arquivo.filename:
        return None

    ext = Path(arquivo.filename).suffix.lower()
    if ext not in extensoes:
        raise HTTPException(
            status_code=400,
            detail=f"Tipo de arquivo não permitido. Use: {', '.join(sorted(extensoes))}"
        )

    conteudo = arquivo.file.read(MAX_SIZE + 1)
    if len(conteudo) > MAX_SIZE:
        raise HTTPException(status_code=400, detail="Arquivo maior que 5 MB")

    nome = f"{uuid.uuid4().hex}{ext}"
    (UPLOAD_DIR / nome).write_bytes(conteudo)
    return f"/uploads/{nome}"
