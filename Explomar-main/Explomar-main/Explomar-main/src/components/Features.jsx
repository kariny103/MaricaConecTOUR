import React from 'react'

const Features = () => {
  return (
    <section className="mc-secao features" id="sobre">
      <div className="mc-container">
        <div className="mc-secao-cabecalho centro">
          <span className="mc-eyebrow"><i className="fas fa-heart"></i> Sobre nós</span>
          <h2>Por que nos escolher?</h2>
          <p>O Maricá ConecTOUR conecta visitantes a guias e lugares que só quem vive aqui conhece.</p>
        </div>
        <div className="features-container">
          <div className="feature-card">
            <span className="feature-icone"><i className="fas fa-user-check"></i></span>
            <h3>Guias especializados</h3>
            <p>Nossa equipe de guias conhece profundamente cada canto de Maricá, garantindo uma experiência única.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icone"><i className="fas fa-route"></i></span>
            <h3>Roteiros exclusivos</h3>
            <p>Oferecemos passeios personalizados para explorar os melhores pontos turísticos da cidade.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icone"><i className="fas fa-house-flag"></i></span>
            <h3>Experiência local</h3>
            <p>Conheça Maricá como um local, com dicas e histórias que só quem vive aqui pode contar.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
