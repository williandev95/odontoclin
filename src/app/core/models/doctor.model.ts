export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experienceYears: number;
  licenseNumber: string;
  bio: string;
  image: string;
  education: string[];
  availableDays: string[];
  featured?: boolean;
}
