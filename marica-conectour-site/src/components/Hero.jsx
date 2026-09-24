import React from 'react'
import Itaipuacu from '../assets/itaipuacu.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <img
        src={Itaipuacu}
        alt="Pôr do sol na Praia de Itaipuaçu, em Maricá"
        className="hero-image"
      />
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content mc-container">
        <span className="hero-eyebrow">
          <i className="fas fa-location-dot"></i> Maricá · Rio de Janeiro
        </span>
        <h1>DESCUBRA <span>MARICÁ</span></h1>
        <p>Praias, trilhas, lagoas, cultura e experiências inesquecíveis em um só lugar.</p>
        <div className="hero-buttons">
          <Link to="/destinos" className="mc-botao mc-botao-laranja">
            EXPLORAR DESTINOS <i className="fas fa-arrow-right"></i>
          </Link>
          <Link to="/home" className="mc-botao mc-botao-vazado">CONHEÇA MARICÁ</Link>
        </div>
      </div>
      <a href="#categorias" className="scroll-indicator" aria-label="Rolar para as categorias">
        <i className="fas fa-chevron-down"></i>
      </a>
    </section>
  )
}

export default Hero
