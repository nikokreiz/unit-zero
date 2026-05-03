import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productos, marcas } from '../../data/dummy'
import Card from '../../components/CardGrid/Card'
import styles from './Marca.module.css'

const categoriasFiltro = ['Todas', 'Gorros', 'Chaquetas', 'Polerones', 'Pantalones', 'Poleras', 'Zapatillas']

function Marca() {
  const { slug } = useParams()
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')

  const marcaInfo = marcas.find((m) => m.slug === slug)

  const productosFiltrados = productos.filter((p) => {
    const slugMarca = p.marca.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '').replace(/[^a-z0-9-]/g, '')
    const coincideMarca = slugMarca === slug || slug.includes(slugMarca.split('-')[0])
    const coincideCategoria = categoriaActiva === 'Todas' || p.categoria === categoriaActiva.toLowerCase()
    return coincideMarca && coincideCategoria
  })

  const nombreMarca = marcaInfo ? marcaInfo.nombre : slug

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        <div className={styles.header}>
          {marcaInfo?.logo && (
            <div className={styles.logoWrap}>
              <img src={marcaInfo.logo} alt={nombreMarca} className={styles.logo} />
            </div>
          )}
          <div className={styles.headerInfo}>
            <h1 className={styles.titulo}>{nombreMarca}</h1>
            <span className={styles.cantidad}>{productosFiltrados.length} productos</span>
          </div>
        </div>

        <div className={styles.filtros}>
          {categoriasFiltro.map((cat) => (
            <button
              key={cat}
              className={`${styles.filtro} ${categoriaActiva === cat ? styles.filtroActivo : ''}`}
              onClick={() => setCategoriaActiva(cat)}
            >
              {cat}
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
            <p>No hay productos de esta categoria para {nombreMarca}</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Marca
