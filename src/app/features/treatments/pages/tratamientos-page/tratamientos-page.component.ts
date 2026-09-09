import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { TreatmentsComponent } from '../../../landing/sections/treatments/treatments.component';
import { WhatsappFabComponent } from '../../../../shared/components/whatsapp-fab/whatsapp-fab.component';
import { BookingModalComponent } from '../../../../shared/components/booking-modal/booking-modal.component';

@Component({
  selector: 'app-tratamientos-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, TreatmentsComponent, WhatsappFabComponent, BookingModalComponent],
  template: `
    <div class="min-h-screen flex flex-col bg-surface-soft">
      <app-navbar></app-navbar>
      <div class="flex-grow pt-24">
        <app-treatments-section></app-treatments-section>
      </div>
      <app-footer></app-footer>
      <app-whatsapp-fab></app-whatsapp-fab>
      <app-booking-modal></app-booking-modal>
    </div>
  `
})
export class TratamientosPageComponent {}
