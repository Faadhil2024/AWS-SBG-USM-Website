export const SITE_CONFIG = {
  name: "AWS Student Builders Group USM",
  shortName: "AWS SBG USM",
  description:
    "The official AWS student community at Universiti Sains Malaysia, Penang. We run workshops, tech talks, hands-on labs, and cloud learning sessions quarterly.",
  url: "https://awssbgusm.vercel.app",
  university: "Universiti Sains Malaysia",
  universityShort: "USM",
  location: "Penang, Malaysia",
  email: "awssbgusm@gmail.com",
  foundedYear: 2022,
} as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/awsstudentbuildergroup.usm/",
  facebook:  "https://www.facebook.com/awsstudentbuildergroup.usm",
  whatsapp:  "https://chat.whatsapp.com/Je9ERn8HWpQ7c6gn4TkxI7",
  meetup:    "https://www.meetup.com/aws-cloud-club-usm/",
} as const;

export const NAV_ITEMS = [
  { label: "About",     href: "#about" },
  { label: "Events",    href: "#events" },
  { label: "Team",      href: "#team" },
  { label: "Gallery",   href: "#gallery" },
  { label: "Resources", href: "#resources" },
  { label: "Join Us",   href: "#join", highlight: true },
] as const;

export const COMMUNITY_STATS = [
  { value: "200+",  label: "Active Members" },
  { value: "3+",   label: "Events Hosted" },
  { value: "1+",    label: "Years Running" },
  { value: "100%",  label: "Free to Join" },
] as const;

