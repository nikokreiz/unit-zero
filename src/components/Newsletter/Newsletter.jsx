import { useState } from 'react'
import styles from './Newsletter.module.css'

function Newsletter({ titulo, descripcion, placeholder, btnTexto }) {
  const [email, setEmail] = useState('')
  const [estado, setEstado] = useState('idle') // idle, loading, success, error
  const [mensaje, setMensaje] = useState('')

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar email
    if (!email.trim()) {
      setEstado('error')
      setMensaje('Por favor ingresa un email')
      return
    }

    if (!validarEmail(email)) {
      setEstado('error')
      setMensaje('Email inválido')
      return
    }

    // Simular envío
    setEstado('loading')
    setTimeout(() => {
      setEstado('success')
      setMensaje('¡Gracias! Revisa tu email para confirmar la suscripción.')
      setEmail('')

      // Volver a estado idle después de 4 segundos
      setTimeout(() => {
        setEstado('idle')
        setMensaje('')
      }, 4000)
    }, 800)
  }

  return (
    <section className={styles.newsletter}>
      <div className={styles.container}>

        <div className={styles.contenido}>
          <span className={styles.eyebrow}>— Mantente actualizado</span>
          <h2 className={styles.titulo}>{titulo}</h2>
          <p className={styles.descripcion}>{descripcion}</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.formulario}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              className={styles.input}
              disabled={estado === 'loading'}
            />
            <button
              type="submit"
              className={styles.boton}
              disabled={estado === 'loading'}
            >
              {estado === 'loading' ? 'Enviando...' : btnTexto}
            </button>
          </div>

          {/* Mensaje de estado */}
          {mensaje && (
            <p className={`${styles.mensaje} ${styles[estado]}`}>
              {estado === 'success' ? '✓' : estado === 'error' ? '✕' : '→'} {mensaje}
            </p>
          )}
        </form>

      </div>

      {/* Decoración */}
      <div className={styles.decoracion} />
    </section>
  )
}

export default Newsletter
