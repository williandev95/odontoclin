import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../core/services/booking.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about-clinic-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="nosotros" class="section-padding bg-white overflow-hidden">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Image Composition Left -->
          <div class="lg:col-span-6 relative">
            <div class="relative">
              
              <!-- Main clinic environment photo -->
              <div class="rounded-3xl overflow-hidden shadow-elevated border-2 border-border/80 aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1000&q=80" 
                  alt="Instalaciones confortables y modernas de la clínica" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <!-- Offset Secondary floating photo -->
              <div class="hidden sm:block absolute -bottom-8 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80" 
                  alt="Cuidado del paciente en gabinete odontológico" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <!-- Badge of experience -->
              <div class="absolute -top-4 -left-4 bg-primary text-white p-4 rounded-2xl shadow-soft">
                <span class="text-xs uppercase tracking-widest font-semibold block text-secondary-light">Compromiso</span>
                <span class="font-serif text-xl font-bold">100% Calidad Humana</span>
              </div>

            </div>
          </div>

          <!-- Content Right -->
          <div class="lg:col-span-6 space-y-6 lg:pl-4">
            
            <div class="inline-block">
              <span class="badge-gold">Filosofía & Cuidado</span>
            </div>

            <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink-primary tracking-tight leading-[1.18]">
              Más que una clínica, un espacio pensado para <span class="italic text-primary font-normal">cuidar de vos.</span>
            </h2>

            <p class="text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
              Creemos firmemente que una experiencia odontológica memorable comienza mucho antes de iniciar el tratamiento. Diseñamos un ambiente donde la tranquilidad, el respeto por tus tiempos y la empatía médica son la prioridad absoluta.
            </p>

            <!-- Value Pillars -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <app-icon name="user" [size]="18"></app-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-ink-primary">Atención Personalizada</h4>
                  <p class="text-xs text-ink-secondary mt-0.5 leading-relaxed">Turnos exclusivos y tiempo dedicado sin consultas aceleradas.</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <app-icon name="award" [size]="18"></app-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-ink-primary">Especialistas Certificados</h4>
                  <p class="text-xs text-ink-secondary mt-0.5 leading-relaxed">Odontólogos con formación de posgrado internacional continua.</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <app-icon name="sliders" [size]="18"></app-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-ink-primary">Tecnología de Vanguardia</h4>
                  <p class="text-xs text-ink-secondary mt-0.5 leading-relaxed">Diagnóstico 3D, escáner intraoral y sedación consciente.</p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <div class="w-9 h-9 rounded-xl bg-primary-soft text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <app-icon name="heart-pulse" [size]="18"></app-icon>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-ink-primary">Seguimiento Continuo</h4>
                  <p class="text-xs text-ink-secondary mt-0.5 leading-relaxed">Acompañamiento post-tratamiento y chequeos preventivos periódicos.</p>
                </div>
              </div>
            </div>

            <!-- Action -->
            <div class="pt-4 flex items-center gap-4">
              <button 
                type="button"
                (click)="bookingService.openModal()"
                class="btn-primary"
              >
                <span>Conocé nuestra clínica</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutClinicComponent {
  readonly bookingService = inject(BookingService);
}
