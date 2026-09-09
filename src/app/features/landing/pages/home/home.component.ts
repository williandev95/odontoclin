import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { HeroComponent } from '../../sections/hero/hero.component';
import { TrustStatsComponent } from '../../sections/trust-stats/trust-stats.component';
import { TreatmentsComponent } from '../../sections/treatments/treatments.component';
import { AboutClinicComponent } from '../../sections/about-clinic/about-clinic.component';
import { TechnologyComponent } from '../../sections/technology/technology.component';
import { DoctorsComponent } from '../../sections/doctors/doctors.component';
import { BeforeAfterSectionComponent } from '../../sections/before-after/before-after.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { BookingCtaComponent } from '../../sections/booking-cta/booking-cta.component';
import { FaqComponent } from '../../sections/faq/faq.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../../../shared/components/footer/footer.component';
import { WhatsappFabComponent } from '../../../../shared/components/whatsapp-fab/whatsapp-fab.component';
import { BookingModalComponent } from '../../../../shared/components/booking-modal/booking-modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    TrustStatsComponent,
    TreatmentsComponent,
    AboutClinicComponent,
    TechnologyComponent,
    DoctorsComponent,
    BeforeAfterSectionComponent,
    TestimonialsComponent,
    BookingCtaComponent,
    FaqComponent,
    ContactComponent,
    FooterComponent,
    WhatsappFabComponent,
    BookingModalComponent
  ],
  template: `
    <main class="min-h-screen flex flex-col bg-surface-soft text-ink-primary relative">
      <!-- Top Navigation -->
      <app-navbar></app-navbar>

      <!-- Main Landing Page Sections -->
      <app-hero-section></app-hero-section>
      <app-trust-stats-section></app-trust-stats-section>
      <app-treatments-section></app-treatments-section>
      <app-about-clinic-section></app-about-clinic-section>
      <app-technology-section></app-technology-section>
      <app-doctors-section></app-doctors-section>
      <app-before-after-section></app-before-after-section>
      <app-testimonials-section></app-testimonials-section>
      <app-booking-cta-section></app-booking-cta-section>
      <app-faq-section></app-faq-section>
      <app-contact-section></app-contact-section>

      <!-- Footer -->
      <app-footer></app-footer>

      <!-- Persistent Global Interactive Components -->
      <app-whatsapp-fab></app-whatsapp-fab>
      <app-booking-modal></app-booking-modal>
    </main>
  `
})
export class HomeComponent {}
