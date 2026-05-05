import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { productos } from '../../data/dummy'
import Card from '../../components/CardGrid/Card'
import styles from './Productos.module.css'

const marcasFiltro = ['Todas', 'Supreme', 'Stussy', 'The North Face', 'Carhartt WIP', 'Corteiz', 'Nike / Nike SB', 'Adidas / Adidas Originals', 'New Balance']

// Función para mezclar aleatoriamente
const mezclarAleatoriamente = (arr) => {
  const copia = [...arr]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

function Productos() {
  const { categoria } = useParams()
  const [searchParams] = useSearchParams()
  const [marcaActiva, setMarcaActiva] = useState('Todas')

  const filtro = searchParams.get('filtro')

  let productosFiltrados = []
  let titulo = 'Productos'

  if (filtro === 'todos') {
    // Mostrar todos los productos aleatoriamente
    productosFiltrados = mezclarAleatoriamente(
      marcaActiva === 'Todas'
        ? productos
        : productos.filter((p) => p.marca === marcaActiva)
    )
    titulo = 'Todos los productos'
  } else if (filtro === 'nuevo') {
    // Mostrar solo productos nuevos
    productosFiltrados = productos.filter((p) => {
      const esNuevo = p.nuevo === true
      const coincideMarca = marcaActiva === 'Todas' || p.marca === marcaActiva
      return esNuevo && coincideMarca
    })
    titulo = 'Novedades'
  } else if (categoria) {
    // Filtrar por categoría (comportamiento anterior)
    productosFiltrados = productos.filter((p) => {
      const coincideCategoria = p.categoria === categoria
      const coincideMarca = marcaActiva === 'Todas' || p.marca === marcaActiva
      return coincideCategoria && coincideMarca
    })
    titulo = categoria.charAt(0).toUpperCase() + categoria.slice(1)
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.header}>
          <h1 className={styles.titulo}>{titulo}</h1>
          <span className={styles.cantidad}>{productosFiltrados.length} productos</span>
        </div>

        <div className={styles.filtros}>
          {marcasFiltro.map((marca) => (
            <button
              key={marca}
              className={`${styles.filtro} ${marcaActiva === marca ? styles.filtroActivo : ''}`}
              onClick={() => setMarcaActiva(marca)}
            >
              {marca}
            </button>
          ))}
        </div>

        {productosFiltrados.length > 0 ? (
          <div className={styles.grid}>
            {productosFiltrados.map((producto) => (
              <Card key={producto.id} {...producto} />
            ))}
          </div>
        ) : (
          <div className={styles.vacio}>
            <span>😕</span>
            <p>No hay productos disponibles con los filtros seleccionados</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Productos
