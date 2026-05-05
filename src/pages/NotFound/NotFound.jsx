import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Numero 404 con animación */}
          <h1 className={styles.numero}>404</h1>

          {/* Mensaje */}
          <span className={styles.eyebrow}>— Página no encontrada</span>
          <h2 className={styles.titulo}>Oops, algo salió mal</h2>
          <p className={styles.desc}>
            La página que estás buscando no existe o fue removida.
            No te preocupes, puedes volver al inicio y seguir explorando.
          </p>

          {/* Botones */}
          <div className={styles.acciones}>
            <Link to="/" className={styles.btnPrimario}>
              Volver a Inicio
            </Link>
            <Link to="/productos?filtro=todos" className={styles.btnSecundario}>
              Ver Productos
            </Link>
          </div>
        </div>

        {/* Decoración */}
        <div className={styles.decoracion}>
          <div className={styles.circulo1} />
          <div className={styles.circulo2} />
        </div>
      </div>
    </div>
  )
}

export default NotFound
