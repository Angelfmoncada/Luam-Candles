// Datos de productos de Luam Candles - Velas artesanales
import { asset } from '../utils/asset.js';

const rawProducts = [
  // Velas Aromáticas Clásicas (1-25)
  {
    id: 1,
    name: "Vela Rosa y Lavanda",
    category: "aromaticas",
    img: asset('images/1-rosa-lavanda.png'),
    scent: "Lavanda",
    size: "Medium",
    price: 450,
    description: "Vela artesanal con esencia de lavanda francesa, perfecta para relajación y meditación."
  },
  {
    id: 2,
    name: "Vela Espíritu del Corcel",
    category: "aromaticas",
    img: asset('images/2-espiritu-corcel.png'),
    scent: "Vainilla",
    size: "Large",
    price: 520,
    description: "Aroma dulce y cálido de vainilla natural que crea un ambiente acogedor."
  },
  {
    id: 3,
    name: "Vela Sol en Flor",
    category: "aromaticas",
    img: asset('images/3-sol-flor.png'),
    scent: "Eucalipto",
    size: "Medium",
    price: 480,
    description: "Fragancia refrescante de eucalipto que purifica el ambiente."
  },
  {
    id: 4,
    name: "Vela Encanto Rosa",
    category: "aromaticas",
    img: asset('images/4-encanto-rosa.png'),
    scent: "Rosa",
    size: "Small",
    price: 380,
    description: "Delicado aroma de rosas frescas para momentos especiales."
  },
  {
    id: 5,
    name: "Vela Canela Especiada",
    category: "aromaticas",
    img: asset('images/5-canela-especiada.png'),
    scent: "Canela",
    size: "Medium",
    price: 460,
    description: "Aroma cálido y especiado de canela que evoca la comodidad del hogar."
  },
  {
    id: 6,
    name: "Vela Ramo Encantado",
    category: "aromaticas",
    img: asset('images/6-ramo-encantado.png'),
    scent: "Limón",
    size: "Large",
    price: 500,
    description: "Fragancia cítrica revitalizante que energiza cualquier espacio."
  },
  {
    id: 7,
    name: "Vela Encanto de Osito",
    category: "aromaticas",
    img: asset('images/7-encanto-osito.png'),
    scent: "Jazmín",
    size: "Medium",
    price: 490,
    description: "Aroma exótico de jazmín para noches románticas y relajantes."
  },
  {
    id: 8,
    name: "Vela Menta Refrescante",
    category: "aromaticas",
    img: asset('images/8-menta-refrescante.png'),
    scent: "Menta",
    size: "Small",
    price: 360,
    description: "Fragancia mentolada que refresca y revitaliza el ambiente."
  },
  {
    id: 9,
    name: "Vela Sándalo Místico",
    category: "aromaticas",
    img: asset('images/9-sandalo-mistico.png'),
    scent: "Sándalo",
    size: "Large",
    price: 550,
    description: "Aroma profundo y místico de sándalo para meditación profunda."
  },
  {
    id: 10,
    name: "Vela Naranja Alegre",
    category: "aromaticas",
    img: asset('images/10-naranja-alegre.png'),
    scent: "Naranja",
    size: "Medium",
    price: 440,
    description: "Fragancia cítrica alegre que llena de energía positiva."
  },
  {
    id: 11,
    name: "Vela Bergamota Cítrica",
    category: "aromaticas",
    img: asset('images/11-bergamota-citrica.png'),
    scent: "Bergamota",
    size: "Medium",
    price: 470,
    description: "Aroma elegante de bergamota que aporta sofisticación al ambiente."
  },
  {
    id: 12,
    name: "Vela Cedro del Bosque",
    category: "aromaticas",
    img: asset('images/12-cedro-bosque.png'),
    scent: "Cedro",
    size: "Large",
    price: 530,
    description: "Fragancia amaderada de cedro que conecta con la naturaleza."
  },
  {
    id: 13,
    name: "Vela Ylang Ylang",
    category: "aromaticas",
    img: asset('images/13-ylang-ylang.png'),
    scent: "Ylang Ylang",
    size: "Medium",
    price: 485,
    description: "Aroma floral exótico que relaja y equilibra las emociones."
  },
  {
    id: 14,
    name: "Vela Romero Herbal",
    category: "aromaticas",
    img: asset('images/14-romero-herbal.png'),
    scent: "Romero",
    size: "Small",
    price: 390,
    description: "Fragancia herbal estimulante que mejora la concentración."
  },
  {
    id: 15,
    name: "Vela Geranio Floral",
    category: "aromaticas",
    img: asset('images/15-geranio-floral.png'),
    scent: "Geranio",
    size: "Medium",
    price: 455,
    description: "Aroma floral dulce que crea un ambiente romántico y acogedor."
  },
  {
    id: 16,
    name: "Vela Pachulí Terroso",
    category: "aromaticas",
    img: asset('images/16-pachuli-terroso.png'),
    scent: "Pachulí",
    size: "Large",
    price: 540,
    description: "Fragancia terrosa y profunda que aporta misticismo al espacio."
  },
  {
    id: 17,
    name: "Vela Mandarina Dulce",
    category: "aromaticas",
    img: asset('images/17-mandarina-dulce.png'),
    scent: "Mandarina",
    size: "Medium",
    price: 435,
    description: "Aroma cítrico dulce que alegra y energiza cualquier momento."
  },
  {
    id: 18,
    name: "Vela Tomillo Silvestre",
    category: "aromaticas",
    img: asset('images/18-tomillo-silvestre.png'),
    scent: "Tomillo",
    size: "Small",
    price: 385,
    description: "Fragancia herbal silvestre que purifica y protege el ambiente."
  },
  {
    id: 19,
    name: "Vela Gardenia Nocturna",
    category: "aromaticas",
    img: asset('images/19-gardenia-nocturna.png'),
    scent: "Gardenia",
    size: "Large",
    price: 525,
    description: "Aroma floral intenso perfecto para noches especiales."
  },
  {
    id: 20,
    name: "Vela Albahaca Fresca",
    category: "aromaticas",
    img: asset('images/20-albahaca-fresca.png'),
    scent: "Albahaca",
    size: "Medium",
    price: 445,
    description: "Fragancia herbal fresca que revitaliza y purifica el aire."
  },
  {
    id: 21,
    name: "Vela Vetiver Elegante",
    category: "aromaticas",
    img: asset('images/21-vetiver-elegante.png'),
    scent: "Vetiver",
    size: "Large",
    price: 560,
    description: "Aroma sofisticado y terroso que aporta elegancia al hogar."
  },
  {
    id: 22,
    name: "Vela Pomelo Energizante",
    category: "aromaticas",
    img: asset('images/22-pomelo-energizante.png'),
    scent: "Pomelo",
    size: "Medium",
    price: 450,
    description: "Fragancia cítrica vibrante que despierta los sentidos."
  },
  {
    id: 23,
    name: "Vela Incienso Sagrado",
    category: "aromaticas",
    img: asset('images/23-incienso-sagrado.png'),
    scent: "Incienso",
    size: "Large",
    price: 575,
    description: "Aroma místico y espiritual perfecto para meditación y relajación."
  },
  {
    id: 24,
    name: "Vela Lemongrass Tropical",
    category: "aromaticas",
    img: asset('images/24-lemongrass-tropical.png'),
    scent: "Lemongrass",
    size: "Medium",
    price: 465,
    description: "Fragancia tropical refrescante que transporta a paraísos lejanos."
  },
  {
    id: 25,
    name: "Vela Neroli Delicado",
    category: "aromaticas",
    img: asset('images/25-neroli-delicado.png'),
    scent: "Neroli",
    size: "Small",
    price: 395,
    description: "Aroma floral delicado que calma y equilibra las emociones."
  },
  
  // Velas Decorativas de Cristales (26-50)
  {
    id: 26,
    name: "Vela Cristal Aurora",
    category: "decorativas",
    img: asset('images/26-cristal-aurora.png'),
    scent: "Lavanda",
    size: "Medium",
    price: 580,
    description: "Vela decorativa inspirada en la aurora boreal con cristales incrustados."
  },
  {
    id: 27,
    name: "Vela Perla del Océano",
    category: "decorativas",
    img: asset('images/27-perla-oceano.png'),
    scent: "Brisa Marina",
    size: "Large",
    price: 620,
    description: "Elegante vela con acabado perlado que evoca la serenidad del océano."
  },
  {
    id: 28,
    name: "Vela Diamante Brillante",
    category: "decorativas",
    img: asset('images/28-diamante-brillante.png'),
    scent: "Rosa Blanca",
    size: "Medium",
    price: 650,
    description: "Vela de lujo con cristales que brillan como diamantes."
  },
  {
    id: 29,
    name: "Vela Esmeralda del Bosque",
    category: "decorativas",
    img: asset('images/29-esmeralda-bosque.png'),
    scent: "Pino",
    size: "Large",
    price: 590,
    description: "Vela verde esmeralda que conecta con la energía del bosque."
  },
  {
    id: 30,
    name: "Vela Zafiro Nocturno",
    category: "decorativas",
    img: asset('images/30-zafiro-nocturno.png'),
    scent: "Jazmín Nocturno",
    size: "Medium",
    price: 610,
    description: "Vela azul profundo perfecta para noches de contemplación."
  },
  {
    id: 31,
    name: "Vela Rubí Pasión",
    category: "decorativas",
    img: asset('images/31-rubi-pasion.png'),
    scent: "Rosa Roja",
    size: "Small",
    price: 570,
    description: "Vela roja intensa que despierta la pasión y el amor."
  },
  {
    id: 32,
    name: "Vela Topacio Dorado",
    category: "decorativas",
    img: asset('images/32-topacio-dorado.png'),
    scent: "Ámbar",
    size: "Large",
    price: 640,
    description: "Vela dorada que aporta calidez y prosperidad al hogar."
  },
  {
    id: 33,
    name: "Vela Amatista Místico",
    category: "decorativas",
    img: asset('images/33-amatista-mistico.png'),
    scent: "Lavanda Mística",
    size: "Medium",
    price: 595,
    description: "Vela violeta que potencia la intuición y la espiritualidad."
  },
  {
    id: 34,
    name: "Vela Cuarzo Transparente",
    category: "decorativas",
    img: asset('images/34-cuarzo-transparente.png'),
    scent: "Limpio",
    size: "Medium",
    price: 560,
    description: "Vela cristalina que purifica y amplifica las energías positivas."
  },
  {
    id: 35,
    name: "Vela Jade Serenidad",
    category: "decorativas",
    img: asset('images/35-jade-serenidad.png'),
    scent: "Té Verde",
    size: "Small",
    price: 550,
    description: "Vela verde jade que aporta equilibrio y armonía."
  },
  {
    id: 36,
    name: "Vela Ópalo Iridiscente",
    category: "decorativas",
    img: asset('images/36-opalo-iridiscente.png'),
    scent: "Floral Suave",
    size: "Large",
    price: 630,
    description: "Vela con efectos iridiscentes que cambian con la luz."
  },
  {
    id: 37,
    name: "Vela Turquesa Calma",
    category: "decorativas",
    img: asset('images/37-turquesa-calma.png'),
    scent: "Eucalipto Suave",
    size: "Medium",
    price: 575,
    description: "Vela turquesa que transmite paz y tranquilidad."
  },
  {
    id: 38,
    name: "Vela Granate Intenso",
    category: "decorativas",
    img: asset('images/38-granate-intenso.png'),
    scent: "Canela Especiada",
    size: "Large",
    price: 600,
    description: "Vela rojo granate que aporta fuerza y determinación."
  },
  {
    id: 39,
    name: "Vela Citrino Solar",
    category: "decorativas",
    img: asset('images/39-citrino-solar.png'),
    scent: "Naranja Solar",
    size: "Medium",
    price: 585,
    description: "Vela amarilla que irradia energía solar y optimismo."
  },
  {
    id: 40,
    name: "Vela Obsidiana Protección",
    category: "decorativas",
    img: asset('images/40-obsidiana-proteccion.png'),
    scent: "Sándalo Protector",
    size: "Large",
    price: 620,
    description: "Vela negra que ofrece protección y absorbe energías negativas."
  },
  {
    id: 41,
    name: "Vela Aguamarina Pureza",
    category: "decorativas",
    img: asset('images/41-aguamarina-pureza.png'),
    scent: "Brisa Oceánica",
    size: "Medium",
    price: 590,
    description: "Vela azul claro que purifica y clarifica los pensamientos."
  },
  {
    id: 42,
    name: "Vela Peridoto Renovación",
    category: "decorativas",
    img: asset('images/42-peridoto-renovacion.png'),
    scent: "Hierba Fresca",
    size: "Small",
    price: 565,
    description: "Vela verde lima que simboliza renovación y crecimiento."
  },
  {
    id: 43,
    name: "Vela Tanzanita Rara",
    category: "decorativas",
    img: asset('images/43-tanzanita-rara.png'),
    scent: "Violeta Exótica",
    size: "Large",
    price: 680,
    description: "Vela azul violeta única que despierta la creatividad."
  },
  {
    id: 44,
    name: "Vela Labradorita Mágica",
    category: "decorativas",
    img: asset('images/44-labradorita-magica.png'),
    scent: "Misterio Lunar",
    size: "Medium",
    price: 615,
    description: "Vela con destellos mágicos que potencia la intuición."
  },
  {
    id: 45,
    name: "Vela Moonstone Lunar",
    category: "decorativas",
    img: asset('images/45-moonstone-lunar.png'),
    scent: "Jazmín Lunar",
    size: "Medium",
    price: 605,
    description: "Vela plateada que conecta con los ciclos lunares."
  },
  {
    id: 46,
    name: "Vela Sunstone Solar",
    category: "decorativas",
    img: asset('images/46-sunstone-solar.png'),
    scent: "Energía Solar",
    size: "Large",
    price: 625,
    description: "Vela dorada que canaliza la energía del sol."
  },
  {
    id: 47,
    name: "Vela Amazonita Equilibrio",
    category: "decorativas",
    img: asset('images/47-amazonita-equilibrio.png'),
    scent: "Menta Equilibrante",
    size: "Medium",
    price: 580,
    description: "Vela verde azulada que armoniza cuerpo y mente."
  },
  {
    id: 48,
    name: "Vela Fluorita Claridad",
    category: "decorativas",
    img: asset('images/48-fluorita-claridad.png'),
    scent: "Claridad Mental",
    size: "Small",
    price: 555,
    description: "Vela multicolor que mejora la concentración y claridad."
  },
  {
    id: 49,
    name: "Vela Malaquita Transformación",
    category: "decorativas",
    img: asset('images/49-malaquita-transformacion.png'),
    scent: "Transformación",
    size: "Large",
    price: 635,
    description: "Vela verde con patrones únicos que facilita el cambio positivo."
  },
  {
    id: 50,
    name: "Vela Hematita Fuerza",
    category: "decorativas",
    img: asset('images/50-hematita-fuerza.png'),
    scent: "Fuerza Interior",
    size: "Medium",
    price: 595,
    description: "Vela metálica que fortalece la voluntad y determinación."
  },
  
  // Velas Temáticas de Ocasiones Especiales (51-74)
  {
    id: 51,
    name: "Vela Navidad Tradicional",
    category: "tematicas",
    img: asset('images/51-navidad-tradicional.png'),
    scent: "Canela y Naranja",
    size: "Large",
    price: 520,
    description: "Vela festiva con aromas tradicionales navideños que crean magia en el hogar."
  },
  {
    id: 52,
    name: "Vela Halloween Misterioso",
    category: "tematicas",
    img: asset('images/52-halloween-misterioso.png'),
    scent: "Calabaza Especiada",
    size: "Medium",
    price: 480,
    description: "Vela temática de Halloween con aroma a calabaza y especias."
  },
  {
    id: 53,
    name: "Vela San Valentín Amor",
    category: "tematicas",
    img: asset('images/53-san-valentin-amor.png'),
    scent: "Rosa y Vainilla",
    size: "Medium",
    price: 490,
    description: "Vela romántica perfecta para celebrar el amor en San Valentín."
  },
  {
    id: 54,
    name: "Vela Pascua Renacimiento",
    category: "tematicas",
    img: asset('images/54-pascua-renacimiento.png'),
    scent: "Flores Primaverales",
    size: "Small",
    price: 420,
    description: "Vela primaveral que celebra el renacimiento y la esperanza."
  },
  {
    id: 55,
    name: "Vela Día de las Madres",
    category: "tematicas",
    img: asset('images/55-dia-madres.png'),
    scent: "Peonía Dulce",
    size: "Large",
    price: 510,
    description: "Vela especial para honrar a las madres con fragancia floral delicada."
  },
  {
    id: 56,
    name: "Vela Día del Padre",
    category: "tematicas",
    img: asset('images/56-dia-padres.png'),
    scent: "Cedro y Cuero",
    size: "Large",
    price: 530,
    description: "Vela masculina con aromas amaderados perfecta para papá."
  },
  {
    id: 57,
    name: "Vela Graduación Éxito",
    category: "tematicas",
    img: asset('images/57-graduacion-exito.png'),
    scent: "Cítricos Energizantes",
    size: "Medium",
    price: 460,
    description: "Vela celebratoria para graduaciones y nuevos comienzos."
  },
  {
    id: 58,
    name: "Vela Cumpleaños Celebración",
    category: "tematicas",
    img: asset('images/58-cumpleanos-celebracion.png'),
    scent: "Vainilla Festiva",
    size: "Medium",
    price: 450,
    description: "Vela alegre para celebrar cumpleaños y momentos especiales."
  },
  {
    id: 59,
    name: "Vela Aniversario de Bodas",
    category: "tematicas",
    img: asset('images/59-aniversario-bodas.png'),
    scent: "Champagne y Rosa",
    size: "Large",
    price: 540,
    description: "Vela elegante para celebrar aniversarios de bodas."
  },
  {
    id: 60,
    name: "Vela Baby Shower",
    category: "tematicas",
    img: asset('images/60-baby-shower.png'),
    scent: "Algodón Suave",
    size: "Small",
    price: 430,
    description: "Vela tierna con aroma suave perfecta para baby showers."
  },
  {
    id: 61,
    name: "Vela Despedida de Soltera",
    category: "tematicas",
    img: asset('images/61-despedida-soltera.png'),
    scent: "Frutas Tropicales",
    size: "Medium",
    price: 470,
    description: "Vela divertida y tropical para despedidas de soltera."
  },
  {
    id: 62,
    name: "Vela Housewarming Hogar",
    category: "tematicas",
    img: asset('images/62-housewarming-hogar.png'),
    scent: "Hogar Acogedor",
    size: "Large",
    price: 500,
    description: "Vela perfecta como regalo para estrenar casa nueva."
  },
  {
    id: 63,
    name: "Vela Jubilación Descanso",
    category: "tematicas",
    img: asset('images/63-jubilacion-descanso.png'),
    scent: "Relajación Total",
    size: "Large",
    price: 520,
    description: "Vela relajante para celebrar la jubilación y el merecido descanso."
  },
  {
    id: 64,
    name: "Vela Acción de Gracias",
    category: "tematicas",
    img: asset('images/64-accion-gracias.png'),
    scent: "Especias Otoñales",
    size: "Medium",
    price: 480,
    description: "Vela otoñal con aromas cálidos para Acción de Gracias."
  },
  {
    id: 65,
    name: "Vela Año Nuevo",
    category: "tematicas",
    img: asset('images/65-ano-nuevo.png'),
    scent: "Champagne Burbujeante",
    size: "Large",
    price: 550,
    description: "Vela festiva para recibir el Año Nuevo con esperanza."
  },
  {
    id: 66,
    name: "Vela Día de la Independencia",
    category: "tematicas",
    img: asset('images/66-dia-independencia.png'),
    scent: "Patriótico",
    size: "Medium",
    price: 460,
    description: "Vela patriótica para celebrar la independencia nacional."
  },
  {
    id: 67,
    name: "Vela Día del Trabajador",
    category: "tematicas",
    img: asset('images/67-dia-trabajador.png'),
    scent: "Energía Laboral",
    size: "Medium",
    price: 440,
    description: "Vela que honra el esfuerzo y dedicación de los trabajadores."
  },
  {
    id: 68,
    name: "Vela Día de la Tierra",
    category: "tematicas",
    img: asset('images/68-dia-tierra.png'),
    scent: "Naturaleza Pura",
    size: "Large",
    price: 490,
    description: "Vela ecológica que celebra y protege nuestro planeta."
  },
  {
    id: 69,
    name: "Vela Día de la Mujer",
    category: "tematicas",
    img: asset('images/69-dia-mujer.png'),
    scent: "Empoderamiento Floral",
    size: "Medium",
    price: 470,
    description: "Vela que celebra la fuerza y belleza de la mujer."
  },
  {
    id: 70,
    name: "Vela Día del Niño",
    category: "tematicas",
    img: asset('images/70-dia-nino.png'),
    scent: "Dulce Infantil",
    size: "Small",
    price: 410,
    description: "Vela dulce y alegre para celebrar a los niños."
  },
  {
    id: 71,
    name: "Vela Día de los Abuelos",
    category: "tematicas",
    img: asset('images/71-dia-abuelos.png'),
    scent: "Sabiduría Ancestral",
    size: "Large",
    price: 500,
    description: "Vela que honra la sabiduría y amor de los abuelos."
  },
  {
    id: 72,
    name: "Vela Día de los Maestros",
    category: "tematicas",
    img: asset('images/72-dia-maestros.png'),
    scent: "Conocimiento",
    size: "Medium",
    price: 450,
    description: "Vela que reconoce la labor educativa de los maestros."
  },
  {
    id: 73,
    name: "Vela Día de la Amistad",
    category: "tematicas",
    img: asset('images/73-dia-amistad.png'),
    scent: "Amistad Eterna",
    size: "Medium",
    price: 460,
    description: "Vela que celebra los lazos especiales de la amistad."
  },
  {
    id: 74,
    name: "Vela Fin de Año Reflexión",
    category: "tematicas",
    img: asset('images/74-fin-ano-reflexion.png'),
    scent: "Reflexión Serena",
    size: "Large",
    price: 530,
    description: "Vela contemplativa para reflexionar sobre el año que termina."
  },
  {
    id: 75,
    name: "Vela de la Gratitud Infinita",
    category: "tematicas",
    img: asset('images/75-gratitud-infinita.png'),
    scent: "Gratitud Infinita",
    size: "Large",
    price: 540,
    description: "Una vela especial para cultivar la gratitud y apreciar los momentos preciosos de la vida."
  }

// Función para generar slug a partir del nombre
const generateSlug = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .trim();
};

// Agregar slug a cada producto
export const products = rawProducts.map(product => ({
  ...product,
  slug: generateSlug(product.name)
}));

// Productos destacados (primeros 8)
export const featuredProducts = products.slice(0, 8);

// Categorías disponibles
export const categories = [
  { id: 'todas', name: 'Todas las Velas', count: products.length },
  { id: 'aromaticas', name: 'Velas Aromáticas', count: products.filter(p => p.category === 'aromaticas').length },
  { id: 'decorativas', name: 'Velas Decorativas', count: products.filter(p => p.category === 'decorativas').length },
  { id: 'tematicas', name: 'Velas Temáticas', count: products.filter(p => p.category === 'tematicas').length }
];

// Fragancias disponibles
export const scents = [
  'Lavanda', 'Vainilla', 'Eucalipto', 'Rosa', 'Canela', 'Limón', 'Jazmín', 'Menta', 'Sándalo', 'Naranja',
  'Bergamota', 'Cedro', 'Ylang Ylang', 'Romero', 'Geranio', 'Pachulí', 'Mandarina', 'Tomillo', 'Gardenia',
  'Albahaca', 'Vetiver', 'Pomelo', 'Incienso', 'Lemongrass', 'Neroli', 'Brisa Marina', 'Rosa Blanca', 'Pino',
  'Jazmín Nocturno', 'Rosa Roja', 'Ámbar', 'Lavanda Mística', 'Limpio', 'Té Verde', 'Floral Suave',
  'Eucalipto Suave', 'Canela Especiada', 'Naranja Solar', 'Sándalo Protector', 'Brisa Oceánica', 'Hierba Fresca',
  'Violeta Exótica', 'Misterio Lunar', 'Jazmín Lunar', 'Energía Solar', 'Menta Equilibrante', 'Claridad Mental',
  'Transformación', 'Fuerza Interior', 'Canela y Naranja', 'Calabaza Especiada', 'Rosa y Vainilla',
  'Flores Primaverales', 'Peonía Dulce', 'Cedro y Cuero', 'Cítricos Energizantes', 'Vainilla Festiva',
  'Champagne y Rosa', 'Algodón Suave', 'Frutas Tropicales', 'Hogar Acogedor', 'Relajación Total',
  'Especias Otoñales', 'Champagne Burbujeante', 'Patriótico', 'Energía Laboral', 'Naturaleza Pura',
  'Empoderamiento Floral', 'Dulce Infantil', 'Sabiduría Ancestral', 'Conocimiento', 'Amistad Eterna', 'Reflexión Serena',
  'Gratitud Infinita'
];

// Tamaños disponibles
export const sizes = ['Small', 'Medium', 'Large', 'Pack 6'];

export default products;