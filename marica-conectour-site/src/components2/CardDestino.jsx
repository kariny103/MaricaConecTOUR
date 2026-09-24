import { Link } from 'react-router-dom'
import homecss from '../styles/home.module.css'
import { useFavoritos } from '../services/usuario'
import { formatarPreco } from '../data/destinos'

// Card de destino com foto (ou degradê), nome, região e botão de favoritar
const CardDestino = ({ destino, className = '' }) => {
  const [favoritos, alternarFavorito] = useFavoritos()
  const favorito = favoritos.includes(destino.slug)

  return (
    <div className={`${homecss.placeholder} ${className}`}>
      <Link
        to={`/destinos/${destino.slug}`}
        className={`${homecss.cardDestino} ${destino.imagem ? '' : 'sem-foto'}`}
        style={destino.imagem ? { backgroundImage: `url(${destino.imagem})` } : undefined}
      >
        {!destino.imagem && <i className={`fas ${destino.icone}`}></i>}
        <div className={homecss.cardInfo}>
          <strong>{destino.nome}</strong>
          <span>{destino.regiao} · a partir de {formatarPreco(destino.preco)}</span>
        </div>
      </Link>
      <button
        type="button"
        className={homecss['favorite-button']}
        onClick={() => alternarFavorito(destino.slug)}
        aria-label={favorito ? `Remover ${destino.nome} dos favoritos` : `Favoritar ${destino.nome}`}
        aria-pressed={favorito}
      >
        <i className={favorito ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}></i>
      </button>
    </div>
  )
}

export default CardDestino
