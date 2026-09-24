import { useEffect, useState } from 'react'

// Usuário logado e favoritos ficam no navegador (localStorage)

const ler = (chave, padrao) => {
  try {
    const valor = localStorage.getItem(chave)
    return valor ? JSON.parse(valor) : padrao
  } catch {
    return padrao
  }
}

const gravar = (chave, valor) => {
  try {
    if (valor === null) localStorage.removeItem(chave)
    else localStorage.setItem(chave, JSON.stringify(valor))
  } catch {
    // navegador sem localStorage: segue sem salvar
  }
  window.dispatchEvent(new Event('marica-storage'))
}

const useArmazenado = (chave, padrao) => {
  const [valor, setValor] = useState(() => ler(chave, padrao))

  useEffect(() => {
    const atualizar = () => setValor(ler(chave, padrao))
    window.addEventListener('marica-storage', atualizar)
    window.addEventListener('storage', atualizar)
    return () => {
      window.removeEventListener('marica-storage', atualizar)
      window.removeEventListener('storage', atualizar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave])

  return valor
}

export const salvarUsuario = (user) => gravar('user', user)
export const sair = () => gravar('user', null)
export const useUsuario = () => useArmazenado('user', null)

export const useFavoritos = () => {
  const favoritos = useArmazenado('favoritos', [])
  const alternar = (slug) => {
    const atual = ler('favoritos', [])
    gravar('favoritos', atual.includes(slug) ? atual.filter((s) => s !== slug) : [...atual, slug])
  }
  return [favoritos, alternar]
}
