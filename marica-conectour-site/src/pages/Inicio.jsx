import Header from '../components/Header';
import Hero from '../components/Hero';
import Categorias from '../components/Categorias';
import Estilos from '../components/Estilos';
import Offers from '../components/Offers';
import Mapa from '../components/Mapa';
import Features from '../components/Features';
import Eventos from '../components/Eventos';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import "../styles/inicio.css";

const Inicio = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Categorias />
        <Estilos />
        <Offers />
        <Mapa />
        <Features />
        <Eventos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Inicio;
