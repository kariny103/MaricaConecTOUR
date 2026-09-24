import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useUsuario, sair } from '../services/usuario';

// Logo usada no cabeçalho e no rodapé
export const Logo = () => (
  <Link to="/" className="mc-logo" aria-label="Maricá ConecTOUR, página inicial">
    <span className="mc-logo-icone"><i className="fas fa-water"></i></span>
    <span className="mc-logo-texto">
      <span>MARICÁ</span>
      <strong>CONECTOUR</strong>
    </span>
  </Link>
);

const Header = () => {
  const usuario = useUsuario();
  const navigate = useNavigate();
  const location = useLocation();
  const [busca, setBusca] = useState('');
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu do celular ao trocar de página
  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname, location.search, location.hash]);

  // Trava a rolagem da página enquanto o menu do celular está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuAberto]);

  const pesquisar = (e) => {
    e.preventDefault();
    const termo = busca.trim();
    navigate(termo ? `/destinos?q=${encodeURIComponent(termo)}` : '/destinos');
    setBusca('');
  };

  const classeLink = ({ isActive }) => `mc-nav-link${isActive ? ' active' : ''}`;

  const formBusca = (
    <form className="mc-busca" onSubmit={pesquisar} role="search">
      <input
        type="search"
        placeholder="Buscar destino..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        aria-label="Buscar destino"
      />
      <button type="submit" aria-label="Buscar"><i className="fas fa-magnifying-glass"></i></button>
    </form>
  );

  const conta = (
    <div className="mc-conta">
      {usuario ? (
        <>
          <span>Olá, <strong>{usuario.nome.split(' ')[0]}</strong></span>
          <button type="button" className="mc-conta-botao vazado" onClick={sair}>Sair</button>
        </>
      ) : (
        <>
          <Link to="/login" className="mc-conta-link">Entrar</Link>
          <Link to="/cadastro" className="mc-conta-botao">Cadastre-se</Link>
        </>
      )}
    </div>
  );

  const local = (
    <span className="mc-local"><i className="fas fa-location-dot"></i> Maricá - RJ</span>
  );

  return (
    <header className="mc-header">
      <div className="mc-header-inner">
        <Logo />

        <nav className={`mc-nav${menuAberto ? ' aberto' : ''}`} aria-label="Menu principal">
          <NavLink to="/home" className={classeLink}>Explorar</NavLink>
          <NavLink to="/destinos" className={classeLink}>Destinos</NavLink>
          <NavLink to="/guias" className={classeLink}>Guias</NavLink>
          <Link to="/#eventos" className="mc-nav-link">Eventos</Link>
          <Link to="/destinos?categoria=Cidade" className="mc-nav-link">Cultura</Link>
          <Link to="/#sobre" className="mc-nav-link">Sobre nós</Link>

          {/* No celular, busca, avaliação, trabalhe conosco e conta ficam dentro do menu */}
          <div className="mc-nav-extra">
            <Link to="/feedback" className="mc-nav-link">Avalie sua viagem</Link>
            <Link to="/trabalhe-conosco" className="mc-nav-link">Trabalhe conosco</Link>
            {formBusca}
            {local}
            {conta}
          </div>
        </nav>

        <div className="mc-header-direita">
          {local}
          {formBusca}
          {conta}
        </div>

        <button
          type="button"
          className="mc-menu-botao"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <i className={menuAberto ? 'fas fa-xmark' : 'fas fa-bars'}></i>
        </button>
      </div>
    </header>
  );
}

export default Header;
