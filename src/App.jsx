import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productos from './pages/Productos/Productos'
import Marca from './pages/Marca/Marca'
import Carrito from './pages/Carrito/Carrito'
import Checkout from './pages/Checkout/Checkout'
import Contacto from './pages/Contacto/Contacto'
import NotFound from './pages/NotFound/NotFound'

function App() {
  const devInfo = {
    nombre: 'Nicolás Patricio Rojas Soto',
    carrera: 'Ingenieria Civil Informatica',
    ciudad: 'Talca, Chile',
    github: 'https://github.com/nikokreiz',
    repositorio: 'https://github.com/nikokreiz/unit-zero',
  }

  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:categoria" element={<Productos />} />
          <Route path="/marcas/:slug" element={<Marca />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contacto" element={<Contacto {...devInfo} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App