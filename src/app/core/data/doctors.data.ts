import { Doctor } from '../models/doctor.model';

export const DOCTORS_DATA: Doctor[] = [
  {
    id: 'dra-maria-gonzalez',
    name: 'Dra. María González',
    title: 'Especialista en Odontología Estética & Biomimética',
    specialty: 'Odontología Estética',
    experienceYears: 11,
    licenseNumber: 'Reg. Prof. N° 4.821',
    bio: 'Pionera en técnicas de estratificación natural y carillas cerámicas sin desgaste agresivo. Certificada por el Instituto DSD (Digital Smile Design).',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80',
    education: [
      'Doctora en Odontología (Universidad Nacional)',
      'Máster en Odontología Restauradora y Estética (Madrid, España)',
      'Miembro Titular de la Academia Ibero-Latinoamericana de Estética Dental'
    ],
    availableDays: ['Lunes', 'Martes', 'Miércoles', 'Jueves'],
    featured: true
  },
  {
    id: 'dr-carlos-perez',
    name: 'Dr. Carlos Pérez',
    title: 'Cirujano Implantólogo & Rehabilitador Oral',
    specialty: 'Implantología Digital',
    experienceYears: 14,
    licenseNumber: 'Reg. Prof. N° 3.910',
    bio: 'Experto en cirugía mínimamente invasiva guiada por computadora, carga inmediata y regeneración ósea tridimensional con factores de crecimiento.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80',
    education: [
      'Especialista en Implantología Quirúrgica y Prótesis sobre Implantes',
      'Fellowship en Cirugía Maxilofacial Reconstructiva (São Paulo, Brasil)',
      'Docente universitario de postgrado en Cirugía Oral'
    ],
    availableDays: ['Lunes', 'Miércoles', 'Viernes'],
    featured: true
  },
  {
    id: 'dra-ana-martinez',
    name: 'Dra. Ana Martínez',
    title: 'Ortodoncista Clínica & Especialista Invisalign® Diamond',
    specialty: 'Ortodoncia Invisible',
    experienceYears: 9,
    licenseNumber: 'Reg. Prof. N° 5.124',
    bio: 'Enfocada en armonía facial, oclusión funcional y alineación invisible tanto en adolescentes como en adultos exigentes.',
    image: 'https://images.unsplash.com/photo-1594824813571-638f02614d3f?auto=format&fit=crop&w=700&q=80',
    education: [
      'Especialista en Ortodoncia y Ortopedia Dentomaxilofacial',
      'Certificación Internacional Invisalign® Diamond Provider',
      'Diploma en biomecánica con mini-implantes ortodóncicos'
    ],
    availableDays: ['Martes', 'Jueves', 'Sábados'],
    featured: true
  },
  {
    id: 'dr-javier-benitez',
    name: 'Dr. Javier Benítez',
    title: 'Especialista en Endodoncia Microscópica',
    specialty: 'Endodoncia & Dolor Orofacial',
    experienceYears: 12,
    licenseNumber: 'Reg. Prof. N° 4.102',
    bio: 'Dedicado a la conservación biológica del diente mediante magnificación óptica avanzada Zeiss y resolución de casos complejos de retratamiento.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=700&q=80',
    education: [
      'Especialidad en Endodoncia Clínica con Microscopía Operatoria',
      'Capacitación continua en Anestesia Digital sin dolor',
      'Miembro de la Sociedad de Endodoncia'
    ],
    availableDays: ['Lunes', 'Miércoles', 'Jueves', 'Viernes'],
    featured: false
  }
];
