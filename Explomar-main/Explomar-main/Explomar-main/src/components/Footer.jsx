import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Header'

const Footer = () => {
  return (
    <footer className="mc-footer">
      <div className="mc-container">
        <div className="mc-footer-grid">
          <div>
            <Logo />
            <p className="mc-footer-frase">Maricá te <span>espera!</span></p>
            <p>Seu portal de turismo em Maricá: destinos, roteiros e guias locais em um só lugar.</p>
            <div className="mc-redes">
              <a href="https://wa.me/5521998814926" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            </div>
          </div>

          <div>
            <h4>Navegue</h4>
            <ul className="mc-footer-links">
              <li><Link to="/home">Explorar</Link></li>
              <li><Link to="/destinos">Destinos</Link></li>
              <li><Link to="/guias">Guias turísticos</Link></li>
              <li><Link to="/destinos?categoria=Cidade">Cultura</Link></li>
            </ul>
          </div>

          <div>
            <h4>Participe</h4>
            <ul className="mc-footer-links">
              <li><Link to="/feedback">Avalie sua viagem</Link></li>
              <li><Link to="/trabalhe-conosco">Trabalhe conosco</Link></li>
              <li><Link to="/cadastro">Crie sua conta</Link></li>
              <li><Link to="/#sobre">Sobre nós</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul className="mc-footer-links mc-footer-contato">
              <li><i className="fas fa-location-dot"></i> Maricá - RJ, Brasil</li>
              <li>
                <i className="fab fa-whatsapp"></i>
                <a href="https://wa.me/5521998814926" target="_blank" rel="noreferrer">+55 (21) 99881-4926</a>
              </li>
              <li><i className="fas fa-handshake"></i> Parceiros: Prefeitura de Maricá e Codemar</li>
            </ul>
          </div>
        </div>

        <div className="mc-footer-base">
          <p>© {new Date().getFullYear()} Maricá ConecTOUR. Todos os direitos reservados.</p>
          <p>Feito com <i className="fas fa-heart" style={{ color: 'var(--mc-laranja)' }}></i> em Maricá</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
