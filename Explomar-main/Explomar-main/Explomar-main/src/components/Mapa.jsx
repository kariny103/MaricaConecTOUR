import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CENTRO_MAPA, TIPOS_MAPA, pontos } from '../data/mapa'

// Mapa interativo com Leaflet (carregado pelo index.html)
const Mapa = () => {
  const navigate = useNavigate()
  const elementoRef = useRef(null)
  const mapaRef = useRef(null)
  const camadasRef = useRef({})
  const [ativos, setAtivos] = useState(Object.keys(TIPOS_MAPA))
  const [semMapa, setSemMapa] = useState(false)

  // Cria o mapa uma vez
  useEffect(() => {
    const L = window.L
    if (!L || !elementoRef.current) {
      setSemMapa(true)
      return
    }

    const mapa = L.map(elementoRef.current, {
      center: CENTRO_MAPA,
      zoom: 11,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
    }).addTo(mapa)

    // Enquadra todos os pontos
    mapa.fitBounds(pontos.map((p) => [p.lat, p.lng]), { padding: [40, 40] })

    Object.entries(TIPOS_MAPA).forEach(([tipo, info]) => {
      const camada = L.layerGroup()
      const icone = L.divIcon({
        className: 'mapa-marcador-wrap',
        html: `<span class="mapa-marcador" style="--cor:${info.cor}"><i class="fas ${info.icone}"></i></span>`,
        iconSize: [36, 36],
        iconAnchor: [18, 34],
        popupAnchor: [0, -30],
      })

      pontos.filter((p) => p.tipo === tipo).forEach((p) => {
        const popup = document.createElement('div')
        popup.className = 'mapa-popup'
        popup.innerHTML = `<small style="color:${info.cor}">${info.rotulo}</small><strong></strong>`
        popup.querySelector('strong').textContent = p.nome
        if (p.slug) {
          const botao = document.createElement('button')
          botao.type = 'button'
          botao.textContent = 'Ver detalhes →'
          botao.onclick = () => navigate(`/destinos/${p.slug}`)
          popup.appendChild(botao)
        }
        L.marker([p.lat, p.lng], { icon: icone, title: p.nome }).bindPopup(popup).addTo(camada)
      })

      camada.addTo(mapa)
      camadasRef.current[tipo] = camada
    })

    mapaRef.current = mapa

    return () => {
      mapa.remove()
      mapaRef.current = null
      camadasRef.current = {}
    }
  }, [navigate])

  // Mostra ou esconde as camadas conforme o filtro
  useEffect(() => {
    const mapa = mapaRef.current
    if (!mapa) return
    Object.entries(camadasRef.current).forEach(([tipo, camada]) => {
      if (ativos.includes(tipo)) camada.addTo(mapa)
      else camada.remove()
    })
  }, [ativos])

  const alternar = (tipo) =>
    setAtivos((atual) => (atual.includes(tipo) ? atual.filter((t) => t !== tipo) : [...atual, tipo]))

  return (
    <section className="mc-secao mapa-secao" id="mapa">
      <div className="mc-container">
        <div className="mc-secao-cabecalho centro">
          <span className="mc-eyebrow"><i className="fas fa-map-location-dot"></i> Mapa</span>
          <h2>Encontre seu próximo destino</h2>
          <p>Veja onde ficam as praias, trilhas, restaurantes e hospedagens de Maricá. Toque em um marcador para saber mais.</p>
        </div>

        <div className="mapa-filtros" role="group" aria-label="Filtrar pontos do mapa">
          {Object.entries(TIPOS_MAPA).map(([tipo, info]) => (
            <button
              key={tipo}
              type="button"
              className={`mapa-filtro${ativos.includes(tipo) ? ' ativo' : ''}`}
              style={{ '--cor': info.cor }}
              onClick={() => alternar(tipo)}
              aria-pressed={ativos.includes(tipo)}
            >
              <i className={`fas ${info.icone}`}></i> {info.rotulo}
            </button>
          ))}
        </div>

        <div className="mapa-moldura">
          {semMapa ? (
            <div className="mapa-indisponivel">
              <i className="fas fa-map"></i>
              <p>Não foi possível carregar o mapa. Verifique sua conexão com a internet.</p>
              <a
                className="mc-botao mc-botao-laranja"
                href="https://www.google.com/maps/place/Maric%C3%A1+-+RJ"
                target="_blank"
                rel="noreferrer"
              >
                Abrir no Google Maps
              </a>
            </div>
          ) : (
            <div ref={elementoRef} className="mapa" aria-label="Mapa de Maricá com pontos turísticos"></div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Mapa
