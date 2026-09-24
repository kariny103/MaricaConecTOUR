import React from 'react'
import { Link } from 'react-router-dom'
import { linkWhatsApp } from '../data/guias'

// Seção "Eventos": ainda não há agenda cadastrada no site
const Eventos = () => {
  return (
    <section className="eventos" id="eventos">
      <div className="mc-container eventos-caixa">
        <span className="eventos-icone"><i className="far fa-calendar-days"></i></span>
        <div className="eventos-texto">
          <span className="mc-eyebrow">Eventos e cultura</span>
          <h2>Agenda de Maricá</h2>
          <p>
            Em breve você vai encontrar aqui a programação de festas, feiras e shows da cidade.
            Enquanto isso, conheça o Centro Histórico ou fale com a gente para saber o que está acontecendo.
          </p>
        </div>
        <div className="eventos-botoes">
          <Link to="/destinos?categoria=Cidade" className="mc-botao mc-botao-laranja">EXPLORAR CULTURA</Link>
          <a
            href={linkWhatsApp('Olá! Quais eventos estão acontecendo em Maricá?')}
            target="_blank"
            rel="noreferrer"
            className="mc-botao mc-botao-vazado"
          >
            <i className="fab fa-whatsapp"></i> PERGUNTAR
          </a>
        </div>
      </div>
    </section>
  )
}

export default Eventos
