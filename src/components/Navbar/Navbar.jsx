import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>

        {/* Logo */}
        <Link to="/" className={styles.logo}>
          NEGOZIO <em>di</em> MODA
        </Link>

        {/* Navegación desktop */}
        <nav className={styles.nav}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.linkActivo : styles.link}>
            Inicio
          </NavLink>
          <NavLink to="/#coleccion" className={styles.link}>Colección</NavLink>
          <NavLink to="/#nosotros" className={styles.link}>Nosotros</NavLink>
          <NavLink to="/desarrollador" className={({ isActive }) => isActive ? styles.linkActivo : styles.link}>
            Desarrollador
          </NavLink>
        </nav>

        {/* Botón CTA */}
        <Link to="/#coleccion" className={styles.cta}>
          Ver Colección
        </Link>

        {/* Botón hamburguesa (mobile) */}
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
        <NavLink to="/" end onClick={() => setMenuAbierto(false)} className={styles.linkMobile}>Inicio</NavLink>
        <NavLink to="/#coleccion" onClick={() => setMenuAbierto(false)} className={styles.linkMobile}>Colección</NavLink>
        <NavLink to="/#nosotros" onClick={() => setMenuAbierto(false)} className={styles.linkMobile}>Nosotros</NavLink>
        <NavLink to="/desarrollador" onClick={() => setMenuAbierto(false)} className={styles.linkMobile}>Desarrollador</NavLink>
      </nav>
    </header>
  )
}

export default Navbar