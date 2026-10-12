export type CategoryType = 'all' | 'pre-wedding' | 'weddings' | 'editorial';

export interface GoldenHourTile {
  id: string;
  title: string;
  location: string;
  image: string;
  alt: string;
  span: 's3' | 's2' | 's6';
  camera?: string;
  lens?: string;
  settings?: string;
  story?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'pre-wedding' | 'weddings' | 'editorial';
  location: string;
  year: string;
  image: string;
  alt: string;
  description: string;
  count: string;
  featured?: boolean;
}

export interface FilmItem {
  id: string;
  title: string;
  tagline: string;
  category: 'feature' | 'short' | 'teaser';
  duration: string;
  couple: string;
  location: string;
  venue: string;
  videoUrl?: string;
  poster: string;
  synopsis: string;
  directorNote: string;
  palette: string[];
}

export interface Testimonial {
  id: string;
  names: string;
  location: string;
  venue: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  location: string;
}

export interface PackageTier {
  id: string;
  name: string;
  idealFor: string;
  priceEstimate: string;
  inclusions: string[];
  popular?: boolean;
}
