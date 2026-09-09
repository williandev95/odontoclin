import { BeforeAfterCase } from '../models/common.models';

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'caso-carillas-1',
    treatmentName: 'Diseño de Sonrisa & Carillas Cerámicas E-Max',
    category: 'Estética Dental',
    beforeImage: 'https://images.unsplash.com/photo-1571772935541-0738e4a9e22c?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80',
    description: 'Reconstrucción de bordes incisales desgastados, cierre de diastemas y homogeneización cromática manteniendo la naturalidad de la encía.',
    durationText: '3 sesiones (21 días)',
    doctorInCharge: 'Dra. María González'
  },
  {
    id: 'caso-ortodoncia-invisible',
    treatmentName: 'Alineación de Arcada con Ortodoncia Invisible',
    category: 'Ortodoncia',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80',
    description: 'Corrección de apiñamiento severo superior e inferior y nivelación de plano de mordida sin brackets metálicos.',
    durationText: '11 meses',
    doctorInCharge: 'Dra. Ana Martínez'
  },
  {
    id: 'caso-implante-estetico',
    treatmentName: 'Rehabilitación Superior con Implante Inmediato',
    category: 'Implantología',
    beforeImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80',
    afterImage: 'https://images.unsplash.com/photo-1571772935541-0738e4a9e22c?auto=format&fit=crop&w=1000&q=80',
    description: 'Colocación guiada de implante de titanio con corona de circonio atornillada de emergencia estética idéntica a la pieza contigua.',
    durationText: 'Cirugía guiada + corona definitiva',
    doctorInCharge: 'Dr. Carlos Pérez'
  }
];
