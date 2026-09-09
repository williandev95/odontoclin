import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { BookingService } from '../../../../core/services/booking.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { Treatment } from '../../../../core/models/treatment.model';

@Component({
  selector: 'app-treatments-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section id="tratamientos" class="section-padding bg-surface-soft">
      <div class="container-custom">
        
        <!-- Section Header -->
        <app-section-heading
          eyebrow="Especialidades Clínicas"
          title="Todo lo que tu sonrisa necesita."
          subtitle="Tratamientos personalizados, mínimamente invasivos y ejecutados por especialistas certificados."
          [centered]="true"
        ></app-section-heading>

        <!-- Asymmetric Editorial Grid (Not generic 6 identical cards) -->
        <div class="mt-14 space-y-6">
          
          <!-- Top Row: Two Featured Cards (Implantología & Estética Dental) -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            <!-- Featured Card 1: Implantología (Span 7) -->
            @if (getTreatment('implantologia'); as item) {
              <div class="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-border shadow-soft group transition-all duration-300 hover:shadow-premium flex flex-col justify-between">
                <div class="grid grid-cols-1 md:grid-cols-12 h-full">
                  <div class="md:col-span-6 p-7 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center gap-2 mb-3">
                        <span class="badge-editorial">{{ item.highlightBadge }}</span>
                        <span class="text-xs text-ink-muted">{{ item.category }}</span>
                      </div>
                      <h3 class="font-serif text-2xl sm:text-3xl font-bold text-ink-primary group-hover:text-primary transition-colors">
                        {{ item.name }}
                      </h3>
                      <p class="text-sm text-ink-secondary mt-3 leading-relaxed">
                        {{ item.shortDescription }}
                      </p>
                    </div>

                    <div class="pt-6">
                      <div class="space-y-2 mb-6">
                        @for (benefit of item.benefits.slice(0, 2); track benefit) {
                          <div class="flex items-center gap-2 text-xs text-ink-primary">
                            <app-icon name="check-circle" [size]="15" svgClass="text-secondary-dark shrink-0"></app-icon>
                            <span>{{ benefit }}</span>
                          </div>
                        }
                      </div>

                      <div class="flex items-center gap-3">
                        <button 
                          type="button" 
                          (click)="openDetail(item)"
                          class="text-xs font-semibold text-primary hover:text-primary-dark underline underline-offset-4 flex items-center gap-1"
                        >
                          <span>Conocer más</span>
                          <app-icon name="chevron-right" [size]="14"></app-icon>
                        </button>
                        <button 
                          type="button"
                          (click)="bookTreatment(item.id)"
                          class="btn-primary py-2 px-4 text-xs font-semibold"
                        >
                          Reservar turno
                        </button>
                      </div>
                    </div>
                  </div>

                  <div class="md:col-span-6 relative aspect-square md:aspect-auto overflow-hidden bg-surface-muted">
                    <img 
                      [src]="item.image" 
                      [alt]="item.name" 
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            }

            <!-- Featured Card 2: Estética Dental & Carillas (Span 5) -->
            @if (getTreatment('estetica-dental'); as item) {
              <div class="lg:col-span-5 bg-white rounded-3xl overflow-hidden border border-border shadow-soft group transition-all duration-300 hover:shadow-premium flex flex-col justify-between">
                <div class="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                  <img 
                    [src]="item.image" 
                    [alt]="item.name" 
                    class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="badge-gold">{{ item.highlightBadge }}</span>
                  </div>
                </div>

                <div class="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span class="text-xs text-ink-muted uppercase font-semibold tracking-wider block mb-1">
                      {{ item.category }}
                    </span>
                    <h3 class="font-serif text-2xl font-bold text-ink-primary group-hover:text-primary transition-colors">
                      {{ item.name }}
                    </h3>
                    <p class="text-sm text-ink-secondary mt-2.5 leading-relaxed">
                      {{ item.shortDescription }}
                    </p>
                  </div>

                  <div class="pt-6 flex items-center justify-between border-t border-border mt-4">
                    <button 
                      type="button" 
                      (click)="openDetail(item)"
                      class="text-xs font-semibold text-primary hover:text-primary-dark underline underline-offset-4 flex items-center gap-1"
                    >
                      <span>Detalles del tratamiento</span>
                      <app-icon name="arrow-right" [size]="14"></app-icon>
                    </button>
                    <button 
                      type="button"
                      (click)="bookTreatment(item.id)"
                      class="btn-primary py-2 px-4 text-xs font-semibold"
                    >
                      Turno
                    </button>
                  </div>
                </div>
              </div>
            }

          </div>

          <!-- Bottom Row: 4 Specialty Cards (Ortodoncia, Blanqueamiento, Endodoncia, Integral) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (item of secondaryTreatments(); track item.id) {
              <div class="bg-white rounded-3xl p-6 border border-border shadow-soft transition-all duration-300 hover:shadow-premium hover:-translate-y-1 flex flex-col justify-between group">
                <div>
                  <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-5 bg-surface-muted">
                    <img 
                      [src]="item.image" 
                      [alt]="item.name" 
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div class="absolute top-3 left-3">
                      <span class="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-primary shadow-sm">
                        {{ item.highlightBadge }}
                      </span>
                    </div>
                  </div>

                  <span class="text-[11px] font-semibold uppercase tracking-wider text-secondary-dark block">
                    {{ item.category }}
                  </span>
                  <h4 class="font-serif text-lg font-bold text-ink-primary mt-1 group-hover:text-primary transition-colors leading-snug">
                    {{ item.name }}
                  </h4>
                  <p class="text-xs text-ink-secondary mt-2 leading-relaxed">
                    {{ item.shortDescription }}
                  </p>
                </div>

                <div class="pt-5 mt-4 border-t border-border flex items-center justify-between">
                  <button 
                    type="button"
                    (click)="openDetail(item)"
                    class="text-xs font-medium text-ink-secondary hover:text-primary flex items-center gap-1"
                  >
                    <span>Conocer más</span>
                    <app-icon name="chevron-right" [size]="14"></app-icon>
                  </button>

                  <button 
                    type="button"
                    (click)="bookTreatment(item.id)"
                    class="text-xs font-semibold text-primary hover:text-primary-dark"
                  >
                    Agendar →
                  </button>
                </div>
              </div>
            }
          </div>

        </div>

      </div>

      <!-- Treatment Detail Modal / Drawer -->
      @if (selectedDetail(); as t) {
        <div 
          class="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          (click)="closeDetail()"
        >
          <div 
            class="relative w-full max-w-xl bg-white rounded-3xl shadow-elevated border border-border overflow-hidden"
            (click)="$event.stopPropagation()"
          >
            <div class="relative h-48 sm:h-56">
              <img [src]="t.image" [alt]="t.name" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <button 
                type="button" 
                (click)="closeDetail()" 
                class="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-ink-primary flex items-center justify-center transition-colors shadow-sm"
                aria-label="Cerrar detalle"
              >
                <app-icon name="x" [size]="18"></app-icon>
              </button>

              <div class="absolute bottom-4 left-6 right-6 text-white">
                <span class="text-xs uppercase font-semibold tracking-wider text-secondary-light">{{ t.category }}</span>
                <h3 class="font-serif text-2xl font-bold leading-tight">{{ t.name }}</h3>
              </div>
            </div>

            <div class="p-6 sm:p-8 space-y-5">
              <p class="text-sm text-ink-secondary leading-relaxed">
                {{ t.fullDescription }}
              </p>

              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-ink-primary mb-3">
                  Beneficios clínicos destacados
                </h4>
                <ul class="space-y-2">
                  @for (benefit of t.benefits; track benefit) {
                    <li class="flex items-start gap-2.5 text-xs text-ink-secondary">
                      <app-icon name="check-circle" [size]="16" svgClass="text-primary shrink-0 mt-0.5"></app-icon>
                      <span>{{ benefit }}</span>
                    </li>
                  }
                </ul>
              </div>

              <div class="pt-4 border-t border-border flex items-center justify-between">
                <span class="text-xs text-ink-muted">Duración aprox.: {{ t.durationMinutes }} minutos</span>
                <button 
                  type="button"
                  (click)="bookFromDetail(t.id)"
                  class="btn-primary py-2.5 px-6 text-xs font-semibold"
                >
                  Agendar este tratamiento
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  `
})
export class TreatmentsComponent {
  private readonly clinicService = inject(ClinicDataService);
  private readonly bookingService = inject(BookingService);

  readonly treatments = this.clinicService.treatments;
  readonly selectedDetail = signal<Treatment | null>(null);

  getTreatment(id: string): Treatment | undefined {
    return this.treatments().find(t => t.id === id);
  }

  secondaryTreatments() {
    return this.treatments().filter(t => t.id !== 'implantologia' && t.id !== 'estetica-dental');
  }

  openDetail(treatment: Treatment) {
    this.selectedDetail.set(treatment);
  }

  closeDetail() {
    this.selectedDetail.set(null);
  }

  bookTreatment(treatmentId: string) {
    this.bookingService.openModal(treatmentId);
  }

  bookFromDetail(treatmentId: string) {
    this.closeDetail();
    this.bookingService.openModal(treatmentId);
  }
}
