import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import styles from './Checkout.module.css'

function Checkout() {
  const { carrito, totalPrecio, totalItems, vaciarCarrito } = useCarrito()
  const [resumen, setResumen] = useState({ items: 0, precio: 0 })
  const [yaVaciado, setYaVaciado] = useState(false)

  useEffect(() => {
    // Si hay productos en el carrito, guardarlos antes de vaciar
    if (carrito.length > 0 && !yaVaciado) {
      setResumen({
        items: totalItems,
        precio: totalPrecio
      })
      vaciarCarrito()
      setYaVaciado(true)
    }
  }, [carrito.length, totalItems, totalPrecio, vaciarCarrito, yaVaciado])
 
  return (
    <div className={styles.page}>
      <div className={styles.card}>
 
        <div className={styles.iconWrap}>
          <span className={styles.icon}>✓</span>
        </div>
 
        <h1 className={styles.titulo}>Pedido Confirmado</h1>
        <p className={styles.subtitulo}>
          Gracias por tu compra. Tu pedido ha sido recibido y esta siendo procesado.
        </p>
 
        <div className={styles.resumen}>
          <div className={styles.resumenLinea}>
            <span>Productos</span>
            <span>{resumen.items} items</span>
          </div>
          <div className={styles.resumenLinea}>
            <span>Envio</span>
            <span className={styles.gratis}>Gratis</span>
          </div>
          <div className={styles.resumenTotal}>
            <span>Total pagado</span>
            <span>${resumen.precio.toLocaleString('es-CL')}</span>
          </div>
        </div>
 
        <div className={styles.pasos}>
          <div className={styles.paso}>
            <span className={styles.pasoNum}>01</span>
            <span className={styles.pasoTexto}>Pedido recibido</span>
          </div>
          <div className={styles.pasosLinea} />
          <div className={styles.paso}>
            <span className={styles.pasoNum}>02</span>
            <span className={styles.pasoTexto}>En preparacion</span>
          </div>
          <div className={styles.pasosLinea} />
          <div className={styles.paso}>
            <span className={styles.pasoNum}>03</span>
            <span className={styles.pasoTexto}>En camino</span>
          </div>
          <div className={styles.pasosLinea} />
          <div className={styles.paso}>
            <span className={styles.pasoNum}>04</span>
            <span className={styles.pasoTexto}>Entregado</span>
          </div>
        </div>
 
        <Link to="/" className={styles.btn}>
          Volver al Inicio
        </Link>
 
      </div>
    </div>
  )
}
 
export default Checkout