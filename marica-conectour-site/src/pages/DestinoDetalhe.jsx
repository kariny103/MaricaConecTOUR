import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components2/Header.jsx'
import Footer from '../components2/Footer.jsx'
import l from '../styles/lugarcss1.module.css'
import { formatarPreco, getDestino } from '../data/destinos'
import { guias, iniciais, linkWhatsApp } from '../data/guias'
import { useFavoritos } from '../services/usuario'

const DestinoDetalhe = () => {
  const { slug } = useParams()
  const destino = getDestino(slug)
  const [favoritos, alternarFavorito] = useFavoritos()

  if (!destino) return <Navigate to="/destinos" replace />

  const favorito = favoritos.includes(destino.slug)
  const guiasDoDestino = guias.filter((g) => g.destinos.includes(destino.slug))

  return (
    <div>
      <Header />
      <main className={l.pagina}>
        <div className={l.breadcrumb}>
          <Link to="/home">Início</Link> &gt; <Link to="/destinos">Destinos</Link> &gt; {destino.nome}
        </div>

        <div
          className={`${l.capa} ${destino.imagem ? '' : 'sem-foto'}`}
          style={destino.imagem ? { backgroundImage: `url(${destino.imagem})` } : undefined}
        >
          {!destino.imagem && <i className={`fas ${destino.icone} ${l.capaIcone}`}></i>}
          <h1>{destino.nome}</h1>
        </div>

        <div className={l.detalhe}>
          <div className={l.texto}>
            <h2>Sobre o lugar</h2>
            <p>{destino.descricao}</p>

            <h2>Dicas</h2>
            <ul className={l.dicas}>
              {destino.dicas.map((dica) => <li key={dica}>{dica}</li>)}
            </ul>

            <h2>Como chegar</h2>
            <p>{destino.comoChegar}</p>

            {guiasDoDestino.length > 0 && (
              <>
                <h2>Guias que fazem este passeio</h2>
                <div className={l.guias}>
                  {guiasDoDestino.map((g) => (
                    <Link to={`/guias/${g.id}`} key={g.id} className={l.guia}>
                      <span className={l.guiaAvatar}>{iniciais(g.nome)}</span>
                      <span>
                        <strong>{g.nome}</strong>
                        <small>{g.especialidade} · ★ {g.nota.toFixed(1)}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <aside className={l.caixa}>
            <div className={l.preco}>
              {formatarPreco(destino.preco)}
              <small>a partir de, por pessoa, com guia</small>
            </div>
            <dl>
              <dt>Região</dt><dd>{destino.regiao}</dd>
              <dt>Duração</dt><dd>{destino.duracao}</dd>
              <dt>Tipo</dt><dd>{destino.categorias.join(', ')}</dd>
            </dl>
            <a
              className={l.botao}
              href={linkWhatsApp(`Olá! Quero agendar um passeio para ${destino.nome} com o Maricá ConecTOUR.`)}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i> Agendar pelo WhatsApp
            </a>
            <button
              type="button"
              className={l.botaoSecundario}
              onClick={() => alternarFavorito(destino.slug)}
              aria-pressed={favorito}
            >
              <i className={favorito ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>{' '}
              {favorito ? 'Nos seus favoritos' : 'Favoritar'}
            </button>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DestinoDetalhe
