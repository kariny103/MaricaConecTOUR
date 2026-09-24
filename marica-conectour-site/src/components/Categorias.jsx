import React from 'react'
import { Link } from 'react-router-dom'
import Itaipuacu from '../assets/itaipuacu.jpg'
import Serra from '../assets/serra.jpg'
import Lagoa from '../assets/lagoa.jpg'

// Os quatro cards grandes logo abaixo da capa
const CATEGORIAS = [
  {
    titulo: 'PRAIAS',
    texto: 'Descubra as praias de Maricá',
    icone: 'fa-umbrella-beach',
    imagem: Itaipuacu,
    link: '/destinos?categoria=Praia',
  },
  {
    titulo: 'TRILHAS',
    texto: 'Aventure-se pela natureza',
    icone: 'fa-person-hiking',
    imagem: Serra,
    link: '/destinos?categoria=Natureza',
  },
  {
    titulo: 'LAGOAS',
    texto: 'Conheça as lagoas da cidade',
    icone: 'fa-water',
    imagem: Lagoa,
    link: '/destinos?q=lagoa',
  },
  {
    titulo: 'CULTURA & HISTÓRIA',
    texto: 'Explore lugares e histórias de Maricá',
    icone: 'fa-landmark',
    link: '/destinos?categoria=Cidade',
  },
]

const Categorias = () => {
  return (
    <section className="categorias" id="categorias" aria-label="Categorias de passeio">
      <div className="mc-container categorias-grid">
        {CATEGORIAS.map((c) => (
          <Link
            key={c.titulo}
            to={c.link}
            className={`categoria-card${c.imagem ? '' : ' sem-imagem'}`}
            style={c.imagem ? { backgroundImage: `url(${c.imagem})` } : undefined}
          >
            <span className="categoria-icone"><i className={`fas ${c.icone}`}></i></span>
            <span className="categoria-seta" aria-hidden="true"><i className="fas fa-arrow-right"></i></span>
            <span className="categoria-texto">
              <strong>{c.titulo}</strong>
              <span>{c.texto}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categorias
