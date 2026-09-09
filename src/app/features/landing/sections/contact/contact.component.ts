import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { BookingService } from '../../../../core/services/booking.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section id="contacto" class="section-padding bg-surface-soft border-t border-border">
      <div class="container-custom">
        
        <app-section-heading
          eyebrow="Ubicación & Contacto"
          title="¿Querés conocernos? Estamos para ayudarte."
          subtitle="Vení a visitarnos en nuestras instalaciones o comunicate con nuestro equipo para coordinar tu cita."
          [centered]="true"
        ></app-section-heading>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-14 items-stretch">
          
          <!-- Contact Details Cards (Col 5) -->
          <div class="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            <!-- Address Card -->
            <div class="bg-white p-6 rounded-3xl border border-border shadow-soft flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <app-icon name="map-pin" [size]="22"></app-icon>
              </div>
              <div>
                <h4 class="font-serif text-lg font-bold text-ink-primary">Dirección de la Clínica</h4>
                <p class="text-sm text-ink-secondary mt-1 font-medium">{{ config().address.street }}</p>
                <p class="text-xs text-ink-muted mt-0.5">{{ config().address.note }}</p>
                <a 
                  [href]="config().googleMapsUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline mt-2"
                >
                  <span>Ver cómo llegar en Google Maps</span>
                  <app-icon name="arrow-right" [size]="12"></app-icon>
                </a>
              </div>
            </div>

            <!-- Phone & WhatsApp Card -->
            <div class="bg-white p-6 rounded-3xl border border-border shadow-soft flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-[#EAF7EE] text-emerald-600 flex items-center justify-center shrink-0">
                <app-icon name="phone" [size]="22"></app-icon>
              </div>
              <div>
                <h4 class="font-serif text-lg font-bold text-ink-primary">Teléfono & WhatsApp</h4>
                <p class="text-sm text-ink-secondary mt-1">Línea fija: {{ config().phoneDisplay }}</p>
                <a 
                  [href]="whatsappUrl()" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mt-2"
                >
                  <app-icon name="whatsapp" [size]="14" svgClass="text-[#25D366]"></app-icon>
                  <span>Chatear ahora por WhatsApp</span>
                </a>
              </div>
            </div>

            <!-- Email Card -->
            <div class="bg-white p-6 rounded-3xl border border-border shadow-soft flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center shrink-0">
                <app-icon name="mail" [size]="22"></app-icon>
              </div>
              <div>
                <h4 class="font-serif text-lg font-bold text-ink-primary">Correo Electrónico</h4>
                <a [href]="'mailto:' + config().email" class="text-sm text-primary hover:underline mt-1 block break-all">
                  {{ config().email }}
                </a>
                <span class="text-xs text-ink-muted mt-0.5 block">Respuesta garantizada en menos de 2 horas hábiles</span>
              </div>
            </div>

            <!-- Schedule Card -->
            <div class="bg-white p-6 rounded-3xl border border-border shadow-soft flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-[#F8F4EB] text-[#8C6D34] flex items-center justify-center shrink-0">
                <app-icon name="clock" [size]="22"></app-icon>
              </div>
              <div>
                <h4 class="font-serif text-lg font-bold text-ink-primary">Horarios de Atención</h4>
                <p class="text-xs text-ink-secondary mt-1">{{ config().openingHours.weekdays }}</p>
                <p class="text-xs text-ink-secondary mt-0.5">{{ config().openingHours.saturdays }}</p>
                <span class="text-[11px] text-amber-700 font-medium block mt-1">Guardias odontológicas los fines de semana</span>
              </div>
            </div>

          </div>

          <!-- Map & Visual Arrival (Col 7) -->
          <div class="lg:col-span-7 bg-white rounded-3xl border border-border shadow-soft overflow-hidden flex flex-col justify-between">
            
            <!-- Styled Map Interactive Graphic -->
            <div class="relative w-full h-80 sm:h-96 bg-slate-100 overflow-hidden">
              <!-- Visual Mock Map preview using high-res subtle styling and pin -->
              <iframe
                title="Ubicación de la Clínica Odontológica"
                class="w-full h-full border-0 filter contrast-[1.02] grayscale-[20%]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.391742469472!2d-57.5684617!3d-25.2910793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da7b567440409%3A0x7d6f51cb320ec2c4!2sAv.%20Sta.%20Teresa%2C%20Asunci%C3%B3n!5e0!3m2!1ses!2spy!4v1700000000000!5m2!1ses!2spy"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>

              <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-soft border border-border flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                <span class="text-xs font-semibold text-ink-primary">Estacionamiento propio vigilado</span>
              </div>
            </div>

            <!-- Booking action bar under map -->
            <div class="p-6 sm:p-8 bg-surface-soft border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span class="font-serif text-lg font-bold text-ink-primary block">¿Preferís coordinar ahora mismo?</span>
                <span class="text-xs text-ink-secondary">Nuestro sistema online te permite elegir día y horario en segundos.</span>
              </div>

              <button 
                type="button"
                (click)="bookingService.openModal()"
                class="btn-primary shrink-0 py-3 px-6 text-xs font-semibold"
              >
                Reservar turno online
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  private readonly clinicService = inject(ClinicDataService);
  readonly bookingService = inject(BookingService);

  readonly config = this.clinicService.config;

  whatsappUrl(): string {
    const c = this.config();
    return `https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(c.whatsappDefaultMessage)}`;
  }
}
