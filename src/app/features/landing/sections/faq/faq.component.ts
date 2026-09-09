import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section class="section-padding bg-white border-t border-border">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <app-section-heading
          eyebrow="Dudas Frecuentes"
          title="Preguntas frecuentes."
          subtitle="Respondemos con claridad a las consultas más habituales sobre atención, procedimientos y turnos."
          [centered]="true"
        ></app-section-heading>

        <!-- Accordion List -->
        <div class="mt-12 space-y-3.5">
          @for (faq of faqs(); track faq.id; let i = $index) {
            <div 
              class="border rounded-2xl transition-colors duration-200 overflow-hidden"
              [class.border-primary]="openIndex() === i"
              [class.bg-surface-soft]="openIndex() === i"
              [class.border-border]="openIndex() !== i"
              [class.bg-white]="openIndex() !== i"
            >
              <!-- Accordion Button Header -->
              <button 
                type="button"
                (click)="toggle(i)"
                class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                [attr.aria-expanded]="openIndex() === i"
                [attr.aria-controls]="'faq-panel-' + i"
                [id]="'faq-btn-' + i"
              >
                <span class="font-serif text-base sm:text-lg font-bold text-ink-primary">
                  {{ faq.question }}
                </span>
                
                <div 
                  class="w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 transition-transform duration-300"
                  [class.rotate-180]="openIndex() === i"
                  [class.bg-primary]="openIndex() === i"
                  [class.text-white]="openIndex() === i"
                  [class.text-ink-secondary]="openIndex() !== i"
                >
                  <app-icon name="chevron-down" [size]="16"></app-icon>
                </div>
              </button>

              <!-- Collapsible Content -->
              @if (openIndex() === i) {
                <div 
                  [id]="'faq-panel-' + i"
                  [attr.aria-labelledby]="'faq-btn-' + i"
                  role="region"
                  class="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-ink-secondary leading-relaxed animate-fadeIn"
                >
                  {{ faq.answer }}
                </div>
              }
            </div>
          }
        </div>

        <!-- Contact fallback help -->
        <div class="mt-10 text-center p-6 bg-surface-soft rounded-2xl border border-border">
          <p class="text-sm text-ink-secondary">
            ¿Tenés alguna otra pregunta sobre tu caso específico?
          </p>
          <a 
            [href]="whatsappUrl()" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark mt-2 underline"
          >
            <span>Consultar directamente con nuestro equipo de atención</span>
            <app-icon name="arrow-right" [size]="14"></app-icon>
          </a>
        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-4px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.2s ease-out forwards;
    }
  `]
})
export class FaqComponent {
  private readonly clinicService = inject(ClinicDataService);

  readonly faqs = this.clinicService.faqs;
  // First item open by default
  readonly openIndex = signal<number | null>(0);

  toggle(index: number) {
    if (this.openIndex() === index) {
      this.openIndex.set(null); // Close if clicked again
    } else {
      this.openIndex.set(index); // Only one open at a time
    }
  }

  whatsappUrl(): string {
    const config = this.clinicService.config();
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent('Hola, tengo una consulta que no encontré en la sección de preguntas frecuentes.')}`;
  }
}
