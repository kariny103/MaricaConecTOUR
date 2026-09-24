import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/conoscocss.module.css'
import api, { mensagemErro } from '../services/api'

const VAZIO = {
  email: '', senha: '', confirmarSenha: '',
  nome: '', sobrenome: '', cpf: '', rg: '', nascimento: '', genero: '', telefone: '', celular: '',
  cep: '', cidade: 'Maricá', endereco: '', bairro: '', numero: '', complemento: '', referencia: '',
  experiencias: '', formacao: '', cadastur: '',
}

const OBRIGATORIOS = ['email', 'senha', 'confirmarSenha', 'nome', 'sobrenome', 'cpf', 'celular']

const somenteDigitos = (v) => v.replace(/\D/g, '')

const TConosco = () => {
  const [dados, setDados] = useState(VAZIO)
  const [certificado, setCertificado] = useState(null)
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const mudar = (e) => setDados({ ...dados, [e.target.name]: e.target.value })

  // Campo de texto com label; "obrigatorio" coloca o * no rótulo
  const campo = (nome, rotulo, props = {}) => (
    <>
      <label htmlFor={`tc-${nome}`}>{rotulo}{OBRIGATORIOS.includes(nome) && ' *'}</label>
      <input
        id={`tc-${nome}`}
        name={nome}
        type="text"
        placeholder={rotulo}
        value={dados[nome]}
        onChange={mudar}
        {...props}
      />
    </>
  )

  const enviar = async (e) => {
    e.preventDefault()
    setErro('')

    if (OBRIGATORIOS.some((c) => !dados[c].trim())) {
      setErro('Preencha todos os campos marcados com *.')
      return
    }
    if (dados.senha.length < 6) {
      setErro('A senha precisa ter pelo menos 6 caracteres.')
      return
    }
    if (dados.senha !== dados.confirmarSenha) {
      setErro('As senhas não conferem.')
      return
    }
    if (somenteDigitos(dados.cpf).length !== 11) {
      setErro('Informe um CPF com 11 dígitos.')
      return
    }

    const form = new FormData()
    Object.entries(dados).forEach(([chave, valor]) => {
      if (chave !== 'confirmarSenha' && valor.trim()) form.append(chave, valor.trim())
    })
    if (certificado) form.append('certificado', certificado)

    setEnviando(true)
    try {
      await api.post('/candidaturas', form)
      setEnviado(true)
      window.scrollTo(0, 0)
    } catch (error) {
      setErro(mensagemErro(error, 'Erro ao enviar candidatura.'))
    } finally {
      setEnviando(false)
    }
  }

  if (enviado) {
    return (
      <section className={styles['cadastro-section']}>
        <div className={styles.sucesso}>
          <h1>Candidatura enviada!</h1>
          <p>Obrigado, {dados.nome}. Nossa equipe vai analisar seu cadastro e entrar em contato pelo celular ou e-mail.</p>
          <p>Você já pode entrar no site com o e-mail e a senha que cadastrou.</p>
          <Link to="/login" className={styles['btn-enviar']}>Fazer login</Link>
        </div>
      </section>
    )
  }

  return (
    <section className={styles['cadastro-section']}>
      <nav className={styles['breadcrumb']}>
        <Link to="/home">Início</Link> &gt; Trabalhe conosco &gt; Cadastro de guia
      </nav>

      <h1><span className={styles['icon']}>👤</span> SEJA UM GUIA EM MARICÁ</h1>
      <p className={styles.intro}>
        Conhece Maricá como ninguém? Cadastre-se para guiar visitantes pelas praias, trilhas e pelo centro histórico.
        Campos com * são obrigatórios.
      </p>
      <hr className={styles['divider']} />

      <form className={styles['cadastro-form']} onSubmit={enviar} noValidate>
        <div className={styles['form-group']}>
          <h2>Dados de Login</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>{campo('email', 'Email', { type: 'email', autoComplete: 'email' })}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('senha', 'Senha', { type: 'password', autoComplete: 'new-password' })}</div>
            <div className={styles['form-col']}>{campo('confirmarSenha', 'Confirmar Senha', { type: 'password', autoComplete: 'new-password' })}</div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Dados Pessoais</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('nome', 'Nome')}</div>
            <div className={styles['form-col']}>{campo('sobrenome', 'Sobrenome')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('cpf', 'CPF', { inputMode: 'numeric', maxLength: 14 })}</div>
            <div className={styles['form-col']}>{campo('rg', 'RG')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('nascimento', 'Data de Nascimento', { type: 'date' })}</div>
            <div className={styles['form-col']}>
              <label htmlFor="tc-genero">Gênero</label>
              <select id="tc-genero" name="genero" value={dados.genero} onChange={mudar}>
                <option value="">Prefiro não informar</option>
                <option>Feminino</option>
                <option>Masculino</option>
                <option>Outro</option>
              </select>
            </div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('telefone', 'Telefone', { type: 'tel' })}</div>
            <div className={styles['form-col']}>{campo('celular', 'Celular / WhatsApp', { type: 'tel' })}</div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Endereço</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('cep', 'CEP', { inputMode: 'numeric', maxLength: 9 })}</div>
            <div className={styles['form-col']}>{campo('cidade', 'Cidade')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('endereco', 'Endereço')}</div>
            <div className={styles['form-col']}>{campo('bairro', 'Bairro')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('numero', 'Número')}</div>
            <div className={styles['form-col']}>{campo('complemento', 'Complemento')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>{campo('referencia', 'Referência')}</div>
          </div>
        </div>

        <div className={styles['form-group']}>
          <h2>Dados Profissionais</h2>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>
              <label htmlFor="tc-experiencias">Experiências (passeios que conhece, tempo de atuação)</label>
              <textarea
                id="tc-experiencias"
                name="experiencias"
                placeholder="Ex: guio trilhas na Serra da Tiririca há 5 anos"
                value={dados.experiencias}
                onChange={mudar}
              />
            </div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col']}>{campo('formacao', 'Formação')}</div>
            <div className={styles['form-col']}>{campo('cadastur', 'Nº Cadastur (se tiver)')}</div>
          </div>
          <div className={styles['form-row']}>
            <div className={styles['form-col-2']}>
              <label htmlFor="certificado">Certificados (PDF ou imagem, até 5 MB)</label>
              <input
                type="file"
                id="certificado"
                accept=".pdf,image/jpeg,image/png"
                className={styles['file-input']}
                onChange={(e) => setCertificado(e.target.files[0] || null)}
              />
            </div>
          </div>
        </div>

        {erro && <p className={styles.erro} role="alert">{erro}</p>}

        <div className={styles['form-group2']}>
          <button type="submit" className={styles['btn-enviar']} disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar candidatura'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default TConosco
