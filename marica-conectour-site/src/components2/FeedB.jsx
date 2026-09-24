import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import feedBcss from '../styles/feedbackcss.module.css'
import api, { mensagemErro } from '../services/api'
import { destinos } from '../data/destinos'
import { useUsuario } from '../services/usuario'

const FeedB = () => {
  const usuario = useUsuario()
  const [nome, setNome] = useState(usuario?.nome || '')
  const [email, setEmail] = useState(usuario?.email || '')
  const [destino, setDestino] = useState('')
  const [nota, setNota] = useState(0)
  const [notaHover, setNotaHover] = useState(0)
  const [comentario, setComentario] = useState('')
  const [foto, setFoto] = useState(null)
  const [erros, setErros] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const validar = () => {
    const novos = {}
    if (!nome.trim()) novos.nome = 'Campo obrigatório'
    if (!nota) novos.nota = 'Escolha de 1 a 5 estrelas'
    if (!comentario.trim()) novos.comentario = 'Conte um pouco da sua experiência'
    setErros(novos)
    return Object.keys(novos).length === 0
  }

  const enviar = async (e) => {
    e.preventDefault()
    if (!validar()) return

    const dados = new FormData()
    dados.append('nome', nome.trim())
    dados.append('nota', nota)
    dados.append('comentario', comentario.trim())
    if (email.trim()) dados.append('email', email.trim())
    if (destino) dados.append('destino', destino)
    if (foto) dados.append('foto', foto)

    setEnviando(true)
    try {
      await api.post('/avaliacoes', dados)
      setEnviado(true)
    } catch (error) {
      alert(mensagemErro(error, 'Erro ao enviar avaliação'))
    } finally {
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <div className={feedBcss.pagina}>
        <div className={feedBcss.sucesso}>
          <div className={feedBcss.sucessoIcone}>✓</div>
          <h1 className={feedBcss['h1feed']}>Obrigado pela avaliação!</h1>
          <p>Sua opinião ajuda outros viajantes a conhecer Maricá.</p>
          <Link to="/" className={feedBcss.botao}>Ver avaliações na página inicial</Link>
        </div>
      </div>
    )
  }

  return (
    <div className={feedBcss.pagina}>
      <div className={feedBcss['breadcrumb']}>
        <Link to="/home">Início</Link> &gt; Avaliação
      </div>

      <h1 className={feedBcss['h1feed']}>Avalie sua viagem</h1>

      <form onSubmit={enviar} className={feedBcss['form2']} noValidate>
        <fieldset>
          <legend className={feedBcss['legend']}><strong>📅 Dados para contato</strong></legend>

          <div className={feedBcss['form-group']}>
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className={erros.nome ? feedBcss['error'] : ''}
            />
            {erros.nome && <span className={feedBcss['error-text']}>{erros.nome}</span>}
          </div>

          <div className={feedBcss['form-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={feedBcss['form-group']}>
            <label htmlFor="destino">Destino visitado</label>
            <select id="destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
              <option value="">Selecione (opcional)</option>
              {destinos.map((d) => <option key={d.slug} value={d.nome}>{d.nome}</option>)}
            </select>
          </div>

          <div className={feedBcss['form-group']}>
            <label htmlFor="foto">Envie uma foto da sua viagem</label>
            <div className={feedBcss['file-upload']}>
              <input
                type="file"
                id="foto"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => setFoto(e.target.files[0] || null)}
              />
            </div>
          </div>

          <div className={feedBcss['form-group']}>
            <span className={feedBcss.rotulo} id="rotulo-estrelas">Avalie com estrelinhas *</span>
            <div
              className={feedBcss['stars']}
              role="radiogroup"
              aria-labelledby="rotulo-estrelas"
              onMouseLeave={() => setNotaHover(0)}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={nota === n}
                  aria-label={`${n} estrela${n > 1 ? 's' : ''}`}
                  className={n <= (notaHover || nota) ? feedBcss.estrelaAtiva : feedBcss.estrela}
                  onClick={() => setNota(n)}
                  onMouseEnter={() => setNotaHover(n)}
                >
                  ★
                </button>
              ))}
            </div>
            {erros.nota && <span className={feedBcss['error-text']}>{erros.nota}</span>}
          </div>
        </fieldset>

        <div className={feedBcss['form-group']}>
          <label htmlFor="comentario">Comentário *</label>
          <textarea
            id="comentario"
            placeholder="Escreva aqui seu comentário"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            className={erros.comentario ? feedBcss['error'] : ''}
          ></textarea>
          {erros.comentario && <span className={feedBcss['error-text']}>{erros.comentario}</span>}
        </div>

        <div className={feedBcss['submit-button']}>
          <button type="submit" className={feedBcss.botao} disabled={enviando}>
            {enviando ? 'ENVIANDO...' : 'ENVIAR AVALIAÇÃO'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default FeedB
