import { Injectable, signal } from '@angular/core';
import { CLINIC_CONFIG, CLINIC_STATS } from '../data/clinic.data';
import { TREATMENTS_DATA } from '../data/treatments.data';
import { DOCTORS_DATA } from '../data/doctors.data';
import { BEFORE_AFTER_CASES } from '../data/before-after.data';
import { TESTIMONIALS_DATA } from '../data/testimonials.data';
import { FAQ_DATA } from '../data/faq.data';
import { ClinicConfig, ClinicStat } from '../models/clinic.model';
import { Treatment } from '../models/treatment.model';
import { Doctor } from '../models/doctor.model';
import { BeforeAfterCase, Testimonial, FaqItem } from '../models/common.models';

@Injectable({
  providedIn: 'root'
})
export class ClinicDataService {
  readonly config = signal<ClinicConfig>(CLINIC_CONFIG);
  readonly stats = signal<ClinicStat[]>(CLINIC_STATS);
  readonly treatments = signal<Treatment[]>(TREATMENTS_DATA);
  readonly doctors = signal<Doctor[]>(DOCTORS_DATA);
  readonly beforeAfterCases = signal<BeforeAfterCase[]>(BEFORE_AFTER_CASES);
  readonly testimonials = signal<Testimonial[]>(TESTIMONIALS_DATA);
  readonly faqs = signal<FaqItem[]>(FAQ_DATA);

  getTreatmentBySlug(slug: string): Treatment | undefined {
    return this.treatments().find(t => t.slug === slug);
  }

  getDoctorById(id: string): Doctor | undefined {
    return this.doctors().find(d => d.id === id);
  }
}
