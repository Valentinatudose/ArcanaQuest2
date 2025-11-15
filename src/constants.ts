import { TarotCard } from './types'; 

export const TAROT_DECK: TarotCard[] = [
  // Example card (replace with your full 78-card deck)
  {
    id: 0,
    name: "The Fool",
    image: "/cards/the-fool.jpg",
    keywords: ["Beginnings", "Innocence", "Spontaneity"],
    meanings: {
      upright: "New beginnings, innocence, spontaneity, free spirit.",
      reversed: "Recklessness, taken advantage of, inconsideration."
    },
    numerology: 0,
    astrology: "Uranus"
  },
  // ... add all 78 cards
];
