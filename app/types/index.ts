export interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  time?: string;
  location: string;
  type: EventType;
  status: "upcoming" | "past";
  description: string;
  longDescription?: string;
  coverImage?: string;
  photos?: string[];
  speakers?: Speaker[];
  registrationUrl?: string;
  tags?: string[];
  attendeeCount?: number;
}

export type EventType =
  | "Workshop"
  | "Talk"
  | "lab"
  | "networking"
  | "hackathon"
  | "Kickstart"
  | "Builder Session"
  | "other";

export interface Speaker {
  name: string;
  role: string;
  company: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  batch: string;
  school?: string;
  photo?: string;
  linkedin?: string;
  github?: string;
  isLead?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  type: "certification" | "course" | "guide" | "tool" | "github" | "slides";
  level: "beginner" | "intermediate" | "advanced";
  isFree: boolean;
  tags?: string[];
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  eventId?: string;
  year?: number;
}