import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import nombre from '../../assets/nombre.png'
import styles from './Navbar.module.css'
import { useCarrito } from '../../context/CarritoContext'

const categorias = ['Gorros', 'Chaquetas', 'Polerones', 'Pantalones', 'Poleras', 'Zapatillas']

const marcas = [
  { nombre: 'Supreme', slug: 'supreme' },
  { nombre: 'Stussy', slug: 'stussy' },
  { nombre: 'The North Face', slug: 'the-north-face' },
  { nombre: 'Carhartt WIP', slug: 'carhartt-wip' },
  { nombre: 'Corteiz', slug: 'corteiz' },
  { nombre: 'Nike / Nike SB', slug: 'nike-nike-sb' },
  { nombre: 'Adidas / Adidas Originals', slug: 'adidas-adidas-originals' },
  { nombre: 'New Balance', slug: 'new-balance' },
]

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [dropProductos, setDropProductos] = useState(false)
  const [dropMarcas, setDropMarcas] = useState(false)
  const { totalItems } = useCarrito()

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <Link to="/" className={styles.logo}>
          <img src={nombre} alt="Unit Zero" className={styles.logoNombre} />
        </Link>

        {/* Nav desktop */}
        <nav className={styles.nav}>
          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setDropProductos(true)}
            onMouseLeave={() => setDropProductos(false)}
          >
            <button className={styles.dropdownBtn}>
              Productos <span className={styles.flecha}>▾</span>
            </button>
            {dropProductos && (
              <div className={styles.dropdown}>
                {categorias.map((cat) => (
                  <Link
                    key={cat}
                    to={`/productos/${cat.toLowerCase()}`}
                    className={styles.dropdownItem}
                    onClick={() => setDropProductos(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setDropMarcas(true)}
            onMouseLeave={() => setDropMarcas(false)}
          >
            <button className={styles.dropdownBtn}>
              Marcas <span className={styles.flecha}>▾</span>
            </button>
            {dropMarcas && (
              <div className={styles.dropdown}>
                {marcas.map((marca) => (
                  <Link
                    key={marca.slug}
                    to={`/marcas/${marca.slug}`}
                    className={styles.dropdownItem}
                    onClick={() => setDropMarcas(false)}
                  >
                    {marca.nombre}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contacto"
            className={({ isActive }) => isActive ? styles.linkActivo : styles.link}
          >
            Contacto
          </NavLink>
        </nav>

        {/* Lado derecho: carrito desktop + carrito mobile + hamburger */}
        <div className={styles.acciones}>

          {/* Carrito desktop */}
          <Link to="/carrito" className={styles.cta}>
            Carrito
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>

          {/* Carrito mobile - solo icono */}
          <Link to="/carrito" className={styles.ctaMobile}>
            🛒
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuAbierto ? styles.hamburgerAbierto : ''}`}
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menu"
          >
            <span /><span /><span />
          </button>

        </div>

      </div>

      {/* Menu mobile */}
      <nav className={`${styles.menuMobile} ${menuAbierto ? styles.menuMobileAbierto : ''}`}>

        <p className={styles.mobileSeparador}>Productos</p>
        {categorias.map((cat) => (
          <Link
            key={cat}
            to={`/productos/${cat.toLowerCase()}`}
            className={styles.linkMobile}
            onClick={() => setMenuAbierto(false)}
          >
            — {cat}
          </Link>
        ))}

        <p className={styles.mobileSeparador}>Marcas</p>
        {marcas.map((marca) => (
          <Link
            key={marca.slug}
            to={`/marcas/${marca.slug}`}
            className={styles.linkMobile}
            onClick={() => setMenuAbierto(false)}
          >
            — {marca.nombre}
          </Link>
        ))}

        <p className={styles.mobileSeparador}>Menu</p>
        <Link
          to="/contacto"
          className={styles.linkMobile}
          onClick={() => setMenuAbierto(false)}
        >
          Contacto
        </Link>

      </nav>
    </header>
  )
}

export default Navbar