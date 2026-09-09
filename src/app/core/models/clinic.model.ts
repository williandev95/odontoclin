export interface ClinicStat {
  value: string;
  label: string;
  highlight?: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  whatsapp: string;
  linkedin?: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
    note: string;
  };
  openingHours: {
    weekdays: string;
    saturdays: string;
    sundays: string;
  };
  social: SocialLinks;
  googleMapsUrl: string;
}
