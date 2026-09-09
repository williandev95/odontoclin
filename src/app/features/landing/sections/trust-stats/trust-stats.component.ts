import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicDataService } from '../../../../core/services/clinic-data.service';

@Component({
  selector: 'app-trust-stats-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="border-y border-border bg-white py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
          
          @for (stat of stats(); track stat.label; let i = $index) {
            <div 
              class="pt-6 lg:pt-0"
              [class.lg:pl-12]="i > 0"
            >
              <div class="flex flex-col">
                <span class="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary tracking-tight">
                  {{ stat.value }}
                </span>
                <span class="text-sm sm:text-base font-semibold text-ink-primary mt-2">
                  {{ stat.label }}
                </span>
                @if (stat.highlight) {
                  <span class="text-xs text-ink-secondary mt-0.5">
                    {{ stat.highlight }}
                  </span>
                }
              </div>
            </div>
          }

        </div>

      </div>
    </section>
  `
})
export class TrustStatsComponent {
  private readonly clinicService = inject(ClinicDataService);
  readonly stats = this.clinicService.stats;
}
