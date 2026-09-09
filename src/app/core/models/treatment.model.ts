export interface Treatment {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  featured?: boolean;
  benefits: string[];
  durationMinutes?: number;
  highlightBadge?: string;
  iconName?: string;
}
