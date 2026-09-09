import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookingService } from '../../../core/services/booking.service';
import { ClinicDataService } from '../../../core/services/clinic-data.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-booking-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  template: `
    @if (bookingService.isModalOpen()) {
      <div 
        class="fixed inset-0 z-50 overflow-y-auto bg-ink-primary/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <!-- Modal Card Container -->
        <div 
          class="relative w-full max-w-2xl bg-white rounded-3xl shadow-elevated border border-border overflow-hidden animate-scaleUp"
          (click)="$event.stopPropagation()"
        >
          <!-- Header Bar -->
          <div class="px-6 py-5 border-b border-border flex items-center justify-between bg-surface-soft/80">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-secondary-dark">
                Paso {{ bookingService.currentStep() }} de 5
              </span>
              <h3 id="modal-title" class="font-serif text-xl font-bold text-ink-primary">
                {{ getStepTitle() }}
              </h3>
            </div>
            
            <button 
              type="button"
              (click)="close()"
              class="p-2 rounded-full text-ink-secondary hover:text-ink-primary hover:bg-surface-muted transition-colors focus:outline-none"
              aria-label="Cerrar modal de reserva"
            >
              <app-icon name="x" [size]="20"></app-icon>
            </button>
          </div>

          <!-- Progress Indicator Bar -->
          <div class="w-full bg-border h-1">
            <div 
              class="bg-primary h-full transition-all duration-300"
              [style.width.%]="(bookingService.currentStep() / 5) * 100"
            ></div>
          </div>

          <!-- Body Content by Step -->
          <div class="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
            
            <!-- STEP 1: Selección de tratamiento -->
            @if (bookingService.currentStep() === 1) {
              <div class="space-y-4">
                <p class="text-sm text-ink-secondary">
                  Seleccioná el motivo principal de tu consulta para asignarte el tiempo y equipamiento adecuado:
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  @for (treatment of treatmentOptions; track treatment.id) {
                    <button 
                      type="button"
                      (click)="selectTreatment(treatment.id, treatment.name)"
                      class="flex items-start p-4 rounded-2xl border text-left transition-all duration-200"
                      [class.border-primary]="selectedTreatmentId() === treatment.id"
                      [class.bg-primary-soft]="selectedTreatmentId() === treatment.id"
                      [class.ring-2]="selectedTreatmentId() === treatment.id"
                      [class.ring-primary/20]="selectedTreatmentId() === treatment.id"
                      [class.border-border]="selectedTreatmentId() !== treatment.id"
                      [class.hover:border-primary/40]="selectedTreatmentId() !== treatment.id"
                      [class.hover:bg-surface-soft]="selectedTreatmentId() !== treatment.id"
                    >
                      <div class="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center text-primary shrink-0 mr-3 mt-0.5">
                        <app-icon [name]="treatment.icon" [size]="16"></app-icon>
                      </div>
                      <div>
                        <span class="text-sm font-semibold text-ink-primary block">
                          {{ treatment.name }}
                        </span>
                        <span class="text-xs text-ink-secondary mt-0.5 block">
                          {{ treatment.description }}
                        </span>
                      </div>
                    </button>
                  }
                </div>
              </div>
            }

            <!-- STEP 2: Selección de profesional -->
            @if (bookingService.currentStep() === 2) {
              <div class="space-y-4">
                <p class="text-sm text-ink-secondary">
                  ¿Tenés preferencia por algún odontólogo o deseás el primer turno disponible?
                </p>

                <div class="space-y-3 pt-2">
                  <!-- Any Doctor option -->
                  <button 
                    type="button"
                    (click)="selectDoctor('any', 'Primer especialista disponible')"
                    class="w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-200"
                    [class.border-primary]="selectedDoctorId() === 'any'"
                    [class.bg-primary-soft]="selectedDoctorId() === 'any'"
                    [class.border-border]="selectedDoctorId() !== 'any'"
                    [class.hover:bg-surface-soft]="selectedDoctorId() !== 'any'"
                  >
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-secondary/20 text-secondary-dark flex items-center justify-center font-bold text-sm">
                        ★
                      </div>
                      <div class="text-left">
                        <span class="text-sm font-semibold text-ink-primary block">Primer especialista disponible</span>
                        <span class="text-xs text-ink-secondary">Mayor flexibilidad y rapidez en tu agendamiento</span>
                      </div>
                    </div>
                    @if (selectedDoctorId() === 'any') {
                      <app-icon name="check-circle" [size]="20" svgClass="text-primary"></app-icon>
                    }
                  </button>

                  <!-- Doctor list from service -->
                  @for (doc of clinicService.doctors(); track doc.id) {
                    <button 
                      type="button"
                      (click)="selectDoctor(doc.id, doc.name)"
                      class="w-full flex items-center justify-between p-3.5 rounded-2xl border transition-all duration-200"
                      [class.border-primary]="selectedDoctorId() === doc.id"
                      [class.bg-primary-soft]="selectedDoctorId() === doc.id"
                      [class.border-border]="selectedDoctorId() !== doc.id"
                      [class.hover:bg-surface-soft]="selectedDoctorId() !== doc.id"
                    >
                      <div class="flex items-center gap-3">
                        <img [src]="doc.image" [alt]="doc.name" class="w-10 h-10 rounded-full object-cover border border-border" />
                        <div class="text-left">
                          <span class="text-sm font-semibold text-ink-primary block">{{ doc.name }}</span>
                          <span class="text-xs text-ink-secondary">{{ doc.specialty }} • {{ doc.experienceYears }} años exp.</span>
                        </div>
                      </div>
                      @if (selectedDoctorId() === doc.id) {
                        <app-icon name="check-circle" [size]="20" svgClass="text-primary"></app-icon>
                      }
                    </button>
                  }
                </div>
              </div>
            }

            <!-- STEP 3: Fecha y Horario -->
            @if (bookingService.currentStep() === 3) {
              <div class="space-y-5">
                <p class="text-sm text-ink-secondary">
                  Elegí el día y la franja horaria que mejor se adapte a tu agenda:
                </p>

                <!-- Date selector pills -->
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                    Días disponibles esta semana
                  </label>
                  <div class="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    @for (day of availableDates; track day.value) {
                      <button 
                        type="button"
                        (click)="selectDate(day.value)"
                        class="p-3 rounded-xl border text-center transition-all duration-200"
                        [class.border-primary]="selectedDate() === day.value"
                        [class.bg-primary]="selectedDate() === day.value"
                        [class.text-white]="selectedDate() === day.value"
                        [class.border-border]="selectedDate() !== day.value"
                        [class.text-ink-primary]="selectedDate() !== day.value"
                        [class.hover:border-primary/50]="selectedDate() !== day.value"
                      >
                        <span class="text-xs uppercase font-medium block opacity-80">{{ day.dayName }}</span>
                        <span class="text-lg font-bold block">{{ day.dayNumber }}</span>
                        <span class="text-[10px] block opacity-90">{{ day.month }}</span>
                      </button>
                    }
                  </div>
                </div>

                <!-- Time slots -->
                <div>
                  <label class="block text-xs font-semibold uppercase tracking-wider text-ink-muted mb-2">
                    Horarios de atención disponibles
                  </label>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    @for (slot of availableTimeSlots; track slot) {
                      <button 
                        type="button"
                        (click)="selectTime(slot)"
                        class="py-2.5 px-3 rounded-xl border text-xs font-medium transition-all duration-200 text-center"
                        [class.border-primary]="selectedTimeSlot() === slot"
                        [class.bg-primary-soft]="selectedTimeSlot() === slot"
                        [class.text-primary-dark]="selectedTimeSlot() === slot"
                        [class.font-semibold]="selectedTimeSlot() === slot"
                        [class.border-border]="selectedTimeSlot() !== slot"
                        [class.text-ink-primary]="selectedTimeSlot() !== slot"
                        [class.hover:border-primary/40]="selectedTimeSlot() !== slot"
                      >
                        {{ slot }}
                      </button>
                    }
                  </div>
                </div>
              </div>
            }

            <!-- STEP 4: Tus Datos (Reactive Form) -->
            @if (bookingService.currentStep() === 4) {
              <form [formGroup]="patientForm" class="space-y-4">
                <p class="text-sm text-ink-secondary">
                  Completá tus datos para enviarte la confirmación del turno y recordatorios:
                </p>

                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-semibold text-ink-primary mb-1">
                      Nombre y Apellido *
                    </label>
                    <input 
                      type="text"
                      formControlName="patientName"
                      placeholder="Ej. Juan Pérez"
                      class="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                    @if (patientForm.get('patientName')?.touched && patientForm.get('patientName')?.invalid) {
                      <span class="text-xs text-rose-500 mt-1 block">Por favor ingresá tu nombre completo.</span>
                    }
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label class="block text-xs font-semibold text-ink-primary mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input 
                        type="tel"
                        formControlName="patientPhone"
                        placeholder="Ej. +595 981 123456"
                        class="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      @if (patientForm.get('patientPhone')?.touched && patientForm.get('patientPhone')?.invalid) {
                        <span class="text-xs text-rose-500 mt-1 block">Ingresá un teléfono válido.</span>
                      }
                    </div>

                    <div>
                      <label class="block text-xs font-semibold text-ink-primary mb-1">
                        Correo electrónico *
                      </label>
                      <input 
                        type="email"
                        formControlName="patientEmail"
                        placeholder="tucorreo@ejemplo.com"
                        class="w-full px-4 py-2.5 rounded-xl border border-border text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                      @if (patientForm.get('patientEmail')?.touched && patientForm.get('patientEmail')?.invalid) {
                        <span class="text-xs text-rose-500 mt-1 block">Ingresá un email válido.</span>
                      }
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-ink-primary mb-1">
                      Medio preferido de contacto
                    </label>
                    <div class="flex gap-4">
                      <label class="flex items-center gap-2 text-xs text-ink-secondary cursor-pointer">
                        <input type="radio" formControlName="preferredContactMethod" value="whatsapp" class="text-primary" />
                        <span>WhatsApp (Recomendado)</span>
                      </label>
                      <label class="flex items-center gap-2 text-xs text-ink-secondary cursor-pointer">
                        <input type="radio" formControlName="preferredContactMethod" value="call" class="text-primary" />
                        <span>Llamada telefónica</span>
                      </label>
                      <label class="flex items-center gap-2 text-xs text-ink-secondary cursor-pointer">
                        <input type="radio" formControlName="preferredContactMethod" value="email" class="text-primary" />
                        <span>Email</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-ink-primary mb-1">
                      Comentarios o síntomas (Opcional)
                    </label>
                    <textarea 
                      formControlName="notes"
                      rows="2"
                      placeholder="Contanos brevemente si sentís alguna molestia o si es tu primera visita..."
                      class="w-full px-4 py-2 rounded-xl border border-border text-sm text-ink-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    ></textarea>
                  </div>
                </div>

                <!-- Resumen de reserva preliminar -->
                <div class="p-3.5 bg-surface-soft rounded-xl border border-border/80 text-xs space-y-1 text-ink-secondary">
                  <div class="flex justify-between">
                    <span>Tratamiento:</span>
                    <strong class="text-ink-primary">{{ bookingService.draftBooking().treatmentName || 'Consulta General' }}</strong>
                  </div>
                  <div class="flex justify-between">
                    <span>Especialista:</span>
                    <strong class="text-ink-primary">{{ bookingService.draftBooking().doctorName }}</strong>
                  </div>
                  <div class="flex justify-between">
                    <span>Fecha y Hora:</span>
                    <strong class="text-primary">{{ bookingService.draftBooking().date }} a las {{ bookingService.draftBooking().timeSlot }}</strong>
                  </div>
                </div>
              </form>
            }

            <!-- STEP 5: Confirmación Exitosa -->
            @if (bookingService.currentStep() === 5) {
              <div class="text-center py-4 space-y-5">
                <div class="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                  <app-icon name="check-circle" [size]="32"></app-icon>
                </div>

                <div>
                  <h4 class="font-serif text-2xl font-bold text-ink-primary">
                    ¡Solicitud de turno enviada con éxito!
                  </h4>
                  <p class="text-sm text-ink-secondary mt-1.5 max-w-md mx-auto">
                    Tu solicitud ha sido registrada en nuestro sistema clínico. Te contactaremos a la brevedad para validar los detalles.
                  </p>
                </div>

                <!-- Código y detalles -->
                @if (bookingService.confirmation(); as conf) {
                  <div class="p-4 bg-surface-soft rounded-2xl border border-border text-left max-w-md mx-auto space-y-2 text-xs">
                    <div class="flex justify-between items-center pb-2 border-b border-border">
                      <span class="text-ink-muted">Código de turno:</span>
                      <span class="font-mono font-bold text-sm text-primary px-2 py-0.5 rounded bg-primary-soft">
                        {{ conf.confirmationCode }}
                      </span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-ink-muted">Paciente:</span>
                      <span class="font-semibold text-ink-primary">{{ conf.details.patientName }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-ink-muted">Tratamiento:</span>
                      <span class="font-semibold text-ink-primary">{{ conf.details.treatmentName }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-ink-muted">Día y Horario:</span>
                      <span class="font-semibold text-primary">{{ conf.details.date }} • {{ conf.details.timeSlot }} hs</span>
                    </div>
                  </div>
                }

                <div class="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a 
                    [href]="whatsappConfirmationUrl()" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary"
                  >
                    <app-icon name="whatsapp" [size]="18" svgClass="text-white"></app-icon>
                    <span>Confirmar ahora por WhatsApp</span>
                  </a>
                  <button 
                    type="button" 
                    (click)="finish()"
                    class="btn-secondary"
                  >
                    Finalizar y cerrar
                  </button>
                </div>
              </div>
            }

          </div>

          <!-- Footer Actions (Steps 1 to 4) -->
          @if (bookingService.currentStep() < 5) {
            <div class="px-6 py-4 border-t border-border bg-surface-soft/60 flex items-center justify-between">
              <button 
                type="button"
                (click)="prevStep()"
                [disabled]="bookingService.currentStep() === 1"
                class="btn-secondary py-2.5 px-4 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Volver
              </button>

              @if (bookingService.currentStep() < 4) {
                <button 
                  type="button"
                  (click)="nextStep()"
                  [disabled]="!isCurrentStepValid()"
                  class="btn-primary py-2.5 px-5 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Continuar</span>
                  <app-icon name="arrow-right" [size]="14"></app-icon>
                </button>
              } @else {
                <button 
                  type="button"
                  (click)="submitForm()"
                  [disabled]="patientForm.invalid || bookingService.isSubmitting()"
                  class="btn-primary py-2.5 px-6 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  @if (bookingService.isSubmitting()) {
                    <span>Enviando solicitud...</span>
                  } @else {
                    <span>Confirmar turno</span>
                    <app-icon name="check" [size]="14"></app-icon>
                  }
                </button>
              }
            </div>
          }

        </div>
      </div>
    }
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleUp {
      from { opacity: 0; transform: scale(0.96) translateY(8px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.25s ease-out forwards;
    }
    .animate-scaleUp {
      animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class BookingModalComponent implements OnInit {
  readonly bookingService = inject(BookingService);
  readonly clinicService = inject(ClinicDataService);
  private readonly fb = inject(FormBuilder);

  readonly selectedTreatmentId = signal<string>('consulta-general');
  readonly selectedDoctorId = signal<string>('any');
  readonly selectedDate = signal<string>('');
  readonly selectedTimeSlot = signal<string>('');

  readonly treatmentOptions = [
    { id: 'consulta-general', name: 'Consulta Diagnóstica', description: 'Revisión completa, fotos y plan terapéutico', icon: 'stethoscope' },
    { id: 'limpieza-airflow', name: 'Profilaxis & Limpieza Profunda', description: 'Eliminación de sarro con tecnología AirFlow sin dolor', icon: 'sparkles' },
    { id: 'ortodoncia', name: 'Ortodoncia & Alineadores', description: 'Alineación de piezas y corrección de mordida', icon: 'smile' },
    { id: 'implantes', name: 'Implantes Dentales', description: 'Rehabilitación definitiva guiada por 3D', icon: 'shield-check' },
    { id: 'estetica', name: 'Diseño de Sonrisa & Carillas', description: 'Carillas cerámicas y armonización estética', icon: 'gem' },
    { id: 'blanqueamiento', name: 'Blanqueamiento Zoom®', description: 'Aclaramiento dental en sesión única', icon: 'sun' },
    { id: 'urgencia', name: 'Urgencia por Dolor', description: 'Atención prioritaria del equipo de guardia', icon: 'heart-pulse' }
  ];

  readonly availableDates = [
    { value: 'Mañana, Jueves 10 Sep', dayName: 'Jue', dayNumber: '10', month: 'Sep' },
    { value: 'Viernes 11 Sep', dayName: 'Vie', dayNumber: '11', month: 'Sep' },
    { value: 'Sábado 12 Sep', dayName: 'Sáb', dayNumber: '12', month: 'Sep' },
    { value: 'Lunes 14 Sep', dayName: 'Lun', dayNumber: '14', month: 'Sep' },
    { value: 'Martes 15 Sep', dayName: 'Mar', dayNumber: '15', month: 'Sep' },
  ];

  readonly availableTimeSlots = [
    '08:30', '09:30', '10:30', '11:30', '14:30', '15:30', '16:30', '17:30'
  ];

  patientForm!: FormGroup;

  ngOnInit() {
    this.patientForm = this.fb.group({
      patientName: ['', [Validators.required, Validators.minLength(3)]],
      patientPhone: ['', [Validators.required, Validators.minLength(7)]],
      patientEmail: ['', [Validators.required, Validators.email]],
      preferredContactMethod: ['whatsapp', Validators.required],
      notes: ['']
    });

    // Default preselection
    this.selectedDate.set(this.availableDates[0].value);
    this.selectedTimeSlot.set(this.availableTimeSlots[0]);
    this.bookingService.updateDraft({
      treatmentId: this.treatmentOptions[0].id,
      treatmentName: this.treatmentOptions[0].name,
      doctorId: 'any',
      doctorName: 'Primer especialista disponible',
      date: this.availableDates[0].value,
      timeSlot: this.availableTimeSlots[0]
    });
  }

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.bookingService.isModalOpen()) {
      this.close();
    }
  }

  getStepTitle(): string {
    switch (this.bookingService.currentStep()) {
      case 1: return '¿Qué necesitás atender?';
      case 2: return 'Elegí tu profesional';
      case 3: return 'Elegí fecha y horario';
      case 4: return 'Tus datos de contacto';
      case 5: return '¡Turno solicitado!';
      default: return 'Reserva de turno';
    }
  }

  selectTreatment(id: string, name: string) {
    this.selectedTreatmentId.set(id);
    this.bookingService.updateDraft({ treatmentId: id, treatmentName: name });
  }

  selectDoctor(id: string, name: string) {
    this.selectedDoctorId.set(id);
    this.bookingService.updateDraft({ doctorId: id, doctorName: name });
  }

  selectDate(dateStr: string) {
    this.selectedDate.set(dateStr);
    this.bookingService.updateDraft({ date: dateStr });
  }

  selectTime(timeStr: string) {
    this.selectedTimeSlot.set(timeStr);
    this.bookingService.updateDraft({ timeSlot: timeStr });
  }

  isCurrentStepValid(): boolean {
    const step = this.bookingService.currentStep();
    if (step === 1) return !!this.selectedTreatmentId();
    if (step === 2) return !!this.selectedDoctorId();
    if (step === 3) return !!this.selectedDate() && !!this.selectedTimeSlot();
    return true;
  }

  nextStep() {
    this.bookingService.nextStep();
  }

  prevStep() {
    this.bookingService.prevStep();
  }

  async submitForm() {
    if (this.patientForm.invalid) {
      this.patientForm.markAllAsTouched();
      return;
    }

    const formVal = this.patientForm.value;
    this.bookingService.updateDraft({
      patientName: formVal.patientName,
      patientPhone: formVal.patientPhone,
      patientEmail: formVal.patientEmail,
      preferredContactMethod: formVal.preferredContactMethod,
      notes: formVal.notes
    });

    await this.bookingService.submitBooking();
  }

  whatsappConfirmationUrl(): string {
    const conf = this.bookingService.confirmation();
    const draft = this.bookingService.draftBooking();
    const code = conf ? conf.confirmationCode : 'WEB';
    const msg = `Hola Clínica Sonrisa, reservé un turno con el código ${code} para ${draft.treatmentName} el día ${draft.date} a las ${draft.timeSlot}. Paciente: ${draft.patientName}.`;
    return `https://wa.me/${this.clinicService.config().whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }

  close() {
    this.bookingService.closeModal();
  }

  finish() {
    this.bookingService.closeModal();
    this.bookingService.resetBooking();
  }
}
