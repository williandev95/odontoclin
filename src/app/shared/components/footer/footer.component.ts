import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClinicDataService } from '../../../core/services/clinic-data.service';
import { BookingService } from '../../../core/services/booking.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <footer class="bg-primary-dark text-white pt-20 pb-12 border-t border-primary/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          <!-- Column 1: Brand & Bio -->
          <div class="lg:col-span-2 space-y-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-secondary text-ink-primary flex items-center justify-center font-bold shadow-soft">
                <app-icon name="sparkles" [size]="20"></app-icon>
              </div>
              <div class="flex flex-col">
                <span class="font-serif text-2xl font-bold tracking-tight text-white">
                  Sonrisa<span class="text-secondary italic">.</span>
                </span>
                <span class="text-[10px] tracking-[0.2em] uppercase text-slate-300 font-medium">
                  Clínica Odontológica
                </span>
              </div>
            </div>

            <p class="text-slate-300 text-sm leading-relaxed max-w-sm">
              Odontología moderna, estética y digital. Combinamos alta precisión médica y calidez humana para cuidar tu sonrisa a lo largo de toda tu vida.
            </p>

            <div class="flex items-center gap-3 pt-2">
              <a 
                [href]="config().social.instagram" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-ink-primary text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <app-icon name="instagram" [size]="16"></app-icon>
              </a>
              <a 
                [href]="whatsappUrl()" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <app-icon name="whatsapp" [size]="16"></app-icon>
              </a>
              <a 
                [href]="config().social.facebook" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-9 h-9 rounded-full bg-white/10 hover:bg-secondary hover:text-ink-primary text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <app-icon name="facebook" [size]="16"></app-icon>
              </a>
            </div>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="space-y-4">
            <h4 class="text-xs font-semibold uppercase tracking-widest text-secondary font-sans">
              Navegación
            </h4>
            <ul class="space-y-2.5 text-sm text-slate-300 font-normal">
              <li>
                <a href="#inicio" (click)="scrollTo($event, 'inicio')" class="hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#tratamientos" (click)="scrollTo($event, 'tratamientos')" class="hover:text-white transition-colors">Tratamientos</a>
              </li>
              <li>
                <a href="#nosotros" (click)="scrollTo($event, 'nosotros')" class="hover:text-white transition-colors">Nosotros</a>
              </li>
              <li>
                <a href="#tecnologia" (click)="scrollTo($event, 'tecnologia')" class="hover:text-white transition-colors">Tecnología</a>
              </li>
              <li>
                <a href="#especialistas" (click)="scrollTo($event, 'especialistas')" class="hover:text-white transition-colors">Especialistas</a>
              </li>
              <li>
                <a href="#resultados" (click)="scrollTo($event, 'resultados')" class="hover:text-white transition-colors">Antes y Después</a>
              </li>
              <li>
                <a href="#contacto" (click)="scrollTo($event, 'contacto')" class="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Contact Details -->
          <div class="space-y-4">
            <h4 class="text-xs font-semibold uppercase tracking-widest text-secondary font-sans">
              Contacto Directo
            </h4>
            <ul class="space-y-3 text-sm text-slate-300">
              <li class="flex items-start gap-2.5">
                <app-icon name="phone" [size]="16" svgClass="text-secondary shrink-0 mt-0.5"></app-icon>
                <a [href]="'tel:' + config().phone" class="hover:text-white transition-colors">{{ config().phoneDisplay }}</a>
              </li>
              <li class="flex items-start gap-2.5">
                <app-icon name="whatsapp" [size]="16" svgClass="text-[#25D366] shrink-0 mt-0.5"></app-icon>
                <a [href]="whatsappUrl()" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">WhatsApp de Turnos</a>
              </li>
              <li class="flex items-start gap-2.5">
                <app-icon name="mail" [size]="16" svgClass="text-secondary shrink-0 mt-0.5"></app-icon>
                <a [href]="'mailto:' + config().email" class="hover:text-white transition-colors break-all">{{ config().email }}</a>
              </li>
              <li class="flex items-start gap-2.5">
                <app-icon name="map-pin" [size]="16" svgClass="text-secondary shrink-0 mt-0.5"></app-icon>
                <span>{{ config().address.street }}</span>
              </li>
            </ul>
          </div>

          <!-- Column 4: Opening Hours & CTA -->
          <div class="space-y-4">
            <h4 class="text-xs font-semibold uppercase tracking-widest text-secondary font-sans">
              Horarios de Atención
            </h4>
            <div class="space-y-2 text-xs text-slate-300">
              <div>
                <span class="font-medium text-white block">Lunes a Viernes</span>
                <span>08:00 — 19:30</span>
              </div>
              <div>
                <span class="font-medium text-white block">Sábados</span>
                <span>08:30 — 13:00</span>
              </div>
              <div>
                <span class="font-medium text-white block">Domingos</span>
                <span class="text-slate-400">Cerrado (Urgencias disponibles)</span>
              </div>
            </div>

            <div class="pt-2">
              <button 
                type="button" 
                (click)="bookingService.openModal()"
                class="w-full py-2.5 px-4 rounded-full text-xs font-semibold bg-secondary text-ink-primary hover:bg-secondary-dark hover:text-white transition-all shadow-sm"
              >
                Reservar turno online
              </button>
            </div>
          </div>

        </div>

        <!-- Lower Footer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {{ config().name }}. Todos los derechos reservados.</p>
          <div class="flex items-center gap-6">
            <a href="javascript:void(0)" class="hover:text-white transition-colors">Política de Privacidad</a>
            <span>•</span>
            <a href="javascript:void(0)" class="hover:text-white transition-colors">Términos y Condiciones</a>
            <span>•</span>
            <a href="javascript:void(0)" class="hover:text-white transition-colors">Consentimiento Informado</a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  private readonly clinicService = inject(ClinicDataService);
  readonly bookingService = inject(BookingService);

  readonly config = this.clinicService.config;

  whatsappUrl(): string {
    const c = this.config();
    return `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappDefaultMessage)}`;
  }

  scrollTo(event: Event, targetId: string) {
    event.preventDefault();
    if (typeof document !== 'undefined') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }
}
