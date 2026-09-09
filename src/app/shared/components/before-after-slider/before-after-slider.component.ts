import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeforeAfterCase } from '../../../core/models/common.models';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-before-after-slider',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="relative w-full overflow-hidden rounded-3xl bg-white border border-border shadow-premium">
      
      <!-- Cases Selector Header -->
      @if (cases.length > 1) {
        <div class="flex items-center justify-between px-6 py-4 border-b border-border bg-surface-soft/60">
          <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            @for (item of cases; track item.id; let i = $index) {
              <button
                type="button"
                (click)="selectCase(i)"
                class="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0"
                [class.bg-primary]="activeCaseIndex() === i"
                [class.text-white]="activeCaseIndex() === i"
                [class.shadow-sm]="activeCaseIndex() === i"
                [class.bg-white]="activeCaseIndex() !== i"
                [class.text-ink-secondary]="activeCaseIndex() !== i"
                [class.border]="activeCaseIndex() !== i"
                [class.border-border]="activeCaseIndex() !== i"
              >
                {{ item.category }}
              </button>
            }
          </div>
          <span class="hidden sm:inline-flex text-xs text-ink-muted">
            Deslizá la barra central para comparar
          </span>
        </div>
      }

      <!-- Interactive Comparison Container -->
      <div 
        #containerRef
        class="relative w-full aspect-[4/3] sm:aspect-[16/10] select-none cursor-ew-resize overflow-hidden bg-slate-900"
        (mousedown)="startDrag($event)"
        (touchstart)="startTouch($event)"
      >
        <!-- AFTER Image (Underneath) -->
        <img 
          [src]="activeCase().afterImage" 
          [alt]="'Resultado después de ' + activeCase().treatmentName"
          class="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
        <div class="absolute top-4 right-4 z-10">
          <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/90 text-primary-dark backdrop-blur-md shadow-sm border border-white/40">
            Después
          </span>
        </div>

        <!-- BEFORE Image (Clipped overlay) -->
        <div 
          class="absolute inset-0 overflow-hidden pointer-events-none"
          [style.width.%]="sliderPosition()"
        >
          <img 
            [src]="activeCase().beforeImage" 
            [alt]="'Estado antes de ' + activeCase().treatmentName"
            class="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            [style.width.px]="containerWidth()"
            loading="lazy"
          />
          <div class="absolute top-4 left-4 z-10">
            <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 text-white backdrop-blur-md shadow-sm border border-white/20">
              Antes
            </span>
          </div>
        </div>

        <!-- Draggable Handle Bar -->
        <div 
          class="absolute top-0 bottom-0 z-20 pointer-events-none"
          [style.left.%]="sliderPosition()"
        >
          <!-- Vertical Line -->
          <div class="h-full w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] -ml-[1px]"></div>
          
          <!-- Round Center Button -->
          <div class="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-primary border border-border shadow-elevated flex items-center justify-center gap-0.5">
            <app-icon name="chevron-left" [size]="14"></app-icon>
            <app-icon name="chevron-right" [size]="14"></app-icon>
          </div>
        </div>

        <!-- Slider Range input for accessibility & keyboard users -->
        <input 
          type="range"
          min="0"
          max="100"
          [value]="sliderPosition()"
          (input)="onRangeInput($event)"
          aria-label="Comparar imagen antes y después"
          class="sr-only focus:not-sr-only focus:absolute focus:bottom-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-30"
        />
      </div>

      <!-- Case Meta Footer -->
      <div class="p-6 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-secondary-dark">
              {{ activeCase().category }}
            </span>
            <span class="text-xs text-ink-muted">•</span>
            <span class="text-xs text-ink-muted">
              Duración: {{ activeCase().durationText }}
            </span>
          </div>
          <h3 class="font-serif text-lg sm:text-xl font-semibold text-ink-primary mt-1">
            {{ activeCase().treatmentName }}
          </h3>
          <p class="text-sm text-ink-secondary mt-1 max-w-xl">
            {{ activeCase().description }}
          </p>
        </div>

        <div class="sm:text-right shrink-0">
          <span class="text-xs text-ink-muted block">Especialista a cargo</span>
          <span class="text-sm font-semibold text-primary block">
            {{ activeCase().doctorInCharge }}
          </span>
        </div>
      </div>

    </div>
  `,
  styles: [`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `]
})
export class BeforeAfterSliderComponent {
  @Input() cases: BeforeAfterCase[] = [];

  readonly activeCaseIndex = signal<number>(0);
  readonly sliderPosition = signal<number>(50);
  readonly containerWidth = signal<number>(800);

  private isDragging = false;
  private currentElement: HTMLElement | null = null;

  activeCase() {
    return this.cases[this.activeCaseIndex()] || this.cases[0];
  }

  selectCase(index: number) {
    this.activeCaseIndex.set(index);
    this.sliderPosition.set(50);
  }

  onRangeInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.sliderPosition.set(Number(input.value));
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.currentElement = event.currentTarget as HTMLElement;
    this.updateContainerMetrics();
    this.updatePositionFromCoord(event.clientX);

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!this.isDragging) return;
      this.updatePositionFromCoord(moveEvent.clientX);
    };

    const onMouseUp = () => {
      this.isDragging = false;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  startTouch(event: TouchEvent) {
    this.isDragging = true;
    this.currentElement = event.currentTarget as HTMLElement;
    this.updateContainerMetrics();
    if (event.touches.length > 0) {
      this.updatePositionFromCoord(event.touches[0].clientX);
    }

    const onTouchMove = (moveEvent: TouchEvent) => {
      if (!this.isDragging || moveEvent.touches.length === 0) return;
      this.updatePositionFromCoord(moveEvent.touches[0].clientX);
    };

    const onTouchEnd = () => {
      this.isDragging = false;
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };

    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
  }

  private updateContainerMetrics() {
    if (this.currentElement) {
      this.containerWidth.set(this.currentElement.clientWidth);
    }
  }

  private updatePositionFromCoord(clientX: number) {
    if (!this.currentElement) return;
    const rect = this.currentElement.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const clamped = Math.max(0, Math.min(offsetX, rect.width));
    const percentage = Math.round((clamped / rect.width) * 100);
    this.sliderPosition.set(percentage);
  }
}
