export type EventCategory = 
  | 'TALENT-SURGE 2.0' 
  | 'WORKSHOP' 
  | 'ARDUINO DAY' 
  | 'RESEARCH-a-THON' 
  | 'TECH-TALK'
  | 'MESH AFTER DARK';

export type EventStatus = 'REGISTRATION_OPEN' | 'SEATS_FULL' | 'UPCOMING' | 'COMPLETED';

export interface ClubEvent {
  id: string;
  category: EventCategory;
  title: string;
  subtitle?: string;          // e.g. "MESH NETWORKING LAB & HARDWARE SPRINT"
  date: string;               // e.g. "24 MAY 2025" (for ticket display)
  fullDateIso: string;        // e.g. "2025-05-24T14:00:00+05:30" (for Calendar engines)
  endDateIso: string;         // e.g. "2025-05-24T18:00:00+05:30"
  time: string;               // e.g. "02:00 PM - 06:00 PM"
  venue: string;              // e.g. "CSE LAB, JU-FET"
  roomNumber?: string;        // e.g. "Lab 219" (Optional)
  status: EventStatus;
  
  // Visual Dossier Fields (Matching the Approved UI):
  badgeText?: string;         // e.g. "LOCKED IN //" (Card 1) or "ON DECK //" (Card 2)
  handwrittenNote?: string;   // e.g. "Bring your board. We'll figure it out. :)"
  stampText?: string;         // e.g. "SEATS FILLING FAST!"
  themeColor?: 'green' | 'orange'; // 'green' for Card 1, 'orange' for Card 2
  
  // CTAs & Assets:
  registrationUrl?: string;
  brochureUrl?: string;       // For DOWNLOAD BROCHURE button
  posterUrl?: string;         // Poster graphic path
  recapUrl?: string;
  highlightCategory?: boolean;
  description: string;
}