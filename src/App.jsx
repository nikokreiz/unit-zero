import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productos from './pages/Productos/Productos'
import Marca from './pages/Marca/Marca'

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/productos/:categoria" element={<Productos />} />
          <Route path="/marcas/:slug" element={<Marca />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App