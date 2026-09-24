import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api, { urlArquivo } from '../services/api'
import { iniciais } from '../data/guias'

// Mostrado enquanto ainda não há avaliações no servidor
const EXEMPLO = [
  {
    id: 'exemplo',
    nome: 'João Silva',
    nota: 5,
    comentario: 'Uma experiência incrível! A equipe foi muito atenciosa e profissional. Recomendo fortemente para quem quer conhecer Maricá.',
  },
]

const Testimonials = () => {
  const [avaliacoes, setAvaliacoes] = useState(EXEMPLO)

  useEffect(() => {
    api.get('/avaliacoes', { params: { limite: 3 } })
      .then(({ data }) => { if (data.length) setAvaliacoes(data) })
      .catch(() => { /* backend fora do ar: mantém o exemplo */ })
  }, [])

  return (
    <section className="mc-secao testimonials">
      <div className="mc-container">
        <div className="mc-secao-cabecalho centro">
          <span className="mc-eyebrow"><i className="fas fa-comment-dots"></i> Depoimentos</span>
          <h2>O que nossos visitantes dizem</h2>
        </div>
        <div className="testimonial-container">
          {avaliacoes.map((a) => (
            <figure className="testimonial" key={a.id}>
              <i className="fas fa-quote-left testimonial-aspas" aria-hidden="true"></i>
              <div className="testimonial-rating" aria-label={`${a.nota} de 5 estrelas`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className={n <= a.nota ? 'fas fa-star' : 'far fa-star'}></i>
                ))}
              </div>
              <blockquote>{a.comentario}</blockquote>
              <figcaption>
                <span className="testimonial-image">
                  {a.foto
                    ? <img src={urlArquivo(a.foto)} alt={`Foto enviada por ${a.nome}`} />
                    : <span className="testimonial-iniciais">{iniciais(a.nome)}</span>}
                </span>
                <span>
                  <strong>{a.nome}</strong>
                  {a.destino && <small>{a.destino}</small>}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="testimonials-cta">
          <Link to="/feedback" className="mc-botao mc-botao-laranja">AVALIE SUA VIAGEM</Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
