import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeadingComponent } from '../../../../shared/components/section-heading/section-heading.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

@Component({
  selector: 'app-technology-section',
  standalone: true,
  imports: [CommonModule, SectionHeadingComponent, IconComponent],
  template: `
    <section id="tecnologia" class="section-padding bg-surface-soft border-t border-border">
      <div class="container-custom">
        
        <app-section-heading
          eyebrow="Innovación Clínica"
          title="Tecnología para decisiones más precisas."
          subtitle="Cada avance tecnológico que incorporamos tiene un único propósito: brindarte diagnósticos certeros, tratamientos indoloros y resultados predecibles."
          [centered]="true"
        ></app-section-heading>

        <!-- Tech Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          
          <!-- Card 1: Escaneo Intraoral 3D -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="scan" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Escaneo Intraoral 3D
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                Olvidate de las pastas y moldes incómodos. Una pequeña cámara óptica escanea tu boca en minutos con precisión microscópica y genera un modelo tridimensional exacto.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Modelos 100% digitales sin náuseas</span>
            </div>
          </div>

          <!-- Card 2: Diagnóstico Digital & Mock-up -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#F8F4EB] text-[#8C6D34] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="sparkles" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Diseño Digital de Sonrisa (DSD)
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                Analizamos las proporciones de tu rostro y diseñamos en software tu sonrisa ideal. Podés ver y probar el resultado en tu propia boca antes de iniciar cualquier procedimiento.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-[#8C6D34]">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Previsualización exacta y compartida</span>
            </div>
          </div>

          <!-- Card 3: Radiografía Digital de Baja Dosis -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="activity" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Radiografía Digital de Mínima Radiación
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                Sensores de alta definición que reducen hasta un 85% la radiación comparado con placas convencionales. Resultados inmediatos en pantalla para una explicación clara.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Seguridad biológica y visualización HD</span>
            </div>
          </div>

          <!-- Card 4: Cirugía Guiada por Tomografía -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="shield-check" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Cirugía Guiada Computarizada
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                Imprimimos férulas quirúrgicas a medida mediante tecnología 3D para posicionar implantes con precisión milimétrica, sin incisiones amplias ni puntos traumáticos.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Postoperatorio sin dolor e inflamación mínima</span>
            </div>
          </div>

          <!-- Card 5: Endodoncia Microscópica Óptica -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="microscope" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Microscopía Operatoria
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                Magnificación óptica de hasta 20x con luz xenón para salvar piezas dentales comprometidas. Permite encontrar conductos microscópicos y tratar infecciones profundas.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-primary">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Máxima preservación dental biológica</span>
            </div>
          </div>

          <!-- Card 6: Anestesia Digital Computarizada -->
          <div class="bg-white rounded-3xl p-8 border border-border shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div class="w-12 h-12 rounded-2xl bg-[#F8F4EB] text-[#8C6D34] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <app-icon name="heart-pulse" [size]="24"></app-icon>
              </div>
              <h3 class="font-serif text-xl font-bold text-ink-primary mb-3">
                Anestesia Computarizada sin Presión
              </h3>
              <p class="text-sm text-ink-secondary leading-relaxed">
                El flujo de anestésico es controlado por microprocesador gota a gota, eliminando el dolor típico del pinchazo y anestesiando únicamente la pieza a tratar, sin dormirte el rostro.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-semibold text-[#8C6D34]">
              <app-icon name="check-circle" [size]="14"></app-icon>
              <span>Experiencia 100% libre de fobias</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class TechnologyComponent {}
