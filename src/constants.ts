// constants.ts
import { TarotCard } from './types';

const createCardImagePath = (cardName: string): string => {
  // Use placeholder images to test if the component works
  return `https://placehold.co/200x350/667eea/white?text=${encodeURIComponent(cardName)}`;
};

export const TAROT_DECK: TarotCard[] = [
  // === Major Arcana ===
  {
    id: 0,
    name: "The Fool",
    image: createCardImagePath("The Fool"),
    keywords: ["Beginnings", "Innocence", "Spontaneity", "Freedom"],
    meanings: {
      upright: "New beginnings, innocence, spontaneity, free spirit.",
      reversed: "Recklessness, taken advantage of, inconsideration."
    },
    numerology: 0,
    astrology: "Uranus"
  },
  {
    id: 1,
    name: "The Magician",
    image: createCardImagePath("The Magician"),
    keywords: ["Manifestation", "Resourcefulness", "Power", "Will"],
    meanings: {
      upright: "Manifestation, resourcefulness, power, inspired action.",
      reversed: "Manipulation, poor planning, untapped talents, misdirection."
    },
    numerology: 1,
    astrology: "Mercury"
  },
  {
    id: 2,
    name: "The High Priestess",
    image: createCardImagePath("The High Priestess"),
    keywords: ["Intuition", "Mystery", "Sacred Knowledge", "Unconscious"],
    meanings: {
      upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind.",
      reversed: "Secrets, disconnected from intuition, withdrawal, silence."
    },
    numerology: 2,
    astrology: "Moon"
  },
  {
    id: 3,
    name: "The Empress",
    image: createCardImagePath("The Empress"),
    keywords: ["Femininity", "Abundance", "Nurturing", "Creativity"],
    meanings: {
      upright: "Femininity, beauty, nature, nurturing, abundance, fertility.",
      reversed: "Creative block, dependence, emptiness, neglect."
    },
    numerology: 3,
    astrology: "Venus"
  },
  {
    id: 4,
    name: "The Emperor",
    image: createCardImagePath("The Emperor"),
    keywords: ["Authority", "Structure", "Control", "Fatherhood"],
    meanings: {
      upright: "Authority, structure, control, stability, leadership, fatherhood.",
      reversed: "Tyranny, rigidity, coldness, overbearing, insecurity."
    },
    numerology: 4,
    astrology: "Aries"
  },
  {
    id: 5,
    name: "The Hierophant",
    image: createCardImagePath("The Hierophant"),
    keywords: ["Tradition", "Conformity", "Spirituality", "Institutions"],
    meanings: {
      upright: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions.",
      reversed: "Breaking tradition, challenging norms, personal spirituality."
    },
    numerology: 5,
    astrology: "Taurus"
  },
  {
    id: 6,
    name: "The Lovers",
    image: createCardImagePath("The Lovers"),
    keywords: ["Love", "Harmony", "Relationships", "Choices"],
    meanings: {
      upright: "Love, harmony, relationships, alignment of values, choices.",
      reversed: "Disharmony, imbalance, misalignment, broken communication."
    },
    numerology: 6,
    astrology: "Gemini"
  },
  {
    id: 7,
    name: "The Chariot",
    image: createCardImagePath("The Chariot"),
    keywords: ["Control", "Willpower", "Victory", "Determination"],
    meanings: {
      upright: "Control, willpower, victory, assertion, determination.",
      reversed: "Lack of direction, aggression, emotional turmoil, defeat."
    },
    numerology: 7,
    astrology: "Cancer"
  },
  {
    id: 8,
    name: "Strength",
    image: createCardImagePath("Strength"),
    keywords: ["Courage", "Inner Strength", "Compassion", "Patience"],
    meanings: {
      upright: "Inner strength, courage, compassion, patience, influence.",
      reversed: "Self-doubt, weakness, insecurity, raw emotion."
    },
    numerology: 8,
    astrology: "Leo"
  },
  {
    id: 9,
    name: "The Hermit",
    image: createCardImagePath("The Hermit"),
    keywords: ["Soul-searching", "Introspection", "Guidance", "Solitude"],
    meanings: {
      upright: "Soul-searching, introspection, guidance, inner wisdom, solitude.",
      reversed: "Isolation, loneliness, withdrawal, rejection of guidance."
    },
    numerology: 9,
    astrology: "Virgo"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: createCardImagePath("Wheel of Fortune"),
    keywords: ["Change", "Cycles", "Fate", "Luck"],
    meanings: {
      upright: "Good luck, karma, destiny, turning point, cycles.",
      reversed: "Bad luck, resistance to change, lack of control."
    },
    numerology: 10,
    astrology: "Jupiter"
  },
  {
    id: 11,
    name: "Justice",
    image: createCardImagePath("Justice"),
    keywords: ["Fairness", "Truth", "Law", "Cause and Effect"],
    meanings: {
      upright: "Fairness, truth, justice, law, accountability, cause and effect.",
      reversed: "Unfairness, dishonesty, lack of accountability, bias."
    },
    numerology: 11,
    astrology: "Libra"
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: createCardImagePath("The Hanged Man"),
    keywords: ["Surrender", "New Perspective", "Letting Go", "Patience"],
    meanings: {
      upright: "Surrender, new perspective, letting go, patience, suspension.",
      reversed: "Stalling, resistance, indecision, martyrdom."
    },
    numerology: 12,
    astrology: "Water signs"
  },
  {
    id: 13,
    name: "Death",
    image: createCardImagePath("Death"),
    keywords: ["Endings", "Change", "Transformation", "Rebirth"],
    meanings: {
      upright: "Endings, change, transformation, transition, rebirth.",
      reversed: "Resistance to change, stagnation, inability to let go."
    },
    numerology: 13,
    astrology: "Scorpio"
  },
  {
    id: 14,
    name: "Temperance",
    image: createCardImagePath("Temperance"),
    keywords: ["Balance", "Patience", "Moderation", "Harmony"],
    meanings: {
      upright: "Balance, moderation, patience, harmony, purpose.",
      reversed: "Imbalance, excess, disharmony, lack of patience."
    },
    numerology: 14,
    astrology: "Sagittarius"
  },
  {
    id: 15,
    name: "The Devil",
    image: createCardImagePath("The Devil"),
    keywords: ["Shadow Self", "Addiction", "Materialism", "Bondage"],
    meanings: {
      upright: "Shadow self, attachment, addiction, materialism, bondage.",
      reversed: "Breaking free, releasing limiting beliefs, detachment."
    },
    numerology: 15,
    astrology: "Capricorn"
  },
  {
    id: 16,
    name: "The Tower",
    image: createCardImagePath("The Tower"),
    keywords: ["Sudden Change", "Upheaval", "Revelation", "Liberation"],
    meanings: {
      upright: "Sudden change, upheaval, chaos, revelation, liberation.",
      reversed: "Avoiding disaster, delayed change, fear of change."
    },
    numerology: 16,
    astrology: "Mars"
  },
  {
    id: 17,
    name: "The Star",
    image: createCardImagePath("The Star"),
    keywords: ["Hope", "Inspiration", "Faith", "Renewal"],
    meanings: {
      upright: "Hope, faith, purpose, renewal, spirituality, serenity.",
      reversed: "Hopelessness, despair, lost faith, discouragement."
    },
    numerology: 17,
    astrology: "Aquarius"
  },
  {
    id: 18,
    name: "The Moon",
    image: createCardImagePath("The Moon"),
    keywords: ["Illusion", "Fear", "Anxiety", "Unconscious"],
    meanings: {
      upright: "Illusion, fear, anxiety, unconscious, intuition.",
      reversed: "Release of fear, clarity, truth emerging, inner knowing."
    },
    numerology: 18,
    astrology: "Pisces"
  },
  {
    id: 19,
    name: "The Sun",
    image: createCardImagePath("The Sun"),
    keywords: ["Joy", "Success", "Vitality", "Positivity"],
    meanings: {
      upright: "Joy, success, celebration, positivity, vitality, confidence.",
      reversed: "Temporary depression, lack of success, negativity."
    },
    numerology: 19,
    astrology: "Sun"
  },
  {
    id: 20,
    name: "Judgement",
    image: createCardImagePath("Judgement"),
    keywords: ["Rebirth", "Reflection", "Awakening", "Absolution"],
    meanings: {
      upright: "Rebirth, inner calling, absolution, self-reflection, awakening.",
      reversed: "Self-doubt, inner critic, refusal of self-examination."
    },
    numerology: 20,
    astrology: "Pluto"
  },
  {
    id: 21,
    name: "The World",
    image: createCardImagePath("The World"),
    keywords: ["Completion", "Integration", "Wholeness", "Travel"],
    meanings: {
      upright: "Completion, integration, accomplishment, travel, wholeness.",
      reversed: "Incompletion, lack of closure, short-circuiting process."
    },
    numerology: 21,
    astrology: "Saturn"
  },

  // Add 3 more cards to test - we don't need all 78 for testing
  {
    id: 22,
    name: "Ace of Cups",
    image: createCardImagePath("Ace of Cups"),
    keywords: ["Love", "New Feelings", "Spirituality", "Intuition"],
    meanings: {
      upright: "New feelings, love, spirituality, intuition, emotional opportunities.",
      reversed: "Blocked emotions, emotional loss, emptiness."
    },
    numerology: 1,
    astrology: "Cancer"
  },
  {
    id: 23,
    name: "Two of Cups",
    image: createCardImagePath("Two of Cups"),
    keywords: ["Union", "Partnership", "Connection", "Harmony"],
    meanings: {
      upright: "Union, partnership, connection, attraction, harmony.",
      reversed: "Broken communication, imbalance, tension."
    },
    numerology: 2,
    astrology: "Venus in Cancer"
  },
  {
    id: 24,
    name: "Three of Cups",
    image: createCardImagePath("Three of Cups"),
    keywords: ["Celebration", "Friendship", "Community", "Joy"],
    meanings: {
      upright: "Celebration, friendship, community, joy, socializing.",
      reversed: "Isolation, exclusion, superficial connections."
    },
    numerology: 3,
    astrology: "Moon in Cancer"
  }
];
