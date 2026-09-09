import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../icon/icon.component';
import { BookingService } from '../../../core/services/booking.service';
import { ClinicDataService } from '../../../core/services/clinic-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, IconComponent],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
      [class.bg-transparent]="!isScrolled() && !isMobileMenuOpen()"
      [class.py-5]="!isScrolled()"
      [class.bg-white/90]="isScrolled() || isMobileMenuOpen()"
      [class.backdrop-blur-md]="isScrolled() || isMobileMenuOpen()"
      [class.shadow-sm]="isScrolled()"
      [class.border-b]="isScrolled()"
      [class.border-border/80]="isScrolled()"
      [class.py-3]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">
          
          <!-- Brand Logo -->
          <a routerLink="/" (click)="scrollToTop()" class="flex items-center gap-3 group focus:outline-none">
            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-soft transition-transform group-hover:scale-105 duration-300">
              <app-icon name="sparkles" [size]="20"></app-icon>
            </div>
            <div class="flex flex-col">
              <span class="font-serif text-xl sm:text-2xl font-bold text-ink-primary tracking-tight leading-none">
                Sonrisa<span class="text-secondary font-normal italic">.</span>
              </span>
              <span class="text-[10px] tracking-[0.2em] uppercase text-ink-muted font-semibold mt-0.5">
                Clínica Dental
              </span>
            </div>
          </a>

          <!-- Desktop Navigation Menu -->
          <nav class="hidden lg:flex items-center gap-8 text-sm font-medium text-ink-secondary" aria-label="Navegación principal">
            <a 
              href="#inicio" 
              (click)="onNavClick($event, 'inicio')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Inicio
            </a>
            <a 
              href="#tratamientos" 
              (click)="onNavClick($event, 'tratamientos')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Tratamientos
            </a>
            <a 
              href="#nosotros" 
              (click)="onNavClick($event, 'nosotros')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Nosotros
            </a>
            <a 
              href="#tecnologia" 
              (click)="onNavClick($event, 'tecnologia')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Tecnología
            </a>
            <a 
              href="#especialistas" 
              (click)="onNavClick($event, 'especialistas')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Especialistas
            </a>
            <a 
              href="#resultados" 
              (click)="onNavClick($event, 'resultados')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Resultados
            </a>
            <a 
              href="#contacto" 
              (click)="onNavClick($event, 'contacto')"
              class="hover:text-primary transition-colors duration-200 focus:outline-none focus:text-primary"
            >
              Contacto
            </a>
          </nav>

          <!-- Desktop Actions -->
          <div class="hidden lg:flex items-center gap-4">
            <a 
              [href]="whatsappUrl()" 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-2.5 rounded-full text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              aria-label="Contactar por WhatsApp"
              title="Atención por WhatsApp"
            >
              <app-icon name="whatsapp" [size]="22"></app-icon>
            </a>

            <button 
              type="button"
              (click)="openBooking()"
              class="btn-primary group"
              id="header-cta-btn"
            >
              <span>Reservar turno</span>
              <app-icon name="arrow-right" [size]="16" svgClass="transition-transform duration-300 group-hover:translate-x-1"></app-icon>
            </button>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="lg:hidden flex items-center gap-3">
            <button 
              type="button"
              (click)="openBooking()"
              class="btn-primary py-2 px-3.5 text-xs font-semibold"
            >
              Turno
            </button>
            <button 
              type="button"
              (click)="toggleMobileMenu()"
              class="p-2.5 rounded-xl text-ink-primary hover:bg-surface-muted transition-colors focus:outline-none"
              [attr.aria-expanded]="isMobileMenuOpen()"
              aria-label="Abrir menú de navegación"
            >
              @if (isMobileMenuOpen()) {
                <app-icon name="x" [size]="24"></app-icon>
              } @else {
                <app-icon name="menu" [size]="24"></app-icon>
              }
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (isMobileMenuOpen()) {
        <div 
          class="lg:hidden bg-white border-b border-border shadow-premium px-6 py-6 transition-all duration-300 animate-fadeIn"
        >
          <nav class="flex flex-col space-y-4 text-base font-medium text-ink-primary">
            <a 
              href="#inicio" 
              (click)="onNavClick($event, 'inicio')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Inicio</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#tratamientos" 
              (click)="onNavClick($event, 'tratamientos')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Tratamientos</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#nosotros" 
              (click)="onNavClick($event, 'nosotros')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Nosotros</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#tecnologia" 
              (click)="onNavClick($event, 'tecnologia')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Tecnología</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#especialistas" 
              (click)="onNavClick($event, 'especialistas')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Especialistas</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#resultados" 
              (click)="onNavClick($event, 'resultados')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Resultados (Antes y Después)</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>
            <a 
              href="#contacto" 
              (click)="onNavClick($event, 'contacto')"
              class="py-2 border-b border-border/40 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>Contacto</span>
              <app-icon name="chevron-right" [size]="18" svgClass="text-ink-muted"></app-icon>
            </a>

            <div class="pt-4 flex flex-col gap-3">
              <button 
                type="button"
                (click)="openBookingMobile()"
                class="btn-primary w-full py-3.5"
              >
                <span>Reservar turno online</span>
                <app-icon name="arrow-right" [size]="18"></app-icon>
              </button>

              <a 
                [href]="whatsappUrl()" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn-secondary w-full py-3.5 text-center text-sm"
              >
                <app-icon name="whatsapp" [size]="18" svgClass="text-emerald-600"></app-icon>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      }
    </header>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }
  `]
})
export class NavbarComponent {
  private readonly bookingService = inject(BookingService);
  private readonly clinicService = inject(ClinicDataService);

  readonly isScrolled = signal<boolean>(false);
  readonly isMobileMenuOpen = signal<boolean>(false);

  readonly whatsappUrl = signal<string>(
    `https://wa.me/${this.clinicService.config().whatsappNumber}?text=${encodeURIComponent(this.clinicService.config().whatsappDefaultMessage)}`
  );

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled.set(scrollOffset > 30);
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  onNavClick(event: Event, targetId: string) {
    event.preventDefault();
    this.isMobileMenuOpen.set(false);
    
    if (typeof document !== 'undefined') {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  openBooking() {
    this.bookingService.openModal();
  }

  openBookingMobile() {
    this.isMobileMenuOpen.set(false);
    this.bookingService.openModal();
  }
}
