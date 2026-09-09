import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { BookingService } from '../../../../core/services/booking.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { Doctor } from '../../../../core/models/doctor.model';

@Component({
  selector: 'app-doctors-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section id="especialistas" class="section-padding bg-white">
      <div class="container-custom">
        
        <app-section-heading
          eyebrow="Cuerpo Médico"
          title="Especialistas que cuidan tu sonrisa."
          subtitle="Profesionales con formación médica de posgrado continuo, pasión por el detalle estético y un trato cálido y empático."
          [centered]="true"
        ></app-section-heading>

        <!-- Doctors Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          @for (doc of doctors(); track doc.id) {
            <div class="group bg-white rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between">
              
              <!-- Doctor Portrait Frame with smooth zoom on hover -->
              <div class="relative aspect-[3/4] overflow-hidden bg-surface-muted cursor-pointer" (click)="openDoctorProfile(doc)">
                <img 
                  [src]="doc.image" 
                  [alt]="doc.name"
                  class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span class="text-xs font-semibold text-white bg-primary/80 backdrop-blur-sm px-3 py-1.5 rounded-full inline-flex items-center gap-1">
                    <span>Ver perfil profesional</span>
                    <app-icon name="arrow-right" [size]="14"></app-icon>
                  </span>
                </div>

                <div class="absolute top-4 right-4">
                  <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-ink-primary shadow-sm border border-border">
                    +{{ doc.experienceYears }} años exp.
                  </span>
                </div>
              </div>

              <!-- Doctor Card Body -->
              <div class="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <span class="text-xs font-semibold text-secondary-dark uppercase tracking-wider block">
                    {{ doc.specialty }}
                  </span>
                  <h3 class="font-serif text-xl font-bold text-ink-primary mt-1 group-hover:text-primary transition-colors">
                    {{ doc.name }}
                  </h3>
                  <p class="text-xs text-ink-secondary mt-2 line-clamp-2 leading-relaxed">
                    {{ doc.bio }}
                  </p>
                </div>

                <div class="pt-5 mt-4 border-t border-border flex items-center justify-between">
                  <button 
                    type="button" 
                    (click)="openDoctorProfile(doc)"
                    class="text-xs font-medium text-ink-secondary hover:text-primary transition-colors"
                  >
                    Currículum
                  </button>
                  <button 
                    type="button"
                    (click)="bookWithDoctor(doc.id)"
                    class="btn-primary py-2 px-3.5 text-xs font-semibold"
                  >
                    Agendar turno
                  </button>
                </div>
              </div>

            </div>
          }
        </div>

      </div>

      <!-- Doctor Profile Modal -->
      @if (selectedDoctor(); as doc) {
        <div 
          class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          (click)="closeDoctorProfile()"
        >
          <div 
            class="relative w-full max-w-lg bg-white rounded-3xl shadow-elevated border border-border overflow-hidden"
            (click)="$event.stopPropagation()"
          >
            <!-- Close Button -->
            <button 
              type="button" 
              (click)="closeDoctorProfile()" 
              class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 text-ink-primary flex items-center justify-center shadow-sm hover:bg-white"
              aria-label="Cerrar modal"
            >
              <app-icon name="x" [size]="18"></app-icon>
            </button>

            <div class="p-6 sm:p-8 space-y-5">
              <div class="flex items-center gap-4">
                <img [src]="doc.image" [alt]="doc.name" class="w-20 h-20 rounded-2xl object-cover border border-border shadow-soft" />
                <div>
                  <span class="badge-editorial">{{ doc.specialty }}</span>
                  <h3 class="font-serif text-2xl font-bold text-ink-primary mt-1">{{ doc.name }}</h3>
                  <span class="text-xs text-ink-secondary block">{{ doc.licenseNumber }} • +{{ doc.experienceYears }} años de experiencia</span>
                </div>
              </div>

              <p class="text-sm text-ink-secondary leading-relaxed">
                {{ doc.bio }}
              </p>

              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-ink-primary mb-2">Formación Académica</h4>
                <ul class="space-y-1.5 text-xs text-ink-secondary">
                  @for (edu of doc.education; track edu) {
                    <li class="flex items-start gap-2">
                      <app-icon name="award" [size]="14" svgClass="text-secondary shrink-0 mt-0.5"></app-icon>
                      <span>{{ edu }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="p-3.5 bg-surface-soft rounded-xl border border-border text-xs text-ink-secondary flex items-center justify-between">
                <span>Días de atención habitual:</span>
                <strong class="text-primary">{{ doc.availableDays.join(', ') }}</strong>
              </div>

              <div class="pt-2">
                <button 
                  type="button" 
                  (click)="bookFromProfile(doc.id)"
                  class="btn-primary w-full py-3 text-sm"
                >
                  <span>Reservar turno con {{ doc.name }}</span>
                  <app-icon name="arrow-right" [size]="16"></app-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class DoctorsComponent {
  private readonly clinicService = inject(ClinicDataService);
  private readonly bookingService = inject(BookingService);

  readonly doctors = this.clinicService.doctors;
  readonly selectedDoctor = signal<Doctor | null>(null);

  openDoctorProfile(doctor: Doctor) {
    this.selectedDoctor.set(doctor);
  }

  closeDoctorProfile() {
    this.selectedDoctor.set(null);
  }

  bookWithDoctor(doctorId: string) {
    this.bookingService.openModal(undefined, doctorId);
  }

  bookFromProfile(doctorId: string) {
    this.closeDoctorProfile();
    this.bookingService.openModal(undefined, doctorId);
  }
}
