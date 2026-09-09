# Plan de Implementación: Landing Page Premium para Clínica Odontológica

Construcción desde cero de una Landing Page y Web App de alto nivel visual y técnico para una clínica odontológica moderna, utilizando **Angular 21**, **Tailwind CSS**, **TypeScript estricto**, **Signals**, **Reactive Forms**, diseño editorial premium y arquitectura lista para conectar con API backend (Spring Boot / PostgreSQL).

---

## 1. Arquitectura y Estructura del Proyecto

### Creación del Proyecto Angular
- Inicialización con Angular CLI (`ng new dental-clinic --routing --style=css --inline-style=false --ssr=false --skip-tests`) directamente en el workspace.
- Configuración de Tailwind CSS con paleta de colores personalizada definida en tokens CSS (`#F8FAFC`, `#FFFFFF`, `#172033`, `#667085`, `#1B5E6A`, `#124651`, `#D8B982`, `#E7EAEE`).
- Integración tipográfica de Google Fonts: **Playfair Display** (títulos editoriales) e **Inter** (cuerpo funcional y UI).
- Iconografía con Lucide / SVG icons accesibles y ligeros.

### Árbol de Directorios Planificado
```text
src/app/
├── core/
│   ├── models/
│   │   ├── clinic.model.ts
│   │   ├── treatment.model.ts
│   │   ├── doctor.model.ts
│   │   ├── testimonial.model.ts
│   │   ├── faq.model.ts
│   │   └── appointment.model.ts
│   ├── services/
│   │   ├── clinic-data.service.ts
│   │   └── booking.service.ts
│   └── data/
│       ├── clinic.data.ts
│       ├── treatments.data.ts
│       ├── doctors.data.ts
│       ├── testimonials.data.ts
│       └── faq.data.ts
├── shared/
│   ├── components/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── button/
│   │   ├── section-heading/
│   │   ├── before-after-slider/
│   │   ├── treatment-card/
│   │   ├── doctor-card/
│   │   ├── testimonial-card/
│   │   ├── faq-accordion/
│   │   ├── whatsapp-fab/
│   │   └── booking-modal/
├── features/
│   ├── landing/
│   │   ├── pages/
│   │   │   └── home/home.component.ts|html|css
│   │   └── sections/
│   │       ├── hero/
│   │       ├── trust-stats/
│   │       ├── treatments/
│   │       ├── about-clinic/
│   │       ├── technology/
│   │       ├── doctors/
│   │       ├── before-after/
│   │       ├── testimonials/
│   │       ├── booking-cta/
│   │       ├── faq/
│   │       └── contact/
│   ├── booking/
│   │   └── pages/
│   │       └── appointment-wizard/
│   ├── treatments-page/
│   └── contact-page/
```

---

## 2. Secciones y Componentes Clave

1. **Header & Navigation**:
   - Header inteligente `sticky` con detección de scroll (`Signals`), fondo dinámico transparente a `surface/90` con `backdrop-blur-md` y borde sutil.
   - Navegación desktop minimalista + drawer mobile animado con bloqueo de scroll y cierre al navegar.
   - Botón CTA principal "Reservar turno".

2. **Hero Section (Composición Editorial)**:
   - Eyebrow sutil en dorado `#D8B982`: *"ODONTOLOGÍA MODERNA"*.
   - Headline editorial en Playfair Display: *"Una sonrisa saludable cambia la forma en que ves el mundo."*
   - Fotografía de alta definición con bordes refinados, iluminación natural y floating badges interactivos (+5.000 pacientes, 98% satisfacción).
   - Acciones duales: [Reservar mi turno] y [Conocer tratamientos] + microcopy de confianza.

3. **Trust & Metrics**:
   - Barra minimalista con divisor refinado y tipografía destacada (+10 años, +5.000 pacientes, +8 especialistas, 98% satisfacción).

4. **Tratamientos (Grid Asimétrico Editorial)**:
   - Layout jerárquico no repetitivo (cards destacadas para Implantología y Estética con mayor área visual, cards complementarias con microinteracciones de hover).
   - Modal o drawer informativo para "Conocer más" de cada especialidad.

5. **About Clinic & Tecnología Médica**:
   - Espacio que transmite calma, arquitectura de vanguardia, escaneo intraoral 3D y radiografía digital, enfatizando que la tecnología está al servicio del bienestar del paciente.

6. **Equipo Médico**:
   - Tarjetas de doctores con hover refinado, especialidad, matrícula/experiencia y selector para agendar directamente con dicho profesional.

7. **Antes y Después (Interactive Comparison Slider)**:
   - Componente interactivo con divisor deslizable (drag con mouse y touch en móvil), etiquetas flotantes "Antes" y "Después", con casos de ortodoncia, carillas y blanqueamiento.

8. **Testimonios**:
   - Carrusel/slider controlado con navegación manual, puntuación de 5 estrellas y citas de pacientes reales verificados.

9. **Módulo de Reserva de Turnos (Multi-Paso / Wizard)**:
   - Disponible como Modal global y como ruta `/turnos`.
   - Paso 1: Selección de tratamiento/motivo.
   - Paso 2: Selección de especialista (o "Cualquiera disponible").
   - Paso 3: Selector visual de fecha y franja horaria.
   - Paso 4: Formulario reactivo de datos del paciente con validaciones (nombre, teléfono, email, notas).
   - Paso 5: Confirmación de reserva y generación de código de turno (mock preparado para backend Spring Boot).

10. **FAQ Accordion Accesible**:
    - Animaciones suaves, solo un item expandido a la vez, atributos semánticos `aria-expanded` y soporte completo de teclado.

11. **Contacto & Mapa**:
    - Tarjetas de información directa (teléfono, email, dirección, horarios de atención) + visualizador de ubicación y accesos directos.

12. **WhatsApp Floating Action Button**:
    - Botón flotante fixed inferior derecho con tooltip "¿Necesitás ayuda?" y mensaje preconfigurado en TypeScript.

---

## 3. Plan de Verificación

### Compilación y Rendimiento
- Verificación de TypeScript estricto sin errores de compilación (`ng build`).
- Ejecución local del servidor de desarrollo (`npm run start` o `ng serve`).
- Validación en navegador en breakpoints Responsive:
  - Móvil (390px - 640px)
  - Tablet (768px - 1024px)
  - Desktop (1280px - 1440px)

### UX y Accesibilidad
- Comprobación de navegación fluida con scroll suave a secciones.
- Verificación del slider Antes/Después mediante arrastre táctil y de ratón.
- Verificación del wizard de turnos paso a paso y validación de formulario reactivo.
- Verificación de contraste WCAG 2.1 AA y atributos ARIA en Navbar, Modal y FAQ.
