import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section class="section-padding bg-white border-t border-border">
      <div class="container-custom">
        
        <app-section-heading
          eyebrow="Experiencias Reales"
          title="Lo dicen nuestros pacientes."
          subtitle="La confianza de quienes nos eligen día a día es nuestra mayor satisfacción profesional."
          [centered]="true"
        ></app-section-heading>

        <!-- Testimonials Carousel Container -->
        <div class="mt-14 max-w-4xl mx-auto">
          @if (currentTestimonial(); as t) {
            <div class="bg-surface-soft rounded-3xl p-8 sm:p-12 border border-border shadow-soft relative transition-all duration-300">
              
              <!-- Quote watermark decorative icon -->
              <div class="absolute top-6 right-8 text-primary/10 font-serif text-8xl select-none leading-none">
                “
              </div>

              <!-- Rating Stars -->
              <div class="flex items-center gap-1 text-amber-500 mb-6">
                @for (star of [1,2,3,4,5]; track star) {
                  <app-icon name="star" [size]="18" svgClass="fill-current"></app-icon>
                }
                <span class="ml-2 text-xs font-semibold text-ink-primary">5.0 / 5.0</span>
              </div>

              <!-- Quote Body -->
              <blockquote class="text-lg sm:text-2xl font-serif text-ink-primary leading-relaxed mb-8">
                "{{ t.quote }}"
              </blockquote>

              <p class="text-sm text-ink-secondary leading-relaxed mb-8">
                {{ t.fullReview }}
              </p>

              <!-- Patient Info Footer -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/80">
                <div class="flex items-center gap-4">
                  <img [src]="t.avatarUrl" [alt]="t.patientName" class="w-12 h-12 rounded-full object-cover border border-border" />
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-serif text-base font-bold text-ink-primary">{{ t.patientName }}</span>
                      @if (t.verified) {
                        <span class="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          <app-icon name="check" [size]="12"></app-icon>
                          Verificado
                        </span>
                      }
                    </div>
                    <span class="text-xs text-ink-secondary block">Tratamiento: {{ t.treatment }}</span>
                  </div>
                </div>

                <!-- Navigation Controls -->
                <div class="flex items-center gap-3">
                  <button 
                    type="button"
                    (click)="prev()"
                    class="w-10 h-10 rounded-full bg-white border border-border hover:border-primary text-ink-primary hover:text-primary flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    aria-label="Testimonio anterior"
                  >
                    <app-icon name="chevron-left" [size]="18"></app-icon>
                  </button>

                  <div class="flex items-center gap-1.5 px-2">
                    @for (item of testimonials(); track item.id; let i = $index) {
                      <button 
                        type="button"
                        (click)="goTo(i)"
                        class="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        [class.bg-primary]="currentIndex() === i"
                        [class.w-6]="currentIndex() === i"
                        [class.bg-border-strong]="currentIndex() !== i"
                        [attr.aria-label]="'Ir al testimonio ' + (i + 1)"
                      ></button>
                    }
                  </div>

                  <button 
                    type="button"
                    (click)="next()"
                    class="w-10 h-10 rounded-full bg-white border border-border hover:border-primary text-ink-primary hover:text-primary flex items-center justify-center transition-colors shadow-sm focus:outline-none"
                    aria-label="Testimonio siguiente"
                  >
                    <app-icon name="chevron-right" [size]="18"></app-icon>
                  </button>
                </div>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class TestimonialsComponent {
  private readonly clinicService = inject(ClinicDataService);

  readonly testimonials = this.clinicService.testimonials;
  readonly currentIndex = signal<number>(0);

  currentTestimonial() {
    return this.testimonials()[this.currentIndex()];
  }

  next() {
    const nextIdx = (this.currentIndex() + 1) % this.testimonials().length;
    this.currentIndex.set(nextIdx);
  }

  prev() {
    const prevIdx = (this.currentIndex() - 1 + this.testimonials().length) % this.testimonials().length;
    this.currentIndex.set(prevIdx);
  }

  goTo(idx: number) {
    this.currentIndex.set(idx);
  }
}
