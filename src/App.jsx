import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Inicio - contenido próximamente</div>} />
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App