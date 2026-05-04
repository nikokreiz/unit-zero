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

- Navegacion por rutas con React Router (`/`, `/productos/:categoria`, `/marcas/:slug`, `/carrito`, `/checkout`)
- Renderizado dinamico de productos desde dummy data
- Sistema de carrito con Context API (agregar, eliminar, cambiar cantidad, total)
- Filtros por categoria y marca
- Animaciones y transiciones CSS sin librerias externas
- Diseno responsive (desktop y mobile)

## Estructura del proyecto

```text
unit-zero/
	public/
	src/
		assets/
		components/
			CardGrid/
			Hero/
			Navbar/
		context/
			CarritoContext.jsx
		data/
			dummy.js
		pages/
			Carrito/
			Checkout/
			Marca/
			Productos/
		App.jsx
		main.jsx
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

- Vercel: pendiente de publicacion o actualizacion de enlace
- URL del proyecto en Vercel: agregar aqui

## Datos del desarrollador

- Nombre: Nicolás Patricio Rojas Soto
- Carrera: Ingeniera Civil Informatica
- Ciudad: Talca
- GitHub: https://github.com/nikokreiz

## Repositorio y control de versiones

El avance del proyecto se documenta mediante commits en GitHub.

