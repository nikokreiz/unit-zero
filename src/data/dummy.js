// ==========================================
// DUMMY DATA – Negozio di Moda
// ==========================================

// --- GORROS ---
import gorro_adidas_1 from '../assets/productos/gorros/gorro_adidas_1.webp'
import gorro_adidas_2 from '../assets/productos/gorros/gorro_adidas_2.webp'
import gorro_adidas_3 from '../assets/productos/gorros/gorro_adidas_3.webp'
import gorro_adidas_4 from '../assets/productos/gorros/gorro_adidas_4.webp'
import gorro_corteiz_1 from '../assets/productos/gorros/gorro_corteiz_1.webp'
import gorro_corteiz_2 from '../assets/productos/gorros/gorro_corteiz_2.webp'
import gorro_nike_1 from '../assets/productos/gorros/gorro_nike_1.webp'
import gorro_nike_2 from '../assets/productos/gorros/gorro_nike_2.webp'
import gorro_nike_3 from '../assets/productos/gorros/gorro_nike_3.webp'
import gorro_stussy_1 from '../assets/productos/gorros/gorro_stussy_1.webp'
import gorro_stussy_2 from '../assets/productos/gorros/gorro_stussy_2.webp'
import gorro_supreme_1 from '../assets/productos/gorros/gorro_supreme_1.webp'
import gorro_supreme_2 from '../assets/productos/gorros/gorro_supreme_2.webp'
import gorro_supreme_3 from '../assets/productos/gorros/gorro_supreme_3.webp'
import gorro_supreme_4 from '../assets/productos/gorros/gorro_supreme_4.webp'

// --- ZAPATILLAS ---
import zapatilla_adidas_1 from '../assets/productos/zapatillas/zapatilla_adidas_1.webp'
import zapatilla_adidas_2 from '../assets/productos/zapatillas/zapatilla_adidas_2.webp'
import zapatilla_adidas_3 from '../assets/productos/zapatillas/zapatilla_adidas_3.webp'
import zapatilla_adidas_4 from '../assets/productos/zapatillas/zapatilla_adidas_4.webp'
import zapatilla_newbalance_1 from '../assets/productos/zapatillas/zapatilla_newbalance_1.webp'
import zapatilla_nike_1 from '../assets/productos/zapatillas/zapatilla_nike_1.webp'
import zapatilla_nike_2 from '../assets/productos/zapatillas/zapatilla_nike_2.webp'
import zapatilla_nike_3 from '../assets/productos/zapatillas/zapatilla_nike_3.webp'
import zapatilla_nike_4 from '../assets/productos/zapatillas/zapatilla_nike_4.webp'
import zapatilla_nike_5 from '../assets/productos/zapatillas/zapatilla_nike_5.webp'
import zapatilla_nike_6 from '../assets/productos/zapatillas/zapatilla_nike_6.webp'

// --- CHAQUETAS ---
import chaqueta_adidas_1 from '../assets/productos/chaquetas/chaqueta_adidas_1.webp'
import chaqueta_carhartt_1 from '../assets/productos/chaquetas/chaqueta_carhartt_1.webp'
import chaqueta_carhartt_2 from '../assets/productos/chaquetas/chaqueta_carhartt_2.webp'
import chaqueta_corteiz_1 from '../assets/productos/chaquetas/chaqueta_corteiz_1.webp'
import chaqueta_northface_1 from '../assets/productos/chaquetas/chaqueta_northface_1.webp'
import chaqueta_supreme_1 from '../assets/productos/chaquetas/chaqueta_supreme_1.webp'

// --- PANTALONES ---
import pantalon_carhartt_1 from '../assets/productos/pantalones/pantalon_carhartt_1.webp'
import pantalon_carhartt_2 from '../assets/productos/pantalones/pantalon_carhartt_2.webp'
import pantalon_corteiz_1 from '../assets/productos/pantalones/pantalon_corteiz_1.webp'
import pantalon_corteiz_2 from '../assets/productos/pantalones/pantalon_corteiz_2.webp'
import pantalon_corteiz_3 from '../assets/productos/pantalones/pantalon_corteiz_3.webp'
import pantalon_nike_1 from '../assets/productos/pantalones/pantalon_nike_1.webp'

// --- POLERAS ---
import polera_carhartt_1 from '../assets/productos/poleras/polera_carhartt_1.webp'
import polera_carhartt_2 from '../assets/productos/poleras/polera_carhartt_2.webp'
import polera_carhartt_3 from '../assets/productos/poleras/polera_carhartt_3.webp'
import polera_corteiz_1 from '../assets/productos/poleras/polera_corteiz_1.webp'
import polera_corteiz_2 from '../assets/productos/poleras/polera_corteiz_2.webp'
import polera_corteiz_3 from '../assets/productos/poleras/polera_corteiz_3.webp'
import polera_corteiz_4 from '../assets/productos/poleras/polera_corteiz_4.webp'
import polera_stussy_1 from '../assets/productos/poleras/polera_stussy_1.webp'
import polera_stussy_2 from '../assets/productos/poleras/polera_stussy_2.webp'
import polera_stussy_3 from '../assets/productos/poleras/polera_stussy_3.webp'
import polera_supreme_1 from '../assets/productos/poleras/polera_supreme_1.webp'

// --- POLERONES ---
import poleron_adidas_1 from '../assets/productos/polerones/poleron_adidas_1.webp'
import poleron_adidas_2 from '../assets/productos/polerones/poleron_adidas_2.webp'
import poleron_adidas_3 from '../assets/productos/polerones/poleron_adidas_3.webp'
import poleron_carhartt_1 from '../assets/productos/polerones/poleron_carhartt_1.webp'
import poleron_stussy_1 from '../assets/productos/polerones/poleron_stussy_1.webp'
import poleron_supreme_1 from '../assets/productos/polerones/poleron_supreme_1.webp'
import poleron_supreme_2 from '../assets/productos/polerones/poleron_supreme_2.webp'

// --- LOGOS MARCAS ---
import logo_adidas from '../assets/marcas/Adidas.webp'
import logo_carhartt from '../assets/marcas/carhartt.png'
import logo_newbalance from '../assets/marcas/New_Balance.png'
import logo_nike from '../assets/marcas/nike.jpeg'
import logo_stussy from '../assets/marcas/stussy.png'
import logo_supreme from '../assets/marcas/supreme.png'
import logo_northface from '../assets/marcas/the_north_face.jpeg'

// ==========================================
// PRODUCTOS
// ==========================================

export const productos = [
  // GORROS
  { id: 1, nombre: 'Gorro Adidas Classic', marca: 'Adidas', categoria: 'gorros', precio: 24990, imagen: gorro_adidas_1, nuevo: true },
  { id: 2, nombre: 'Gorro Adidas Logo', marca: 'Adidas', categoria: 'gorros', precio: 22990, imagen: gorro_adidas_2, nuevo: false },
  { id: 3, nombre: 'Gorro Adidas Knit', marca: 'Adidas', categoria: 'gorros', precio: 27990, imagen: gorro_adidas_3, nuevo: false },
  { id: 4, nombre: 'Gorro Adidas Sport', marca: 'Adidas', categoria: 'gorros', precio: 19990, imagen: gorro_adidas_4, nuevo: false },
  { id: 5, nombre: 'Gorro Corteiz Alcatraz', marca: 'Corteiz', categoria: 'gorros', precio: 34990, imagen: gorro_corteiz_1, nuevo: true },
  { id: 6, nombre: 'Gorro Corteiz RTW', marca: 'Corteiz', categoria: 'gorros', precio: 32990, imagen: gorro_corteiz_2, nuevo: true },
  { id: 7, nombre: 'Gorro Nike Futura', marca: 'Nike', categoria: 'gorros', precio: 29990, imagen: gorro_nike_1, nuevo: false },
  { id: 8, nombre: 'Gorro Nike SB', marca: 'Nike', categoria: 'gorros', precio: 27990, imagen: gorro_nike_2, nuevo: true },
  { id: 9, nombre: 'Gorro Nike Heritage', marca: 'Nike', categoria: 'gorros', precio: 25990, imagen: gorro_nike_3, nuevo: false },
  { id: 10, nombre: 'Gorro Stüssy Stock', marca: 'Stüssy', categoria: 'gorros', precio: 39990, imagen: gorro_stussy_1, nuevo: true },
  { id: 11, nombre: 'Gorro Stüssy 8 Ball', marca: 'Stüssy', categoria: 'gorros', precio: 37990, imagen: gorro_stussy_2, nuevo: false },
  { id: 12, nombre: 'Gorro Supreme Box Logo', marca: 'Supreme', categoria: 'gorros', precio: 59990, imagen: gorro_supreme_1, nuevo: true },
  { id: 13, nombre: 'Gorro Supreme Beanie', marca: 'Supreme', categoria: 'gorros', precio: 54990, imagen: gorro_supreme_2, nuevo: false },
  { id: 14, nombre: 'Gorro Supreme 5-Panel', marca: 'Supreme', categoria: 'gorros', precio: 64990, imagen: gorro_supreme_3, nuevo: true },
  { id: 15, nombre: 'Gorro Supreme Camp Cap', marca: 'Supreme', categoria: 'gorros', precio: 69990, imagen: gorro_supreme_4, nuevo: false },

  // ZAPATILLAS
  { id: 16, nombre: 'Adidas Samba OG', marca: 'Adidas', categoria: 'zapatillas', precio: 89990, imagen: zapatilla_adidas_1, nuevo: true },
  { id: 17, nombre: 'Adidas Gazelle', marca: 'Adidas', categoria: 'zapatillas', precio: 84990, imagen: zapatilla_adidas_2, nuevo: false },
  { id: 18, nombre: 'Adidas Campus', marca: 'Adidas', categoria: 'zapatillas', precio: 79990, imagen: zapatilla_adidas_3, nuevo: true },
  { id: 19, nombre: 'Adidas Forum Low', marca: 'Adidas', categoria: 'zapatillas', precio: 94990, imagen: zapatilla_adidas_4, nuevo: false },
  { id: 20, nombre: 'New Balance 550', marca: 'New Balance', categoria: 'zapatillas', precio: 99990, imagen: zapatilla_newbalance_1, nuevo: true },
  { id: 21, nombre: 'Nike Air Force 1', marca: 'Nike', categoria: 'zapatillas', precio: 94990, imagen: zapatilla_nike_1, nuevo: false },
  { id: 22, nombre: 'Nike Dunk Low', marca: 'Nike', categoria: 'zapatillas', precio: 109990, imagen: zapatilla_nike_2, nuevo: true },
  { id: 23, nombre: 'Nike SB Janoski', marca: 'Nike', categoria: 'zapatillas', precio: 89990, imagen: zapatilla_nike_3, nuevo: false },
  { id: 24, nombre: 'Nike Cortez', marca: 'Nike', categoria: 'zapatillas', precio: 79990, imagen: zapatilla_nike_4, nuevo: false },
  { id: 25, nombre: 'Nike SB Dunk Pro', marca: 'Nike', categoria: 'zapatillas', precio: 119990, imagen: zapatilla_nike_5, nuevo: true },
  { id: 26, nombre: 'Nike Air Max 90', marca: 'Nike', categoria: 'zapatillas', precio: 124990, imagen: zapatilla_nike_6, nuevo: false },

  // CHAQUETAS
  { id: 27, nombre: 'Chaqueta Adidas Track', marca: 'Adidas', categoria: 'chaquetas', precio: 79990, imagen: chaqueta_adidas_1, nuevo: false },
  { id: 28, nombre: 'Chaqueta Carhartt OG', marca: 'Carhartt WIP', categoria: 'chaquetas', precio: 129990, imagen: chaqueta_carhartt_1, nuevo: true },
  { id: 29, nombre: 'Chaqueta Carhartt Active', marca: 'Carhartt WIP', categoria: 'chaquetas', precio: 119990, imagen: chaqueta_carhartt_2, nuevo: false },
  { id: 30, nombre: 'Chaqueta Corteiz RTW', marca: 'Corteiz', categoria: 'chaquetas', precio: 149990, imagen: chaqueta_corteiz_1, nuevo: true },
  { id: 31, nombre: 'Chaqueta The North Face Nuptse', marca: 'The North Face', categoria: 'chaquetas', precio: 189990, imagen: chaqueta_northface_1, nuevo: true },
  { id: 32, nombre: 'Chaqueta Supreme Varsity', marca: 'Supreme', categoria: 'chaquetas', precio: 229990, imagen: chaqueta_supreme_1, nuevo: false },

  // PANTALONES
  { id: 33, nombre: 'Pantalón Carhartt Cargo', marca: 'Carhartt WIP', categoria: 'pantalones', precio: 89990, imagen: pantalon_carhartt_1, nuevo: true },
  { id: 34, nombre: 'Pantalón Carhartt Regular', marca: 'Carhartt WIP', categoria: 'pantalones', precio: 84990, imagen: pantalon_carhartt_2, nuevo: false },
  { id: 35, nombre: 'Pantalón Corteiz Guerillaz', marca: 'Corteiz', categoria: 'pantalones', precio: 99990, imagen: pantalon_corteiz_1, nuevo: true },
  { id: 36, nombre: 'Pantalón Corteiz Cargo', marca: 'Corteiz', categoria: 'pantalones', precio: 109990, imagen: pantalon_corteiz_2, nuevo: true },
  { id: 37, nombre: 'Pantalón Corteiz Alcatraz', marca: 'Corteiz', categoria: 'pantalones', precio: 94990, imagen: pantalon_corteiz_3, nuevo: false },
  { id: 38, nombre: 'Pantalón Nike Tech Fleece', marca: 'Nike', categoria: 'pantalones', precio: 114990, imagen: pantalon_nike_1, nuevo: true },

  // POLERAS
  { id: 39, nombre: 'Polera Carhartt Pocket', marca: 'Carhartt WIP', categoria: 'poleras', precio: 34990, imagen: polera_carhartt_1, nuevo: false },
  { id: 40, nombre: 'Polera Carhartt Chase', marca: 'Carhartt WIP', categoria: 'poleras', precio: 37990, imagen: polera_carhartt_2, nuevo: false },
  { id: 41, nombre: 'Polera Carhartt Script', marca: 'Carhartt WIP', categoria: 'poleras', precio: 39990, imagen: polera_carhartt_3, nuevo: true },
  { id: 42, nombre: 'Polera Corteiz Alcatraz', marca: 'Corteiz', categoria: 'poleras', precio: 49990, imagen: polera_corteiz_1, nuevo: true },
  { id: 43, nombre: 'Polera Corteiz Rules', marca: 'Corteiz', categoria: 'poleras', precio: 54990, imagen: polera_corteiz_2, nuevo: true },
  { id: 44, nombre: 'Polera Corteiz RTW', marca: 'Corteiz', categoria: 'poleras', precio: 52990, imagen: polera_corteiz_3, nuevo: false },
  { id: 45, nombre: 'Polera Corteiz Logo', marca: 'Corteiz', categoria: 'poleras', precio: 47990, imagen: polera_corteiz_4, nuevo: false },
  { id: 46, nombre: 'Polera Stüssy Basic', marca: 'Stüssy', categoria: 'poleras', precio: 44990, imagen: polera_stussy_1, nuevo: false },
  { id: 47, nombre: 'Polera Stüssy Stock Logo', marca: 'Stüssy', categoria: 'poleras', precio: 49990, imagen: polera_stussy_2, nuevo: true },
  { id: 48, nombre: 'Polera Stüssy Pigment Dyed', marca: 'Stüssy', categoria: 'poleras', precio: 54990, imagen: polera_stussy_3, nuevo: false },
  { id: 49, nombre: 'Polera Supreme Box Logo', marca: 'Supreme', categoria: 'poleras', precio: 79990, imagen: polera_supreme_1, nuevo: true },

  // POLERONES
  { id: 50, nombre: 'Poleron Adidas Trefoil', marca: 'Adidas', categoria: 'polerones', precio: 64990, imagen: poleron_adidas_1, nuevo: false },
  { id: 51, nombre: 'Poleron Adidas Essential', marca: 'Adidas', categoria: 'polerones', precio: 59990, imagen: poleron_adidas_2, nuevo: false },
  { id: 52, nombre: 'Poleron Adidas Originals', marca: 'Adidas', categoria: 'polerones', precio: 69990, imagen: poleron_adidas_3, nuevo: true },
  { id: 53, nombre: 'Poleron Carhartt Chase', marca: 'Carhartt WIP', categoria: 'polerones', precio: 84990, imagen: poleron_carhartt_1, nuevo: true },
  { id: 54, nombre: 'Poleron Stüssy Stock Logo', marca: 'Stüssy', categoria: 'polerones', precio: 89990, imagen: poleron_stussy_1, nuevo: false },
  { id: 55, nombre: 'Poleron Supreme Box Logo', marca: 'Supreme', categoria: 'polerones', precio: 129990, imagen: poleron_supreme_1, nuevo: true },
  { id: 56, nombre: 'Poleron Supreme Arch Logo', marca: 'Supreme', categoria: 'polerones', precio: 119990, imagen: poleron_supreme_2, nuevo: false },
]

// ==========================================
// MARCAS
// ==========================================

export const marcas = [
  { id: 1, nombre: 'Supreme', slug: 'supreme', logo: logo_supreme, url: 'https://www.supremenewyork.com' },
  { id: 2, nombre: 'Stüssy', slug: 'stussy', logo: logo_stussy, url: 'https://www.stussy.com' },
  { id: 3, nombre: 'The North Face', slug: 'the-north-face', logo: logo_northface, url: 'https://www.thenorthface.com' },
  { id: 4, nombre: 'Carhartt WIP', slug: 'carhartt-wip', logo: logo_carhartt, url: 'https://www.carhartt.com' },
  { id: 5, nombre: 'Corteiz', slug: 'corteiz', logo: null, url: 'https://www.corteiz.com' },
  { id: 6, nombre: 'Nike / Nike SB', slug: 'nike-nike-sb', logo: logo_nike, url: 'https://www.nike.cl' },
  { id: 7, nombre: 'Adidas / Adidas Originals', slug: 'adidas-adidas-originals', logo: logo_adidas, url: 'https://www.adidas.com' },
  { id: 8, nombre: 'New Balance', slug: 'new-balance', logo: logo_newbalance, url: 'https://www.newbalance.com' },
]

// ==========================================
// HELPERS – filtros útiles
// ==========================================

// Productos nuevos para el Hero
export const productosNuevos = productos.filter(p => p.nuevo === true)

// Filtrar por categoría
export const filtrarPorCategoria = (categoria) =>
  productos.filter(p => p.categoria === categoria)

// Filtrar por marca
export const filtrarPorMarca = (slug) =>
  productos.filter(p => p.marca.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '') === slug)