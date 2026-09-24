import SiteHeader from '../components/Header'
import styles from '../styles/home.module.css'
import Lagoa from '../assets/lagoa.jpg'

// Páginas internas: mesmo cabeçalho do site + faixa com foto de Maricá
const Header = () => {
  return (
    <>
      <SiteHeader />
      <section className={styles.banner} style={{ backgroundImage: `url(${Lagoa})` }}>
        <div className={styles.bannerConteudo}>
          <span className={styles.bannerEyebrow}>
            <i className="fas fa-location-dot"></i> Maricá · Rio de Janeiro
          </span>
          <h2>Sua próxima viagem <br />começa em Maricá</h2>
        </div>
      </section>
    </>
  )
}

export default Header
