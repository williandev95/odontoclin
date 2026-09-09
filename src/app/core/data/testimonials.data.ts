import { Testimonial } from '../models/common.models';

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Lic. Sofia Villalba',
    patientAge: 34,
    treatment: 'Diseño de Sonrisa & Carillas',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Me sentí acompañada desde la primera consulta. Me mostraron digitalmente cómo quedaría antes de tocar un solo diente. El resultado superó mis expectativas.',
    fullReview: 'Tenía mucho miedo a que mis dientes quedaran artificiales o excesivamente blancos. La Dra. María González entendió exactamente lo que buscaba: una sonrisa luminosa y natural. La atención del equipo y las instalaciones transmiten una paz única.',
    date: 'Febrero 2026',
    verified: true
  },
  {
    id: 't-2',
    patientName: 'Ing. Rodrigo Mendoza',
    patientAge: 46,
    treatment: 'Implante Digital Guiado',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Tenía fobia al odontólogo por experiencias pasadas. La tecnología de anestesia digital y la sedación hicieron que no sintiera absolutamente nada durante la cirugía.',
    fullReview: 'El Dr. Carlos Pérez es un cirujano fuera de serie. Me explicó paso a paso en pantalla la tomografía tridimensional. Salí con mi pieza provisoria el mismo día y a las 48 horas estaba trabajando con normalidad.',
    date: 'Enero 2026',
    verified: true
  },
  {
    id: 't-3',
    patientName: 'Dra. Camila Benítez',
    patientAge: 29,
    treatment: 'Ortodoncia Invisible',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: 'Por mi trabajo no podía usar brackets tradicionales. Los alineadores transparentes pasaron desapercibidos en mis reuniones y en menos de un año mi sonrisa quedó impecable.',
    fullReview: 'El control con la Dra. Ana Martínez fue excelente y muy flexible con mis horarios. La comodidad de quitarse los alineadores para comer y cepillarse hace que valga cada centavo.',
    date: 'Diciembre 2025',
    verified: true
  }
];
