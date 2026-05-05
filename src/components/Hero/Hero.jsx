import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { productosNuevos, marcas } from '../../data/dummy'
import styles from './Hero.module.css'
import robot from '../../assets/robot.png'

function Hero() {
  const navigate = useNavigate()
  const [indiceActual, setIndiceActual] = useState(0)

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceActual((prev) => (prev + 1) % productosNuevos.length)
    }, 3000)
    return () => clearInterval(intervalo)
  }, [])

  const productoActual = productosNuevos[indiceActual]

  return (
    <section className={styles.hero}>

<div className={styles.contenido}>
  <span className={styles.eyebrow}>— Vida Streetwear</span>

  <div className={styles.contenidoFila}>
    {/* Robot */}
    <img src={robot} alt="Unit Zero mascot" className={styles.robot} />

    {/* Texto */}
    <div className={styles.textos}>
      <h1 className={styles.titulo}>
        Define tu
        <br />
        <em>propio estilo.</em>
      </h1>

      <div className={styles.acciones}>
        <button onClick={() => navigate('/productos?filtro=todos')} className={styles.btnPrimario}>Ver Coleccion</button>
        <button onClick={() => navigate('/productos?filtro=nuevo')} className={styles.btnSecundario}>Novedades</button>
      </div>
    </div>
  </div>

  <div className={styles.marcasWrap}>
    <span className={styles.marcasLabel}>Nuestras marcas</span>
    <div className={styles.marcasGrid}>
      {marcas.map((marca) => (
        marca.logo && (
          <a key={marca.id} href={marca.url} target="_blank" rel="noreferrer" className={styles.marcaItem}>
            <img src={marca.logo} alt={marca.nombre} className={styles.marcaLogo} />
          </a>
        )
      ))}
    </div>
  </div>
</div>

      <div className={styles.galeria}>
        <span className={styles.tag}>NEW IN</span>

        <div className={styles.imagenWrap}>
          {productosNuevos.map((producto, index) => (
            <img
              key={producto.id}
              src={producto.imagen}
              alt={producto.nombre}
              className={`${styles.imagen} ${index === indiceActual ? styles.imagenActiva : ''}`}
            />
          ))}
        </div>

        <div className={styles.productoInfo}>
          <span className={styles.productoMarca}>{productoActual.marca}</span>
          <span className={styles.productoNombre}>{productoActual.nombre}</span>
          <span className={styles.productoPrecio}>
            ${productoActual.precio.toLocaleString('es-CL')}
          </span>
        </div>

        <div className={styles.dots}>
          {productosNuevos.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === indiceActual ? styles.dotActivo : ''}`}
              onClick={() => setIndiceActual(index)}
              aria-label={`Producto ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero