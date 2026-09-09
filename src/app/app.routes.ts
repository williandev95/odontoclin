import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/landing/pages/home/home.component').then(m => m.HomeComponent),
    title: 'Clínica Dental Sonrisa | Odontología Moderna y Estética'
  },
  {
    path: 'turnos',
    loadComponent: () => import('./features/booking/pages/turnos-page/turnos-page.component').then(m => m.TurnosPageComponent),
    title: 'Reservar Turno Online | Clínica Dental Sonrisa'
  },
  {
    path: 'tratamientos',
    loadComponent: () => import('./features/treatments/pages/tratamientos-page/tratamientos-page.component').then(m => m.TratamientosPageComponent),
    title: 'Tratamientos Odontológicos | Clínica Dental Sonrisa'
  },
  {
    path: 'contacto',
    loadComponent: () => import('./features/contact/pages/contacto-page/contacto-page.component').then(m => m.ContactoPageComponent),
    title: 'Contacto y Ubicación | Clínica Dental Sonrisa'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
