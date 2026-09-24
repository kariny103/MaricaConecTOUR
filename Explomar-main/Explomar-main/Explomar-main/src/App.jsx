import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Inicio from './pages/Inicio.jsx'
import Guias from './pages/Guias.jsx'
import TrabalheConosco from './pages/TrabalheConosco.jsx'
import Destinos from './pages/Destinos.jsx'
import DestinoDetalhe from './pages/DestinoDetalhe.jsx'
import PerfilProficional from './pages/PerfilProficional.jsx'
import FeedBack from './pages/FeedBack.jsx'
import Login from './pages/Login.jsx'
import Cadastro from './pages/Cadastro.jsx'
import './index.css'

// Volta ao topo ao trocar de página (mas respeita links com #âncora)
function RolarParaTopo() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <RolarParaTopo />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destinos" element={<Destinos />} />
        <Route path="/destinos/:slug" element={<DestinoDetalhe />} />
        <Route path="/guias" element={<Guias />} />
        <Route path="/guias/:id" element={<PerfilProficional />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Endereços antigos */}
        <Route path="/itaipuacu" element={<Navigate to="/destinos/praia-de-itaipuacu" replace />} />
        <Route path="/perfil-proficional" element={<Navigate to="/guias/1" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
