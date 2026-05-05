import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import styles from './Checkout.module.css'

function Checkout() {
  const { vaciarCarrito } = useCarrito()
  const location = useLocation()
  const [resumen, setResumen] = useState({ items: 0, precio: 0 })

  useEffect(() => {
    let datosCarrito = null

    // Primero intentar con location.state
    if (location.state?.items !== undefined && location.state?.precio !== undefined) {
      datosCarrito = {
        items: location.state.items,
        precio: location.state.precio
      }
    }
    // Si no hay location.state, intentar localStorage (respaldo si se recargó)
    else {
      const datosTempStr = localStorage.getItem('pedidoTemp')
      if (datosTempStr) {
        try {
          datosCarrito = JSON.parse(datosTempStr)
        } catch (e) {
          console.error('Error al parsear localStorage:', e)
        }
      }
    }

    // Si encontramos datos, usarlos
    if (datosCarrito && datosCarrito.items > 0) {
      setResumen({
        items: datosCarrito.items,
        precio: datosCarrito.precio
      })
      vaciarCarrito()
      // Limpiar localStorage después de usar
      localStorage.removeItem('pedidoTemp')
    }
  }, [location.state, vaciarCarrito])
 
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