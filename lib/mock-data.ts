export type EventItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  dateLabel: string;
  location: string;
  host: string;
  capacity: string;
  format: string;
  mockJoined: number;
  statusLabel: string;
  statusTone: "neutral" | "success" | "attention";
  highlights: string[];
};

export const upcomingEvents: EventItem[] = [
  {
    id: "atelier-night",
    name: "Atelier Night",
    category: "Design Salon",
    summary: "A compact evening session for builders, curators, and visual storytellers on Base.",
    description:
      "Atelier Night blends short talks, open studio conversation, and a focused networking hour. The room favors small-group discussion over stage-heavy programming.",
    dateLabel: "Apr 18 · 7:30 PM",
    location: "Pier Studio, Brooklyn",
    host: "Blue North Collective",
    capacity: "64 guests",
    format: "In person",
    mockJoined: 28,
    statusLabel: "Open",
    statusTone: "neutral",
    highlights: ["Short keynote set", "Open RSVP list", "Wallet-based confirmation"],
  },
  {
    id: "morning-grid",
    name: "Morning Grid",
    category: "Founder Breakfast",
    summary: "A fast morning meetup centered on product feedback, launches, and partnership intros.",
    description:
      "Morning Grid is designed for concise conversation and practical exchange. Expect founder tables, a rotating host, and a short review of what is launching next.",
    dateLabel: "Apr 21 · 8:00 AM",
    location: "Lumen Cafe, SoHo",
    host: "Grid Office",
    capacity: "36 seats",
    format: "In person",
    mockJoined: 19,
    statusLabel: "Filling fast",
    statusTone: "attention",
    highlights: ["Hosted breakfast", "Curated guest list", "Priority access for early RSVP"],
  },
  {
    id: "signal-room",
    name: "Signal Room",
    category: "Demo Session",
    summary: "A compact product showcase with guided walkthroughs and a short open floor Q&A.",
    description:
      "Signal Room is built around crisp demos and clear feedback loops. Teams rotate through a lightweight stage format before moving into smaller side conversations.",
    dateLabel: "Apr 25 · 6:15 PM",
    location: "Canal Hall, Manhattan",
    host: "Signal Studio",
    capacity: "80 guests",
    format: "Hybrid",
    mockJoined: 47,
    statusLabel: "Open",
    statusTone: "neutral",
    highlights: ["Five live demos", "Attendance verification", "Confirmation state in app"],
  },
];

export const featuredEvent = upcomingEvents[0];
export const registeredEvents = [upcomingEvents[0], upcomingEvents[2]];

export function getEventById(id: string) {
  return upcomingEvents.find((event) => event.id === id);
}

