import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../../core/services/booking.service';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-booking-cta-section',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="section-padding bg-surface-soft relative overflow-hidden">
      <div class="container-custom">
        
        <div class="relative rounded-3xl lg:rounded-4xl bg-primary-dark text-white overflow-hidden shadow-elevated p-8 sm:p-14 lg:p-20">
          
          <!-- Decorative subtle ambient glows -->
          <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
          <div class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/40 blur-3xl pointer-events-none"></div>
          
          <div class="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div class="inline-block">
              <span class="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/10 text-secondary-light border border-white/15">
                Comenzá hoy tu cambio
              </span>
            </div>

            <h2 class="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Tu próxima sonrisa empieza con una conversación.
            </h2>

            <p class="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Agendá una consulta diagnóstica personalizada y descubrí junto a nuestros especialistas el plan ideal para vos.
            </p>

            <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                type="button"
                (click)="bookingService.openModal()"
                class="btn-gold w-full sm:w-auto py-4 px-8 text-base shadow-glow group"
              >
                <span>Reservar turno online</span>
                <app-icon name="arrow-right" [size]="18" svgClass="transition-transform duration-300 group-hover:translate-x-1"></app-icon>
              </button>

              <a 
                [href]="whatsappUrl()" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-medium text-base text-white border border-white/25 hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                <app-icon name="whatsapp" [size]="20" svgClass="text-[#25D366]"></app-icon>
                <span>Hablar por WhatsApp</span>
              </a>
            </div>

            <div class="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="14" svgClass="text-secondary"></app-icon>
                Confirmación inmediata
              </span>
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="14" svgClass="text-secondary"></app-icon>
                Financiación sin interés
              </span>
              <span class="inline-flex items-center gap-1.5">
                <app-icon name="check-circle" [size]="14"></app-icon>
                Recordatorios por WhatsApp
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class BookingCtaComponent {
  readonly bookingService = inject(BookingService);
  private readonly clinicService = inject(ClinicDataService);

  whatsappUrl(): string {
    const config = this.clinicService.config();
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappDefaultMessage)}`;
  }
}
