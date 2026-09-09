import { Treatment } from '../models/treatment.model';

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'implantologia',
    slug: 'implantologia-dental',
    name: 'Implantología Digital y Regeneración',
    category: 'Cirugía & Rehabilitación',
    shortDescription: 'Recuperá piezas dentales de forma definitiva con implantes guiados por tomografía 3D de alta precisión.',
    fullDescription: 'Procedimiento mínimamente invasivo con tecnología de navegación quirúrgica guiada por computadora. Diseñamos la prótesis definitiva con materiales biocompatibles como circonio y titanio puro, devolviendo función masticatoria y estética natural desde la primera sesión.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    featured: true,
    highlightBadge: 'Alta Complejidad',
    durationMinutes: 60,
    benefits: [
      'Planificación quirúrgica 3D guiada por software',
      'Integración ósea rápida y biocompatible',
      'Resultados indistinguibles de tus dientes naturales',
      'Sedación consciente disponible para máxima comodidad'
    ],
    iconName: 'sparkles'
  },
  {
    id: 'estetica-dental',
    slug: 'estetica-dental-y-carillas',
    name: 'Diseño de Sonrisa & Carillas',
    category: 'Estética Avanzada',
    shortDescription: 'Armonización visual mediante carillas cerámicas ultrafinas, mock-up digital previo y preservación del esmalte natural.',
    fullDescription: 'Realizamos un análisis biomimético y facial completo. Mediante escaneo intraoral generamos una simulación digital del resultado final antes de iniciar el tratamiento. Trabajamos con láminas cerámicas de 0.3mm que aportan luminosidad y resistencia duradera.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    featured: true,
    highlightBadge: 'Diseño Personalizado',
    durationMinutes: 45,
    benefits: [
      'Prueba previa en boca (Mock-up estético)',
      'Cerámicas de última generación resistentes a manchas',
      'Mínimo desgaste y máxima conservación dental',
      'Luminosidad y textura hipernatural'
    ],
    iconName: 'gem'
  },
  {
    id: 'ortodoncia-invisible',
    slug: 'ortodoncia-invisible',
    name: 'Ortodoncia Invisible & Brackets Zafiro',
    category: 'Alineación Dental',
    shortDescription: 'Alineadores transparentes removibles y sistemas autoligables para una corrección eficiente sin alterar tu estilo de vida.',
    fullDescription: 'Corregimos malposiciones y problemas oclusales con alineadores transparentes prácticamente imperceptibles. Cambiás tus alineadores cada 10 a 14 días y supervisamos tu evolución de manera periódica y predecible.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    featured: false,
    highlightBadge: 'Comodidad Total',
    durationMinutes: 40,
    benefits: [
      'Alineadores casi invisibles y removibles para comer',
      'Higiene bucal sencilla sin alambres molestos',
      'Menor tiempo global de tratamiento',
      'Sin emergencias por despegado de brackets'
    ],
    iconName: 'smile'
  },
  {
    id: 'blanqueamiento-led',
    slug: 'blanqueamiento-dental-laser',
    name: 'Blanqueamiento Dental Philips Zoom®',
    category: 'Estética Rápida',
    shortDescription: 'Aclaramiento seguro y clínicamente probado en una sola sesión de 45 minutos, con protección avanzada de encías y sin sensibilidad.',
    fullDescription: 'Tecnología de fotoactivación LED fría que elimina manchas profundas provocadas por café, té, tabaco o el paso del tiempo. Incluye kit desensibilizante y férula para refuerzo domiciliario personalizado.',
    image: 'https://images.unsplash.com/photo-1571772935541-0738e4a9e22c?auto=format&fit=crop&w=800&q=80',
    featured: false,
    highlightBadge: 'Sesión Única',
    durationMinutes: 45,
    benefits: [
      'Hasta 6 tonos más claros en 1 sola sesión',
      'Fórmula exclusiva con amortiguadores de sensibilidad',
      'Protección garantizada del esmalte dental',
      'Mantenimiento prolongado con kit domiciliario'
    ],
    iconName: 'sun'
  },
  {
    id: 'endodoncia-microscopica',
    slug: 'endodoncia-microscopica',
    name: 'Endodoncia con Microscopio Operatorio',
    category: 'Conservación Dental',
    shortDescription: 'Tratamiento de conductos radiculares con magnificación microscópica óptica para salvar piezas dentales con dolor o infección.',
    fullDescription: 'La magnificación de hasta 20 aumentos nos permite visualizar canales accesorios que a simple vista pasan desapercibidos. Realizamos limpiezas biológicas profundas y sellado termoplástico tridimensional sin dolor.',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    featured: false,
    highlightBadge: 'Sin Dolor',
    durationMinutes: 60,
    benefits: [
      'Conservación de la pieza dental biológica original',
      'Resolución rápida de dolor e infección aguda',
      'Anestesia digital controlada y confortable',
      'Visualización de precisión microscópica Zeiss'
    ],
    iconName: 'shield-check'
  },
  {
    id: 'odontologia-general',
    slug: 'odontologia-general-y-prevencion',
    name: 'Odontología Integral & Profilaxis Ultrasónica',
    category: 'Salud Preventiva',
    shortDescription: 'Evaluación diagnóstica completa, limpiezas con flujo de aire profiláctico (AirFlow) y restauraciones estéticas con resinas nano-híbridas.',
    fullDescription: 'La base de una sonrisa saludable. Detectamos caries incipientes mediante fluorescencia óptica sin radiación excesiva. Removemos sarro y biopelícula con tecnología piezoeléctrica no abrasiva para encías sanas y aliento fresco.',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=800&q=80',
    featured: false,
    highlightBadge: 'Prevención Clave',
    durationMinutes: 45,
    benefits: [
      'Diagnóstico fotográfico y radiográfico en pantalla HD',
      'Limpieza profunda con tecnología AirFlow sin dolor',
      'Restauraciones directas con resinas de tono exacto',
      'Plan preventivo semestral personalizado'
    ],
    iconName: 'heart-pulse'
  }
];
