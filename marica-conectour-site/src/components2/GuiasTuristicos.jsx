import React, { useState } from 'react';
import guiascss from '../styles/guiasturisticos.module.css';
import { Link } from 'react-router-dom'
import { REGIOES, formatarPreco } from '../data/destinos'
import { DIAS_SEMANA, TIPOS_PASSEIO, guias, iniciais } from '../data/guias'

const FILTROS_INICIAIS = {
  busca: '',
  sexo: '',
  experiencia: '',
  regiao: '',
  tipo: '',
  data: '',
  nota: '',
  precoMin: '',
  precoMax: '',
}

const GuiasTuristicos = () => {
  const [f, setF] = useState(FILTROS_INICIAIS)
  const mudar = (campo) => (e) => setF({ ...f, [campo]: e.target.value })

  // "2026-09-24" -> dia da semana, sem erro de fuso horário
  const diaDaData = f.data ? new Date(`${f.data}T12:00:00`).getDay() : null
  const termo = f.busca.trim().toLowerCase()

  const resultado = guias.filter((g) =>
    (!termo || `${g.nome} ${g.especialidade}`.toLowerCase().includes(termo)) &&
    (!f.sexo || g.sexo === f.sexo) &&
    (!f.experiencia || g.anosExperiencia >= Number(f.experiencia)) &&
    (!f.regiao || g.regiao === f.regiao) &&
    (!f.tipo || g.tipos.includes(f.tipo)) &&
    (diaDaData === null || g.dias.includes(diaDaData)) &&
    (!f.nota || g.nota >= Number(f.nota)) &&
    (!f.precoMin || g.preco >= Number(f.precoMin)) &&
    (!f.precoMax || g.preco <= Number(f.precoMax))
  )

  return (
    <main className={guiascss.container3}>
      <div className={guiascss['breadcrumb']}>
        <Link to="/home">Início</Link> &gt; Guias turísticos
      </div>

      <aside className={guiascss['filtros']}>
        <h2><span className={guiascss['icon']}>⚙️</span> FILTROS</h2>

        <div className={guiascss['filtro-item']}>
          <strong>SEXO:</strong>
          <label><input type="radio" name="sexo" value="" checked={f.sexo === ''} onChange={mudar('sexo')} /> TODOS</label>
          <label><input type="radio" name="sexo" value="Masculino" checked={f.sexo === 'Masculino'} onChange={mudar('sexo')} /> MASCULINO</label>
          <label><input type="radio" name="sexo" value="Feminino" checked={f.sexo === 'Feminino'} onChange={mudar('sexo')} /> FEMININO</label>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>EXPERIÊNCIA:</strong>
          <select value={f.experiencia} onChange={mudar('experiencia')}>
            <option value="">Qualquer</option>
            <option value="5">5 anos ou mais</option>
            <option value="10">10 anos ou mais</option>
            <option value="15">15 anos ou mais</option>
          </select>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>LOCALIZAÇÃO / REGIÃO:</strong>
          <select value={f.regiao} onChange={mudar('regiao')}>
            <option value="">Todas</option>
            {REGIOES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>TIPO DE PASSEIO:</strong>
          <select value={f.tipo} onChange={mudar('tipo')}>
            <option value="">Todos</option>
            {TIPOS_PASSEIO.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>DISPONIBILIDADE:</strong>
          <input type="date" value={f.data} onChange={mudar('data')} />
          {diaDaData !== null && (
            <span className={guiascss['sub-label']}>Guias que trabalham {DIAS_SEMANA[diaDaData].toLowerCase()}</span>
          )}
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>AVALIAÇÃO:</strong>
          <select value={f.nota} onChange={mudar('nota')}>
            <option value="">Qualquer nota</option>
            <option value="4.5">★ 4,5 ou mais</option>
            <option value="4.8">★ 4,8 ou mais</option>
          </select>
        </div>

        <div className={guiascss['filtro-item']}>
          <strong>FAIXA DE PREÇO (R$):</strong>
          <div className={guiascss['faixa-preco']}>
            <input type="number" min="0" placeholder="De" value={f.precoMin} onChange={mudar('precoMin')} className={guiascss['preco-input']} />
            até
            <input type="number" min="0" placeholder="Até" value={f.precoMax} onChange={mudar('precoMax')} className={guiascss['preco-input']} />
          </div>
        </div>

        <button type="button" className={guiascss['limpar']} onClick={() => setF(FILTROS_INICIAIS)}>
          Limpar filtros
        </button>
      </aside>

      <section className={guiascss['conteudo']}>
        <div className={guiascss['busca']}>
          <input type="text" placeholder="BUSCAR GUIA" value={f.busca} onChange={mudar('busca')} aria-label="Buscar guia pelo nome" />
          <button type="button" aria-label="Buscar">🔍</button>
        </div>

        <div className={guiascss['cards']}>
          {resultado.length === 0 && (
            <p className={guiascss['vazio']}>Nenhum guia encontrado com esses filtros.</p>
          )}
          {resultado.map((g) => (
            <div className={guiascss['card']} key={g.id}>
              <div className={guiascss['avatar']}>{iniciais(g.nome)}</div>
              <div className={guiascss['info']}>
                <div className={guiascss['nome']}>{g.nome}</div>
                <div><strong>IDADE:</strong> {g.idade} anos</div>
                <div><strong>EXPERIÊNCIA:</strong> {g.anosExperiencia} anos · {g.especialidade}</div>
                <div><strong>REGIÃO:</strong> {g.regiao}</div>
                <div><strong>AVALIAÇÃO:</strong> ★ {g.nota.toFixed(1)} · <strong>A PARTIR DE:</strong> {formatarPreco(g.preco)}</div>
                <Link to={`/guias/${g.id}`} className={guiascss['ver-mais']}>VER MAIS</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GuiasTuristicos;
