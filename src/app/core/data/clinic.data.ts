import { ClinicConfig, ClinicStat } from '../models/clinic.model';

export const CLINIC_CONFIG: ClinicConfig = {
  name: 'Clínica Dental Sonrisa',
  tagline: 'Odontología moderna que transforma sonrisas',
  heroHeadline: 'Una sonrisa saludable cambia la forma en que ves el mundo.',
  heroSubheadline: 'Combinamos experiencia médica, tecnología digital 3D y atención personalizada para cuidar tu bienestar oral en cada etapa de tu vida.',
  phone: '+595 21 600 800',
  phoneDisplay: '+595 21 600 800',
  whatsappNumber: '595981123456',
  whatsappDefaultMessage: 'Hola, me gustaría consultar disponibilidad para reservar un turno en la clínica.',
  email: 'contacto@clinicaodontologica.com',
  address: {
    street: 'Av. Santa Teresa 2450 c/ Herminio Maldonado',
    city: 'Asunción',
    country: 'Paraguay',
    note: 'Edificio Plaza Alta - Piso 4, Suite 402 (Estacionamiento exclusivo para pacientes)',
  },
  openingHours: {
    weekdays: 'Lunes a Viernes: 08:00 — 19:30',
    saturdays: 'Sábados: 08:30 — 13:00',
    sundays: 'Domingos y Feriados: Cerrado (Guardias de urgencia)',
  },
  social: {
    instagram: 'https://instagram.com/clinicasonrisa',
    facebook: 'https://facebook.com/clinicasonrisa',
    whatsapp: 'https://wa.me/595981123456',
    linkedin: 'https://linkedin.com/company/clinicasonrisa',
  },
  googleMapsUrl: 'https://maps.google.com/?q=Asuncion+Paraguay',
};

export const CLINIC_STATS: ClinicStat[] = [
  {
    value: '+12',
    label: 'Años de trayectoria',
    highlight: 'Cuidado continuo',
  },
  {
    value: '+7.500',
    label: 'Pacientes atendidos',
    highlight: 'Confianza demostrada',
  },
  {
    value: '+10',
    label: 'Especialistas certificados',
    highlight: 'Equipo multidisciplinario',
  },
  {
    value: '99%',
    label: 'Índice de satisfacción',
    highlight: 'Excelencia clínica',
  },
];
