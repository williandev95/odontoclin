export interface BeforeAfterCase {
  id: string;
  treatmentName: string;
  category: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  durationText: string;
  doctorInCharge: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  patientAge?: number;
  treatment: string;
  avatarUrl: string;
  rating: number;
  quote: string;
  fullReview: string;
  date: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'turnos' | 'tratamientos' | 'pago';
}

export interface AppointmentRequest {
  treatmentId: string;
  treatmentName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  notes?: string;
  preferredContactMethod: 'whatsapp' | 'call' | 'email';
}

export interface AppointmentConfirmation {
  confirmationCode: string;
  status: 'PENDING_CONFIRMATION' | 'CONFIRMED';
  createdAt: string;
  details: AppointmentRequest;
}
