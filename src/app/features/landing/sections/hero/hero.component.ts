import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { BookingService } from '../../../../core/services/booking.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="inicio" class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      
      <!-- Subtle ambient background gradients -->
      <div class="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/2 left-0 -ml-24 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Editorial Left Copy -->
          <div class="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            <!-- Eyebrow badge -->
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE3] border border-[#E8DCC2] text-[#84662E] text-xs font-semibold uppercase tracking-widest shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-secondary-dark animate-pulse"></span>
              <span>Odontología Moderna & Digital</span>
            </div>

            <!-- Main Headline in Playfair Display -->
            <h1 class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-ink-primary tracking-tight leading-[1.12]">
              Una sonrisa saludable <span class="italic font-normal text-primary underline decoration-secondary decoration-2 underline-offset-8">cambia la forma</span> en que ves el mundo.
            </h1>

            <!-- Subheadline -->
            <p class="text-lg sm:text-xl text-ink-secondary leading-relaxed max-w-2xl font-normal">
              Combinamos experiencia médica de primer nivel, tecnología 3D y atención humana para cuidar tu sonrisa en cada etapa de tu vida.
            </p>

            <!-- Dual Action CTAs -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button 
                type="button"
                (click)="openBooking()"
                class="btn-primary py-4 px-8 text-base shadow-soft group"
                id="hero-book-btn"
              >
                <span>Reservar mi turno</span>
                <app-icon name="arrow-right" [size]="18" svgClass="transition-transform duration-300 group-hover:translate-x-1"></app-icon>
              </button>

              <a 
                href="#tratamientos"
                (click)="scrollToTreatments($event)"
                class="btn-secondary py-4 px-7 text-base text-center"
              >
                <span>Conocer tratamientos</span>
              </a>
            </div>

            <!-- Microcopy trust points -->
            <div class="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ink-secondary font-medium">
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="15" svgClass="text-emerald-600"></app-icon>
                Respuesta rápida y confirmación online
              </span>
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="15" svgClass="text-emerald-600"></app-icon>
                Atención personalizada sin esperas
              </span>
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="15" svgClass="text-emerald-600"></app-icon>
                Diagnóstico digital en 1ª consulta
              </span>
            </div>

          </div>

          <!-- Editorial Right Imagery & Floating Badges -->
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              
              <!-- Main Hero Image Frame -->
              <div class="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/5] bg-surface-muted group">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85" 
                  alt="Instalaciones y atención odontológica moderna"
                  class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              </div>

              <!-- Floating Trust Badge: Top Right -->
              <div class="absolute -top-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-elevated border border-border/80 flex items-center gap-3 animate-floatSlow">
                <div class="w-11 h-11 rounded-xl bg-[#F9F5EC] border border-[#EADBBF] text-[#916F2E] flex items-center justify-center">
                  <app-icon name="star" [size]="20" svgClass="fill-current"></app-icon>
                </div>
                <div>
                  <div class="flex items-center text-amber-500 text-xs">
                    ★★★★★
                  </div>
                  <span class="text-xs font-bold text-ink-primary block">+5.000 pacientes</span>
                  <span class="text-[11px] text-ink-secondary">Tratamientos con éxito</span>
                </div>
              </div>

              <!-- Floating Trust Badge: Bottom Left -->
              <div class="absolute -bottom-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-elevated border border-border/80 flex items-center gap-3">
                <div class="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <app-icon name="shield-check" [size]="22"></app-icon>
                </div>
                <div>
                  <span class="text-xs font-bold text-ink-primary block">Tecnología 3D & Digital</span>
                  <span class="text-[11px] text-ink-secondary">Escaneo sin moldes incómodos</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes floatSlow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-6px); }
    }
    .animate-floatSlow {
      animation: floatSlow 5s ease-in-out infinite;
    }
  `]
})
export class HeroComponent {
  private readonly clinicService = inject(ClinicDataService);
  private readonly bookingService = inject(BookingService);

  readonly config = this.clinicService.config;

  openBooking() {
    this.bookingService.openModal();
  }

  scrollToTreatments(event: Event) {
    event.preventDefault();
    if (typeof document !== 'undefined') {
      const el = document.getElementById('tratamientos');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
