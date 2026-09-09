import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'">
      @if (eyebrow) {
        <div class="mb-3 inline-block">
          <span 
            [class]="goldEyebrow ? 'badge-gold' : 'badge-editorial'">
            {{ eyebrow }}
          </span>
        </div>
      }
      <h2 class="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink-primary tracking-tight leading-[1.18]">
        {{ title }}
      </h2>
      @if (subtitle) {
        <p class="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
          {{ subtitle }}
        </p>
      }
    </div>
  `
})
export class SectionHeadingComponent {
  @Input() eyebrow?: string;
  @Input() title: string = '';
  @Input() subtitle?: string;
  @Input() centered: boolean = true;
  @Input() goldEyebrow: boolean = false;
}
