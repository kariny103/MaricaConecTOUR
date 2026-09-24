import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import pp from '../styles/pproficionalcss.module.css'
import { getDestino, formatarPreco } from '../data/destinos'
import { DIAS_SEMANA, getGuia, iniciais, linkWhatsApp } from '../data/guias'

const PProficional = () => {
  const { id } = useParams()
  const guia = getGuia(id)

  if (!guia) return <Navigate to="/guias" replace />

  const viagens = guia.destinos.map(getDestino).filter(Boolean)
  const estrelas = Math.round(guia.nota)

  return (
    <div className={pp.bgWrap}>
      <div className={pp.topText}>
        <Link to="/home">Início</Link> &gt; <Link to="/guias">Guias</Link> &gt; {guia.nome}
      </div>
      <div className={pp.profileCard}>
        <div className={pp.profileHeader}>
          <div className={pp.profileImage}>
            <div className={pp.imgPlaceholder}>{iniciais(guia.nome)}</div>
          </div>
          <div className={pp.profileInfo}>
            <h1>{guia.nome}</h1>
            <div className={pp.age}>{guia.idade} anos · {guia.anosExperiencia} anos de experiência</div>
            <div className={pp.expTitle}><b>Especialidade:</b> <span className={pp.expArea}>{guia.especialidade}</span></div>
            <div className={pp.expTitle}><b>Região:</b> <span className={pp.expArea}>{guia.regiao}</span></div>
            <div className={pp.expTitle}>
              <b>Atende:</b> <span className={pp.expArea}>{guia.dias.map((d) => DIAS_SEMANA[d]).join(', ')}</span>
            </div>
          </div>
        </div>
        <div className={pp.section}>
          <div className={pp.recommendTitle}>Sobre o guia:</div>
          <div className={pp.recommendText}>{guia.bio}</div>
        </div>
        <div className={pp.section}>
          <div className={pp.tripsTitle}>Passeios que faz:</div>
          <div className={pp.tripsRow}>
            {viagens.map((d) => (
              <Link
                to={`/destinos/${d.slug}`}
                key={d.slug}
                className={`${pp.tripBox} ${d.imagem ? '' : 'sem-foto'}`}
                style={d.imagem ? { backgroundImage: `url(${d.imagem})` } : undefined}
                title={d.nome}
              >
                {!d.imagem && <i className={`fas ${d.icone}`}></i>}
                <span className={pp.tripName}>{d.nome}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className={pp.bottomRow}>
          <div className={pp.ratingWrap}>
            <span className={pp.ratingPercent}>{guia.avaliacoesPositivas}%</span>
            <span className={pp.ratingText}> avaliações positivas</span>
            <div className={pp.stars} aria-label={`Nota ${guia.nota} de 5`}>
              {'★'.repeat(estrelas)}{'☆'.repeat(5 - estrelas)}
            </div>
          </div>
          <div className={pp.precoWrap}>
            <span className={pp.preco}>a partir de {formatarPreco(guia.preco)} por pessoa</span>
            <a
              className={pp.guideBtn}
              href={linkWhatsApp(`Olá! Quero agendar um passeio com o guia ${guia.nome} pelo Maricá ConecTOUR.`)}
              target="_blank"
              rel="noreferrer"
            >
              QUERO ESSE GUIA
            </a>
          </div>
        </div>
      </div>
      {/* Elementos decorativos laranja */}
      <div className={pp.orangeDeco + ' ' + pp.deco1}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco2}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco3}></div>
      <div className={pp.orangeDeco + ' ' + pp.deco4}></div>
    </div>
  )
}

export default PProficional
