import { useNavigate, Link } from 'react-router-dom'
import { useCarrito } from '../../context/CarritoContext'
import styles from './Carrito.module.css'

function Carrito() {
  const { carrito, eliminarDelCarrito, cambiarCantidad, totalItems, totalPrecio } = useCarrito()
  const navigate = useNavigate()

  const handleFinalizarCompra = () => {
    // Guardar en localStorage como respaldo
    localStorage.setItem('pedidoTemp', JSON.stringify({
      items: totalItems,
      precio: totalPrecio
    }))

    // Pasar datos a través de location.state
    navigate('/checkout', {
      state: {
        items: totalItems,
        precio: totalPrecio
      }
    })
  }

  if (carrito.length === 0) {
    return (
      <div className={styles.vacio}>
        <span className={styles.vaciоIcon}>🛒</span>
        <h2 className={styles.vacioTitulo}>Tu carrito esta vacio</h2>
        <p className={styles.vacioTexto}>Agrega productos desde el catalogo</p>
        <Link to="/productos/gorros" className={styles.vacioBtn}>
          Ver Productos
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h1 className={styles.titulo}>Carrito</h1>
          <span className={styles.cantidad}>{totalItems} items</span>
        </div>

        <div className={styles.layout}>

          {/* Lista de productos */}
          <div className={styles.lista}>
            {carrito.map((item) => (
              <div key={item.id} className={styles.item}>
                <div className={styles.itemImagenWrap}>
                  <img src={item.imagen} alt={item.nombre} className={styles.itemImagen} />
                </div>

                <div className={styles.itemInfo}>
                  <span className={styles.itemMarca}>{item.marca}</span>
                  <h3 className={styles.itemNombre}>{item.nombre}</h3>
                  <span className={styles.itemCategoria}>{item.categoria}</span>
                </div>

                <div className={styles.itemAcciones}>
                  <div className={styles.cantidad2}>
                    <button
                      className={styles.cantBtn}
                      onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                    >
                      −
                    </button>
                    <span className={styles.cantNum}>{item.cantidad}</span>
                    <button
                      className={styles.cantBtn}
                      onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                    >
                      +
                    </button>
                  </div>
                  <span className={styles.itemPrecio}>
                    ${(item.precio * item.cantidad).toLocaleString('es-CL')}
                  </span>
                  <button
                    className={styles.eliminar}
                    onClick={() => eliminarDelCarrito(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen */}
          <div className={styles.resumen}>
            <h2 className={styles.resumenTitulo}>Resumen</h2>

            <div className={styles.resumenLinea}>
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrecio.toLocaleString('es-CL')}</span>
            </div>
            <div className={styles.resumenLinea}>
              <span>Envio</span>
              <span className={styles.envioGratis}>Gratis</span>
            </div>

            <div className={styles.resumenTotal}>
              <span>Total</span>
              <span>${totalPrecio.toLocaleString('es-CL')}</span>
            </div>

            <button onClick={handleFinalizarCompra} className={styles.btnComprar}>
              Finalizar Compra
            </button>

            <Link to="/" className={styles.btnSeguir}>
              Seguir Comprando
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Carrito
