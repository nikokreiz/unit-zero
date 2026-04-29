import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import nombre from '../../assets/nombre.png'
import styles from './Navbar.module.css'

const categorias = ['Gorros', 'Chaquetas', 'Polerones', 'Pantalones', 'Poleras', 'Zapatillas']

const marcas = [
  { nombre: 'Supreme', url: 'https://www.supremenewyork.com' },
  { nombre: 'Stussy', url: 'https://www.stussy.com' },
  { nombre: 'The North Face', url: 'https://www.thenorthface.com' },
  { nombre: 'Carhartt WIP', url: 'https://www.carhartt-wip.com' },
  { nombre: 'Corteiz', url: 'https://www.crtz.xyz' },
  { nombre: 'Nike / Nike SB', url: 'https://www.nike.com' },
  { nombre: 'Adidas / Adidas Originals', url: 'https://www.adidas.com' },
  { nombre: 'New Balance', url: 'https://www.newbalance.com' },
]

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [dropProductos, setDropProductos] = useState(false)
  const [dropMarcas, setDropMarcas] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        <Link to="/" className={styles.logo}>
          <img src={nombre} alt="Unit Zero" className={styles.logoNombre} />
        </Link>

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
                  <a
                    key={marca.nombre}
                    href={marca.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.dropdownItem}
                    onClick={() => setDropMarcas(false)}
                  >
                    {marca.nombre}
                  </a>
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

        <Link to="/carrito" className={styles.cta}>
          Carrito
        </Link>

        <button
          className={`${styles.hamburger} ${menuAbierto ? styles.hamburgerAbierto : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menu"
        >
          <span /><span /><span />
        </button>

      </div>

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
          <a
            key={marca.nombre}
            href={marca.url}
            target="_blank"
            rel="noreferrer"
            className={styles.linkMobile}
            onClick={() => setMenuAbierto(false)}
          >
            — {marca.nombre}
          </a>
        ))}
        <Link to="/contacto" className={styles.linkMobile} onClick={() => setMenuAbierto(false)}>
          Contacto
        </Link>
        <Link to="/carrito" className={styles.linkMobile} onClick={() => setMenuAbierto(false)}>
          Carrito
        </Link>
      </nav>
    </header>
  )
}

export default Navbar