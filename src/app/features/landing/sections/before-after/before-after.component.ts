import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { BeforeAfterSliderComponent } from '../../../../shared/components/before-after-slider/before-after-slider.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-before-after-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, BeforeAfterSliderComponent],
  template: `
    <section id="resultados" class="section-padding bg-surface-soft border-t border-border">
      <div class="container-custom">
        
        <app-section-heading
          eyebrow="Casos Clínicos"
          title="Resultados que hablan por nosotros."
          subtitle="Deslizá la barra central para comparar el estado inicial con el resultado estético y funcional definitivo."
          [centered]="true"
        ></app-section-heading>

        <!-- Slider Comparison Component Wrapper -->
        <div class="mt-12 max-w-4xl mx-auto">
          <app-before-after-slider [cases]="cases()"></app-before-after-slider>
          
          <div class="mt-4 text-center">
            <p class="text-xs text-ink-muted">
              * Demostración visual de tratamientos clínicos. Los resultados individuales pueden variar según la condición inicial de cada paciente.
            </p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class BeforeAfterSectionComponent {
  private readonly clinicService = inject(ClinicDataService);
  readonly cases = this.clinicService.beforeAfterCases;
}
