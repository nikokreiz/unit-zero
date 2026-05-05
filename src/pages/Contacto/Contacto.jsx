import styles from './Contacto.module.css'

const MAPS_URL = 'https://www.google.com/maps/place/Facultad+de+Ciencias+de+la+Ingenier%C3%ADa/@-35.4351046,-71.6182518,18.85z/data=!4m15!1m8!3m7!1s0x9665c6a2ac07d07d:0x265657feafdac8b8!2sTalca,+Maule!3b1!8m2!3d-35.4231882!4d-71.6496958!16zL20vMDUzNHFo!3m5!1s0x9665c722dfe00fb1:0xe2cef340c74abf9f!8m2!3d-35.4349339!4d-71.6174805!16s%2Fg%2F11vd6pvb3d?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D'

// Datos del desarrollador pasados como props
function Contacto({
  nombre,
  carrera,
  ciudad,
  github,
  repositorio,
}) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* ---- Perfil desarrollador ---- */}
        <section className={styles.perfil}>
          <div className={styles.perfilHeader}>
            <span className={styles.eyebrow}>— Desarrollador</span>
            <h1 className={styles.nombre}>{nombre}</h1>
          </div>

          <div className={styles.perfilDatos}>
            <div className={styles.dato}>
              <span className={styles.datoIcono}>🎓</span>
              <div>
                <span className={styles.datoLabel}>Carrera</span>
                <a
                  href="https://www.eici.ucm.cl/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.datoLink}
                >
                  {carrera}
                </a>
              </div>
            </div>

            <div className={styles.dato}>
              <span className={styles.datoIcono}>📍</span>
              <div>
                <span className={styles.datoLabel}>Ciudad</span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.datoLink}
                >
                  {ciudad}
                </a>
              </div>
            </div>

            <div className={styles.dato}>
              <span className={styles.datoIcono}>⌥</span>
              <div>
                <span className={styles.datoLabel}>GitHub</span>
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.datoLink}
                >
                  {github.replace('https://', '')}
                </a>
              </div>
            </div>

            <div className={styles.dato}>
              <span className={styles.datoIcono}>📁</span>
              <div>
                <span className={styles.datoLabel}>Repositorio</span>
                <a
                  href={repositorio}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.datoLink}
                >
                  {repositorio.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>

          <div className={styles.btns}>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={styles.btnPrimario}
            >
              Ver Perfil GitHub
            </a>
            <a
              href={repositorio}
              target="_blank"
              rel="noreferrer"
              className={styles.btnSecundario}
            >
              Ver Repositorio
            </a>
          </div>
        </section>

        {/* ---- Divider ---- */}
        <div className={styles.divider} />

        {/* ---- Contacto tienda ---- */}
        <section className={styles.tienda}>
          <span className={styles.eyebrow}>— Contacto</span>
          <h2 className={styles.tiendaTitulo}>Unit Zero</h2>
          <p className={styles.tiendaDesc}>
            Para consultas sobre productos, pedidos o colaboraciones,
            contactanos por nuestras redes o directamente al correo.
          </p>

          <div className={styles.tiendaDatos}>
            <div className={styles.dato}>
              <span className={styles.datoIcono}>📧</span>
              <div>
                <span className={styles.datoLabel}>Email</span>
                <span className={styles.datoValor}>contacto@unitzero.cl</span>
              </div>
            </div>

            <div className={styles.dato}>
              <span className={styles.datoIcono}>📱</span>
              <div>
                <span className={styles.datoLabel}>Instagram</span>
                <span className={styles.datoValor}>@unitzero.store</span>
              </div>
            </div>

            <div className={styles.dato}>
              <span className={styles.datoIcono}>📍</span>
              <div>
                <span className={styles.datoLabel}>Ubicacion</span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.datoLink}
                >
                  Talca, Chile
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Contacto