import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../core/services/clinic-data.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="fixed bottom-6 right-6 z-40 flex items-center group select-none">
      
      <!-- Interactive Tooltip Balloon -->
      <a 
        [href]="whatsappUrl()"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden sm:flex items-center gap-2.5 bg-white/95 backdrop-blur-md text-ink-primary text-xs font-semibold py-2.5 px-4 rounded-full shadow-elevated border border-border mr-3.5 transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:-translate-x-1 hover:border-emerald-300"
      >
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span class="text-ink-primary font-medium">¿Consultas por turnos? <strong class="text-emerald-700 font-semibold">Escribinos</strong></span>
      </a>

      <!-- Official WhatsApp Floating Button -->
      <a 
        [href]="whatsappUrl()"
        target="_blank"
        rel="noopener noreferrer"
        class="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300 group-hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 overflow-hidden"
        aria-label="Abrir conversación oficial de WhatsApp con la clínica"
      >
        <app-icon name="whatsapp" [size]="34" svgClass="text-white drop-shadow-sm"></app-icon>
      </a>

    </div>
  `
})
export class WhatsappFabComponent {
  private readonly clinicService = inject(ClinicDataService);

  whatsappUrl(): string {
    const config = this.clinicService.config();
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappDefaultMessage)}`;
  }
}
