import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const categorias = [
  'Gorros',
  'Chaquetas',
  'Polerones',
  'Pantalones',
  'Poleras',
  'Zapatillas',
]

const marcas = [
  'Supreme',
  'Stüssy',
  'The North Face',
  'Carhartt WIP',
  'Corteiz',
  'Nike / Nike SB',
  'Adidas / Adidas Originals',
  'New Balance',
]

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [dropdownProductos, setDropdownProductos] = useState(false)
  const [dropdownMarcas, setDropdownMarcas] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          NEGOZIO <em>di</em> MODA
        </Link>

        {/* Navegación desktop */}
        <nav className={styles.nav}>

          {/* Dropdown Productos */}
          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setDropdownProductos(true)}
            onMouseLeave={() => setDropdownProductos(false)}
          >
            <button className={styles.dropdownBtn}>
              Productos <span className={styles.flecha}>▾</span>
            </button>
            {dropdownProductos && (
              <div className={styles.dropdown}>
                {categorias.map((cat) => (
                  <Link
                    key={cat}
                    to={`/productos/${cat.toLowerCase()}`}
                    className={styles.dropdownItem}
                    onClick={() => setDropdownProductos(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Dropdown Marcas */}
          <div
            className={styles.dropdownWrap}
            onMouseEnter={() => setDropdownMarcas(true)}
            onMouseLeave={() => setDropdownMarcas(false)}
          >
            <button className={styles.dropdownBtn}>
              Marcas <span className={styles.flecha}>▾</span>
            </button>
            {dropdownMarcas && (
              <div className={styles.dropdown}>
                {marcas.map((marca) => (
                  <Link
                    key={marca}
                    to={`/marcas/${marca.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '')}`}
                    className={styles.dropdownItem}
                    onClick={() => setDropdownMarcas(false)}
                  >
                    {marca}
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

        {/* Carrito */}
        <Link to="/carrito" className={styles.cta}>
          🛒 Carrito
        </Link>

        {/* Hamburguesa */}
        <button
          className={`${styles.hamburger} ${menuAbierto ? styles.hamburgerAbierto : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <span /><span /><span />
        </button>

      </div>

      {/* Menú mobile */}
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
            key={marca}
            to={`/marcas/${marca.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '')}`}
            className={styles.linkMobile}
            onClick={() => setMenuAbierto(false)}
          >
            — {marca}
          </Link>
        ))}
        <Link to="/contacto" className={styles.linkMobile} onClick={() => setMenuAbierto(false)}>
          Contacto
        </Link>
        <Link to="/carrito" className={styles.linkMobile} onClick={() => setMenuAbierto(false)}>
          🛒 Carrito
        </Link>
      </nav>
    </header>
  )
}

export default Navbar