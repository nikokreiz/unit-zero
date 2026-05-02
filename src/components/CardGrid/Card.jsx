import { useCarrito } from '../../context/CarritoContext'
import styles from './Card.module.css'

function Card({ id, nombre, marca, categoria, precio, imagen, nuevo }) {
  const { agregarAlCarrito } = useCarrito()

  const handleAgregar = () => {
    agregarAlCarrito({ id, nombre, marca, categoria, precio, imagen })
  }

  return (
    <article className={styles.card}>
      <div className={styles.imagenWrap}>
        <img src={imagen} alt={nombre} className={styles.imagen} />
        {nuevo && <span className={styles.badgeNuevo}>NEW</span>}
        <span className={styles.badgeCategoria}>{categoria}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.marca}>{marca}</span>
        <h3 className={styles.nombre}>{nombre}</h3>
        <div className={styles.footer}>
          <span className={styles.precio}>
            ${precio.toLocaleString('es-CL')}
          </span>
          <button className={styles.btn} onClick={handleAgregar}>
            + Agregar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
