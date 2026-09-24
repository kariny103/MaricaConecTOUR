import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import l from '../styles/lugarcss1.module.css'
import homecss from '../styles/home.module.css'
import CardDestino from './CardDestino'
import { CATEGORIAS, REGIOES, destinos } from '../data/destinos'

// Compara textos sem diferenciar acentos e maiúsculas (ex: "itaipuacu" acha "Itaipuaçu")
const normalizar = (texto) =>
  texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

const Lugar = () => {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const regiao = params.get('regiao') || ''
  const categoria = params.get('categoria') || ''

  const alterar = (chave, valor) => {
    const novos = new URLSearchParams(params)
    if (valor) novos.set(chave, valor)
    else novos.delete(chave)
    setParams(novos, { replace: true })
  }

  const termo = normalizar(q.trim())
  const resultado = destinos.filter((d) =>
    (!regiao || d.regiao === regiao) &&
    (!categoria || d.categorias.includes(categoria)) &&
    (!termo || normalizar(`${d.nome} ${d.regiao} ${d.resumo} ${d.categorias.join(' ')}`).includes(termo))
  )

  return (
    <main className={l.pagina}>
      <div className={l.breadcrumb}>
        <Link to="/home">Início</Link> &gt; Destinos{regiao && ` > ${regiao}`}
      </div>

      <h1 className={l.titulo}>Destinos em Maricá</h1>
      <p className={l.subtitulo}>Praias, lagoas, trilhas e o centro histórico. Filtre pelo que você procura.</p>

      <div className={l.filtros}>
        <input
          type="search"
          placeholder="Buscar destino"
          value={q}
          onChange={(e) => alterar('q', e.target.value)}
          aria-label="Buscar destino"
        />
        <select value={regiao} onChange={(e) => alterar('regiao', e.target.value)} aria-label="Região">
          <option value="">Todas as regiões</option>
          {REGIOES.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
        <select value={categoria} onChange={(e) => alterar('categoria', e.target.value)} aria-label="Tipo">
          <option value="">Todos os tipos</option>
          {CATEGORIAS.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {(q || regiao || categoria) && (
          <button type="button" className={l.limpar} onClick={() => setParams({}, { replace: true })}>
            Limpar filtros
          </button>
        )}
      </div>

      <p className={l.contagem}>
        {resultado.length === 1 ? '1 destino encontrado' : `${resultado.length} destinos encontrados`}
      </p>

      {resultado.length === 0 ? (
        <div className={l.vazio}>
          <i className="fas fa-map-location-dot"></i>
          <p>Nenhum destino encontrado com esses filtros.</p>
        </div>
      ) : (
        <div className={`${homecss.grid} ${homecss['grid-2-3']} ${l.grade}`}>
          {resultado.map((d) => <CardDestino key={d.slug} destino={d} />)}
        </div>
      )}
    </main>
  )
}

export default Lugar
