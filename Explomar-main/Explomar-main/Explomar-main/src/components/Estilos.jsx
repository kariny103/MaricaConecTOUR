import React from 'react'
import { Link } from 'react-router-dom'
import Itaipuacu from '../assets/itaipuacu.jpg'
import Serra from '../assets/serra.jpg'
import Lagoa from '../assets/lagoa.jpg'

// Cards sem foto usam um fundo em degradê com ícone (troque por fotos quando tiver)
const ESTILOS = [
  { emoji: '🌊', titulo: 'Quero praia', imagem: Itaipuacu, link: '/destinos?categoria=Praia' },
  { emoji: '🥾', titulo: 'Quero aventura', imagem: Serra, link: '/destinos?categoria=Natureza' },
  { emoji: '🍴', titulo: 'Quero gastronomia', icone: 'fa-utensils', tom: 'laranja', link: '/guias' },
  { emoji: '📸', titulo: 'Quero lugares para fotografar', imagem: Lagoa, link: '/destinos/farol-de-ponta-negra' },
  { emoji: '👨‍👩‍👧', titulo: 'Quero passeio em família', icone: 'fa-people-group', tom: 'turquesa', link: '/destinos?categoria=Descanso' },
]

const Estilos = () => {
  return (
    <section className="mc-secao estilos">
      <div className="mc-container">
        <div className="mc-secao-cabecalho">
          <span className="mc-eyebrow"><i className="fas fa-compass"></i> Do seu jeito</span>
          <h2>Explore Maricá pelo seu estilo</h2>
          <p>Escolha o tipo de experiência que combina com você e veja por onde começar.</p>
        </div>

        <div className="estilos-grid">
          {ESTILOS.map((e) => (
            <Link key={e.titulo} to={e.link} className="estilo-card">
              <span
                className={`estilo-imagem${e.imagem ? '' : ` estilo-sem-foto ${e.tom}`}`}
                style={e.imagem ? { backgroundImage: `url(${e.imagem})` } : undefined}
              >
                {!e.imagem && <i className={`fas ${e.icone}`}></i>}
              </span>
              <span className="estilo-rotulo">
                <span className="estilo-emoji" aria-hidden="true">{e.emoji}</span>
                {e.titulo}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Estilos
