import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import homecss from '../styles/home.module.css'
import CardDestino from './CardDestino'
import { CATEGORIAS, destinos, getDestino } from '../data/destinos'
import { useFavoritos, useUsuario } from '../services/usuario'

const Main = () => {
  const navigate = useNavigate()
  const usuario = useUsuario()
  const [favoritos, alternarFavorito] = useFavoritos()
  const [busca, setBusca] = useState('')
  const [categoriaBusca, setCategoriaBusca] = useState('')
  const [categoria, setCategoria] = useState(CATEGORIAS[0])

  const pesquisar = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (busca.trim()) params.set('q', busca.trim())
    if (categoriaBusca) params.set('categoria', categoriaBusca)
    navigate(`/destinos${params.toString() ? `?${params}` : ''}`)
  }

  const destaques = destinos.filter((d) => d.destaque).slice(0, 5)
  const paraFavoritar = destinos.filter((d) => !d.destaque).slice(0, 3)
  const porCategoria = destinos.filter((d) => d.categorias.includes(categoria)).slice(0, 4)
  const listaFavoritos = favoritos.map(getDestino).filter(Boolean)

  return (
    <main className={homecss.container2}>
      <form className={homecss['search-box']} onSubmit={pesquisar} role="search">
        <input
          type="text"
          placeholder="Destino ou bairro (ex: Itaipuaçu)"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          aria-label="Destino ou bairro"
        />
        <select
          value={categoriaBusca}
          onChange={(e) => setCategoriaBusca(e.target.value)}
          aria-label="Tipo de passeio"
        >
          <option value="">Todos os tipos</option>
          {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <button type="submit" className={homecss['btn-search']}>Pesquisar</button>
      </form>

      <section className={homecss.section}>
        <h3>Destinos mais procurados</h3>
        <p>Lugares mais desejados por quem viaja por Maricá</p>
        <div className={`${homecss.grid} ${homecss['grid-2-3']}`}>
          {destaques.map((d, i) => (
            <CardDestino key={d.slug} destino={d} className={i < 2 ? homecss.large : ''} />
          ))}
        </div>
      </section>

      <section className={homecss.section}>
        <h3>Favorite um lugar</h3>
        <p>Toque no coração para guardar um destino e não esquecer</p>
        <div className={`${homecss.grid} ${homecss['grid-2-3']}`}>
          {paraFavoritar.map((d) => <CardDestino key={d.slug} destino={d} />)}
        </div>

        <h4 className={homecss.favoritosTitulo}>Seus favoritos</h4>
        {listaFavoritos.length === 0 ? (
          <p>Você ainda não favoritou nenhum destino.</p>
        ) : (
          <ul className={homecss.favoritosLista}>
            {listaFavoritos.map((d) => (
              <li key={d.slug}>
                <Link to={`/destinos/${d.slug}`}>{d.nome}</Link>
                <button type="button" onClick={() => alternarFavorito(d.slug)} aria-label={`Remover ${d.nome}`}>
                  <i className="fas fa-xmark"></i>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className={homecss.section}>
        <h3>Organize sua viagem com praticidade e agilidade</h3>
        <p>Escolha o seu estilo e explore o melhor de Maricá</p>
        <div className={homecss.tags}>
          {CATEGORIAS.map((c) => (
            <button
              key={c}
              type="button"
              className={`${homecss.tag} ${c === categoria ? homecss.active : ''}`}
              onClick={() => setCategoria(c)}
              aria-pressed={c === categoria}
            >
              {c}
            </button>
          ))}
        </div>
        <div className={`${homecss.grid} ${homecss['grid-5']}`}>
          {porCategoria.map((d) => <CardDestino key={d.slug} destino={d} />)}
        </div>
      </section>

      <section className={homecss['promo-box']}>
        {usuario ? (
          <div className={homecss['promo-text']}>
            <h4>Pronto para o passeio, {usuario.nome.split(' ')[0]}?</h4>
            <p>Escolha um guia local e combine o roteiro direto pelo WhatsApp.</p>
            <Link to="/guias" className={homecss['btn-outline2']}>Ver guias</Link>
          </div>
        ) : (
          <div className={homecss['promo-text']}>
            <h4>Faça login e economize</h4>
            <p>Cadastre-se e ganhe 5% de desconto em passeios selecionados</p>
            <Link to="/login" className={homecss['btn-black']}>Login</Link>
            <Link to="/cadastro" className={homecss['btn-outline2']}>Cadastre-se</Link>
          </div>
        )}
        <div className={homecss['promo-img']}>🎁</div>
      </section>
    </main>
  );
};

export default Main;
