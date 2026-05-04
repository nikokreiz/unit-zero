import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Productos from './pages/Productos/Productos'
import Marca from './pages/Marca/Marca'
import Carrito from './pages/Carrito/Carrito'
import Checkout from './pages/Checkout/Checkout'

function App() {
  return (
    <CarritoProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/productos/:categoria" element={<Productos />} />
          <Route path="/marcas/:slug" element={<Marca />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  )
}

export default App