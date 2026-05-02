import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../../data/dummy'
import Card from '../../components/CardGrid/Card'
import styles from './Productos.module.css'

const marcasFiltro = ['Todas', 'Supreme', 'Stussy', 'The North Face', 'Carhartt WIP', 'Corteiz', 'Nike / Nike SB', 'Adidas / Adidas Originals', 'New Balance']

function Productos() {
  const { categoria } = useParams()
  const [marcaActiva, setMarcaActiva] = useState('Todas')

  const productosFiltrados = productos.filter((p) => {
    const coincideCategoria = p.categoria === categoria
    const coincideMarca = marcaActiva === 'Todas' || p.marca === marcaActiva
    return coincideCategoria && coincideMarca
  })

  const titulo = categoria.charAt(0).toUpperCase() + categoria.slice(1)

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
            <p>No hay productos de esta marca en {titulo}</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Productos
