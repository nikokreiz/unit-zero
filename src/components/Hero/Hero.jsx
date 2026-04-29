import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>

      {/* Lado izquierdo - imagen */}
      <div className={styles.imagenWrap}>
        <img
          src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=700&q=80"
          alt="Modelo con ropa streetwear"
          className={styles.imagen}
        />
        <span className={styles.tag}>AW 2025</span>
      </div>

      {/* Lado derecho - texto */}
      <div className={styles.contenido}>
        <span className={styles.eyebrow}>— Streetwear Editorial</span>
        <h1 className={styles.titulo}>
          Define tu
          <br />
          <em>propio estilo.</em>
        </h1>
        <p className={styles.subtitulo}>
          Ropa que habla por ti. Piezas pensadas para 
          la calle, diseñadas con criterio. Sin reglas, 
          solo actitud.
        </p>
        <div className={styles.acciones}>
          <Link to="/#coleccion" className={styles.btnPrimario}>
            Ver Colección
          </Link>
          <Link to="/#nosotros" className={styles.btnSecundario}>
            Nuestra Historia
          </Link>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumero}>200+</span>
            <span className={styles.statLabel}>Prendas</span>
          </div>
          <div className={styles.separador} />
          <div className={styles.stat}>
            <span className={styles.statNumero}>15+</span>
            <span className={styles.statLabel}>Marcas</span>
          </div>
          <div className={styles.separador} />
          <div className={styles.stat}>
            <span className={styles.statNumero}>3K+</span>
            <span className={styles.statLabel}>Clientes</span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero