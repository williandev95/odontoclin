import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { WhatsappFabComponent } from '../../../../shared/components/whatsapp-fab/whatsapp-fab.component';
import { BookingModalComponent } from '../../../../shared/components/booking-modal/booking-modal.component';
import { BookingService } from '../../../../core/services/booking.service';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-turnos-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, WhatsappFabComponent, BookingModalComponent, IconComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-surface-soft text-ink-primary">
      <app-navbar></app-navbar>

      <div class="flex-grow pt-32 pb-20">
        <div class="container-custom max-w-4xl">
          
          <div class="text-center space-y-4 mb-10">
            <span class="badge-gold">Agenda Online</span>
            <h1 class="font-serif text-3xl sm:text-5xl font-bold text-ink-primary">
              Reserva de Turno Online
            </h1>
            <p class="text-base text-ink-secondary max-w-xl mx-auto">
              Seleccioná tu tratamiento, especialista y horario en nuestro sistema clínico. Confirmación rápida y sin esperas.
            </p>
          </div>

          <!-- Direct booking launch card -->
          <div class="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-elevated text-center space-y-6">
            <div class="w-16 h-16 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mx-auto">
              <app-icon name="calendar" [size]="32"></app-icon>
            </div>

            <div>
              <h2 class="font-serif text-2xl font-bold text-ink-primary">
                Iniciá tu reserva ahora
              </h2>
              <p class="text-sm text-ink-secondary mt-1 max-w-md mx-auto">
                El proceso toma menos de 2 minutos. Si necesitás atención urgente, podés contactarnos directamente por WhatsApp.
              </p>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                type="button" 
                (click)="openWizard()"
                class="btn-primary py-3.5 px-8"
              >
                <span>Abrir asistente de reserva</span>
                <app-icon name="arrow-right" [size]="16"></app-icon>
              </button>

              <a 
                [href]="whatsappUrl()" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-secondary py-3.5 px-6"
              >
                <app-icon name="whatsapp" [size]="18" svgClass="text-[#25D366]"></app-icon>
                <span>Turno urgente por WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <app-footer></app-footer>
      <app-whatsapp-fab></app-whatsapp-fab>
      <app-booking-modal></app-booking-modal>
    </div>
  `
})
export class TurnosPageComponent implements OnInit {
  private readonly bookingService = inject(BookingService);
  private readonly clinicService = inject(ClinicDataService);

  ngOnInit() {
    // Automatically open the modal when visiting /turnos
    setTimeout(() => {
      this.bookingService.openModal();
    }, 150);
  }

  openWizard() {
    this.bookingService.openModal();
  }

  whatsappUrl(): string {
    const config = this.clinicService.config();
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hola, necesito reservar un turno prioritario en la clínica.')}`;
  }
}
