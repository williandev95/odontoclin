import { Injectable, signal } from '@angular/core';
import { AppointmentRequest, AppointmentConfirmation } from '../models/common.models';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  readonly isModalOpen = signal<boolean>(false);
  readonly currentStep = signal<number>(1);
  readonly isSubmitting = signal<boolean>(false);

  readonly draftBooking = signal<Partial<AppointmentRequest>>({
    treatmentId: '',
    treatmentName: '',
    doctorId: 'any',
    doctorName: 'Primer especialista disponible',
    date: '',
    timeSlot: '',
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    notes: '',
    preferredContactMethod: 'whatsapp'
  });

  readonly confirmation = signal<AppointmentConfirmation | null>(null);

  openModal(preselectedTreatmentId?: string, preselectedDoctorId?: string) {
    if (preselectedTreatmentId || preselectedDoctorId) {
      this.updateDraft({
        treatmentId: preselectedTreatmentId || this.draftBooking().treatmentId,
        doctorId: preselectedDoctorId || this.draftBooking().doctorId
      });
    }
    this.isModalOpen.set(true);
    // Lock background body scroll
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }

  closeModal() {
    this.isModalOpen.set(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  }

  setStep(step: number) {
    if (step >= 1 && step <= 5) {
      this.currentStep.set(step);
    }
  }

  nextStep() {
    if (this.currentStep() < 5) {
      this.currentStep.update(s => s + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 1) {
      this.currentStep.update(s => s - 1);
    }
  }

  updateDraft(data: Partial<AppointmentRequest>) {
    this.draftBooking.update(current => ({ ...current, ...data }));
  }

  resetBooking() {
    this.currentStep.set(1);
    this.isSubmitting.set(false);
    this.draftBooking.set({
      treatmentId: '',
      treatmentName: '',
      doctorId: 'any',
      doctorName: 'Primer especialista disponible',
      date: '',
      timeSlot: '',
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      notes: '',
      preferredContactMethod: 'whatsapp'
    });
    this.confirmation.set(null);
  }

  async submitBooking(): Promise<AppointmentConfirmation> {
    this.isSubmitting.set(true);

    // Simulate backend API call (architecture ready for Spring Boot REST API integration)
    return new Promise((resolve) => {
      setTimeout(() => {
        const fullDetails = this.draftBooking() as AppointmentRequest;
        const confirmationCode = 'DNT-' + Math.floor(100000 + Math.random() * 900000);
        
        const result: AppointmentConfirmation = {
          confirmationCode,
          status: 'PENDING_CONFIRMATION',
          createdAt: new Date().toISOString(),
          details: fullDetails
        };

        this.confirmation.set(result);
        this.isSubmitting.set(false);
        this.setStep(5);
        resolve(result);
      }, 700);
    });
  }
}
