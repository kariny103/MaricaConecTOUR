from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.database import Base, engine, UPLOAD_DIR
from app.routes.auth import router as auth_router
from app.routes.avaliacoes import router as avaliacoes_router
from app.routes.candidaturas import router as candidaturas_router
from app.models.user import User
from app.models.avaliacao import Avaliacao
from app.models.candidatura import Candidatura

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Maricá ConecTOUR API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(avaliacoes_router)
app.include_router(candidaturas_router)

app.mount("/uploads", StaticFiles(directory=UPLOAD_DIR), name="uploads")

@app.get("/")
def root():
    return {"status": "online"}
