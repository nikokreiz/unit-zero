# UNIT ZERO - E-commerce Streetwear

Sitio web estatico desarrollado con React + Vite, orientado a promocionar productos de vestuario (streetwear) y ofrecer una experiencia responsive para desktop y mobile.

## Historia de usuario

Como cliente y dueno de una empresa de vestuario,
quiero contar con un sitio web estatico en version para PC y telefono,
para promocionar mis productos y dar a conocer la propuesta de mi marca.

## Tecnologias utilizadas

- React
- Vite
- React Router DOM
- CSS Modules
- Google Fonts

## Funcionalidades principales

- Navegación por rutas con React Router (`/`, `/productos`, `/productos/:categoria`, `/marcas/:slug`, `/carrito`, `/checkout`, `/contacto`, y manejo de 404)
- **7 rutas funcionales** con validación de rutas inválidas
- Renderizado dinámico de **56 productos** desde dummy data con `.map()`
- Sistema de carrito con **Context API** (agregar, eliminar, cambiar cantidad, totales)
- **Filtrado dinámico**: todos los productos aleatoriamente, solo nuevos, por categoría y por marca
- **Componente Newsletter**: propuesta de valor con validación de email y mensajes de estado
- **Página de Contacto**: perfil del desarrollador con enlaces a GitHub y redes
- **Página 404 profesional**: con animaciones CSS y botones de navegación
- Animaciones y transiciones CSS puro (sin librerías): slider Hero, bounce, fadeIn, scale, translateY
- Diseño **100% responsive** (desktop, tablet, mobile - optimizado para iPhone 14 Pro Max)
- CSS Modules para estilos encapsulados
- Tema oscuro moderno con acentos neón (#AAFF00)

## Estructura del proyecto

```text
unit-zero/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── robot2.png
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   ├── vite.svg
│   │   ├── robot.png
│   │   └── productos/
│   │       ├── gorros/
│   │       ├── zapatillas/
│   │       ├── chaquetas/
│   │       ├── pantalones/
│   │       ├── poleras/
│   │       └── polerones/
│   ├── components/
│   │   ├── CardGrid/
│   │   │   ├── Card.jsx
│   │   │   └── Card.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx
│   │   │   └── Hero.module.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   └── Newsletter/
│   │       ├── Newsletter.jsx
│   │       └── Newsletter.module.css
│   ├── context/
│   │   └── CarritoContext.jsx
│   ├── data/
│   │   └── dummy.js
│   ├── pages/
│   │   ├── Carrito/
│   │   │   ├── Carrito.jsx
│   │   │   └── Carrito.module.css
│   │   ├── Checkout/
│   │   │   ├── Checkout.jsx
│   │   │   └── Checkout.module.css
│   │   ├── Contacto/
│   │   │   ├── Contacto.jsx
│   │   │   └── Contacto.module.css
│   │   ├── Marca/
│   │   │   ├── Marca.jsx
│   │   │   └── Marca.module.css
│   │   ├── Productos/
│   │   │   ├── Productos.jsx
│   │   │   └── Productos.module.css
│   │   └── NotFound/
│   │       ├── NotFound.jsx
│   │       └── NotFound.module.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
├── package-lock.json
├── eslint.config.js
└── README.md
```


## Instalacion y ejecucion local

Requisitos:

- Node.js 18 o superior
- npm

Comandos:

```bash
npm install
npm run dev
```

Build de produccion:

```bash
npm run build
npm run preview
```

## Despliegue

- URL del proyecto en Vercel: https://unit-zero-ashy.vercel.app

## Datos del desarrollador

- Nombre: Nicolás Patricio Rojas Soto
- Carrera: Ingeniera Civil Informatica
- Ciudad: Talca
- GitHub: https://github.com/nikokreiz

## Repositorio y control de versiones

El avance del proyecto se documenta mediante commits en GitHub.

