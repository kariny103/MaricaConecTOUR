import React from 'react'
import { Link } from 'react-router-dom'
import { destinos, formatarPreco } from '../data/destinos'

// Seção "Experiências em Maricá"
const Offers = () => {
  const experiencias = destinos.slice(0, 6)

  return (
    <section className="mc-secao offers" id="destinos">
      <div className="mc-container">
        <div className="offers-topo">
          <div className="mc-secao-cabecalho">
            <span className="mc-eyebrow"><i className="fas fa-star"></i> Os mais procurados</span>
            <h2>Experiências em Maricá</h2>
            <p>Praias, trilhas e passeios com guias locais que conhecem cada canto da cidade.</p>
          </div>
          <Link to="/destinos" className="mc-botao mc-botao-contorno">VER TODOS OS DESTINOS</Link>
        </div>

        <div className="offers-container">
          {experiencias.map((d) => (
            <article className="offer-card" key={d.slug}>
              <Link to={`/destinos/${d.slug}`} className="offer-image" tabIndex={-1} aria-hidden="true">
                {d.imagem
                  ? <img src={d.imagem} alt="" loading="lazy" />
                  : <span className="offer-sem-foto sem-foto"><i className={`fas ${d.icone}`}></i></span>}
                <span className="offer-price">A partir de {formatarPreco(d.preco)}</span>
              </Link>
              <div className="offer-content">
                <span className="offer-local"><i className="fas fa-location-dot"></i> {d.regiao}, Maricá</span>
                <h3>{d.nome}</h3>
                <p>{d.resumo}</p>
                <div className="offer-details">
                  <span><i className="far fa-clock"></i> {d.duracao}</span>
                  <Link to={`/destinos/${d.slug}`} className="offer-button">
                    Ver detalhes <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
