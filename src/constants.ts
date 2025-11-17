import { TarotCard } from './types';

// Import all 78 card images
import TheFool from "/cards/The_Fool.jpg";
import TheMagician from "/cards/The_Magician.jpg";
import TheHighPriestess from "/cards/The_High_Priestess.jpg";
import TheEmpress from "/cards/The_Empress.jpg";
import TheEmperor from "/cards/The_Emperor.jpg";
import TheHierophant from "/cards/The_Hierophant.jpg";
import TheLovers from "/cards/The_Lovers.jpg";
import TheChariot from "/cards/The_Chariot.jpg";
import Strength from "/cards/Strength.jpg";
import TheHermit from "/cards/The_Hermit.jpg";
import WheelOfFortune from "/cards/Wheel_of_Fortune.jpg";
import Justice from "/cards/Justice.jpg";
import TheHangedMan from "/cards/The_Hanged_Man.jpg";
import Death from "/cards/Death.jpg";
import Temperance from "/cards/Temperance.jpg";
import TheDevil from "/cards/The_Devil.jpg";
import TheTower from "/cards/The_Tower.jpg";
import TheStar from "/cards/The_Star.jpg";
import TheMoon from "/cards/The_Moon.jpg";
import TheSun from "/cards/The_Sun.jpg";
import Judgement from "/cards/Judgement.jpg";
import TheWorld from "/cards/The_World.jpg";

import AceOfCups from "/cards/Ace_of_Cups.jpg";
import TwoOfCups from "/cards/Two_of_Cups.jpg";
import ThreeOfCups from "/cards/Three_of_Cups.jpg";
import FourOfCups from "/cards/Four_of_Cups.jpg";
import FiveOfCups from "/cards/Five_of_Cups.jpg";
import SixOfCups from "/cards/Six_of_Cups.jpg";
import SevenOfCups from "/cards/Seven_of_Cups.jpg";
import EightOfCups from "/cards/Eight_of_Cups.jpg";
import NineOfCups from "/cards/Nine_of_Cups.jpg";
import TenOfCups from "/cards/Ten_of_Cups.jpg";
import PageOfCups from "/cards/Page_of_Cups.jpg";
import KnightOfCups from "/cards/Knight_of_Cups.jpg";
import QueenOfCups from "/cards/Queen_of_Cups.jpg";
import KingOfCups from "/cards/King_of_Cups.jpg";

import AceOfWands from "/cards/Ace_of_Wands.jpg";
import TwoOfWands from "/cards/Two_of_Wands.jpg";
import ThreeOfWands from "/cards/Three_of_Wands.jpg";
import FourOfWands from "/cards/Four_of_Wands.jpg";
import FiveOfWands from "/cards/Five_of_Wands.jpg";
import SixOfWands from "/cards/Six_of_Wands.jpg";
import SevenOfWands from "/cards/Seven_of_Wands.jpg";
import EightOfWands from "/cards/Eight_of_Wands.jpg";
import NineOfWands from "/cards/Nine_of_Wands.jpg";
import TenOfWands from "/cards/Ten_of_Wands.jpg";
import PageOfWands from "/cards/Page_of_Wands.jpg";
import KnightOfWands from "/cards/Knight_of_Wands.jpg";
import QueenOfWands from "/cards/Queen_of_Wands.jpg";
import KingOfWands from "/cards/King_of_Wands.jpg";

import AceOfSwords from "/cards/Ace_of_Swords.jpg";
import TwoOfSwords from "/cards/Two_of_Swords.jpg";
import ThreeOfSwords from "/cards/Three_of_Swords.jpg";
import FourOfSwords from "/cards/Four_of_Swords.jpg";
import FiveOfSwords from "/cards/Five_of_Swords.jpg";
import SixOfSwords from "/cards/Six_of_Swords.jpg";
import SevenOfSwords from "/cards/Seven_of_Swords.jpg";
import EightOfSwords from "/cards/Eight_of_Swords.jpg";
import NineOfSwords from "/cards/Nine_of_Swords.jpg";
import TenOfSwords from "/cards/Ten_of_Swords.jpg";
import PageOfSwords from "/cards/Page_of_Swords.jpg";
import KnightOfSwords from "/cards/Knight_of_Swords.jpg";
import QueenOfSwords from "/cards/Queen_of_Swords.jpg";
import KingOfSwords from "/cards/King_of_Swords.jpg";

import AceOfPentacles from "/cards/Ace_of_Pentacles.jpg";
import TwoOfPentacles from "/cards/Two_of_Pentacles.jpg";
import ThreeOfPentacles from "/cards/Three_of_Pentacles.jpg";
import FourOfPentacles from "/cards/Four_of_Pentacles.jpg";
import FiveOfPentacles from "/cards/Five_of_Pentacles.jpg";
import SixOfPentacles from "/cards/Six_of_Pentacles.jpg";
import SevenOfPentacles from "/cards/Seven_of_Pentacles.jpg";
import EightOfPentacles from "/cards/Eight_of_Pentacles.jpg";
import NineOfPentacles from "/cards/Nine_of_Pentacles.jpg";
import TenOfPentacles from "/cards/Ten_of_Pentacles.jpg";
import PageOfPentacles from "/cards/Page_of_Pentacles.jpg";
import KnightOfPentacles from "/cards/Knight_of_Pentacles.jpg";
import QueenOfPentacles from "/cards/Queen_of_Pentacles.jpg";
import KingOfPentacles from "/cards/King_of_Pentacles.jpg";

export const TAROT_DECK: TarotCard[] = [
  // === Major Arcana ===
  {
    id: 0,
    name: "The Fool",
    image: TheFool,
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
    image: TheMagician,
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
    image: TheHighPriestess,
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
    image: TheEmpress,
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
    image: TheEmperor,
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
    image: TheHierophant,
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
    image: TheLovers,
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
    image: TheChariot,
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
    image: Strength,
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
    image: TheHermit,
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
    image: WheelOfFortune,
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
    image: Justice,
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
    image: TheHangedMan,
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
    image: Death,
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
    image: Temperance,
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
    image: TheDevil,
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
    image: TheTower,
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
    image: TheStar,
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
    image: TheMoon,
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
    image: TheSun,
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
    image: Judgement,
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
    image: TheWorld,
    keywords: ["Completion", "Integration", "Wholeness", "Travel"],
    meanings: {
      upright: "Completion, integration, accomplishment, travel, wholeness.",
      reversed: "Incompletion, lack of closure, short-circuiting process."
    },
    numerology: 21,
    astrology: "Saturn"
  },

  // === Minor Arcana: Cups ===
  {
    id: 22,
    name: "Ace of Cups",
    image: AceOfCups,
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
    image: TwoOfCups,
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
    image: ThreeOfCups,
    keywords: ["Celebration", "Friendship", "Community", "Joy"],
    meanings: {
      upright: "Celebration, friendship, community, joy, socializing.",
      reversed: "Isolation, exclusion, superficial connections."
    },
    numerology: 3,
    astrology: "Moon in Cancer"
  },
  {
    id: 25,
    name: "Four of Cups",
    image: FourOfCups,
    keywords: ["Apathy", "Discontent", "Boredom", "Indifference"],
    meanings: {
      upright: "Apathy, discontent, boredom, indifference, disengagement.",
      reversed: "New opportunities, renewed interest, re-engagement."
    },
    numerology: 4,
    astrology: "Jupiter in Cancer"
  },
  {
    id: 26,
    name: "Five of Cups",
    image: FiveOfCups,
    keywords: ["Loss", "Regret", "Disappointment", "Grief"],
    meanings: {
      upright: "Loss, regret, disappointment, grief, focusing on what's gone.",
      reversed: "Acceptance, moving on, finding hope in the present."
    },
    numerology: 5,
    astrology: "Mars in Cancer"
  },
  {
    id: 27,
    name: "Six of Cups",
    image: SixOfCups,
    keywords: ["Nostalgia", "Childhood", "Innocence", "Memory"],
    meanings: {
      upright: "Nostalgia, childhood, innocence, memory, revisiting the past.",
      reversed: "Stuck in the past, unrealistic expectations, idealization."
    },
    numerology: 6,
    astrology: "Venus in Cancer"
  },
  {
    id: 28,
    name: "Seven of Cups",
    image: SevenOfCups,
    keywords: ["Illusion", "Choice", "Fantasy", "Confusion"],
    meanings: {
      upright: "Illusion, choice, fantasy, confusion, daydreaming.",
      reversed: "Clarity, focus, practical decisions, grounding."
    },
    numerology: 7,
    astrology: "Neptune in Cancer"
  },
  {
    id: 29,
    name: "Eight of Cups",
    image: EightOfCups,
    keywords: ["Walking Away", "Letting Go", "Disillusionment", "Withdrawal"],
    meanings: {
      upright: "Walking away, letting go, disillusionment, withdrawal, seeking deeper meaning.",
      reversed: "Staying too long, fear of change, clinging to the familiar."
    },
    numerology: 8,
    astrology: "Saturn in Cancer"
  },
  {
    id: 30,
    name: "Nine of Cups",
    image: NineOfCups,
    keywords: ["Contentment", "Wishes Fulfilled", "Satisfaction", "Gratitude"],
    meanings: {
      upright: "Contentment, wishes fulfilled, satisfaction, gratitude, emotional fulfillment.",
      reversed: "Overindulgence, complacency, unmet expectations."
    },
    numerology: 9,
    astrology: "Jupiter in Cancer"
  },
  {
    id: 31,
    name: "Ten of Cups",
    image: TenOfCups,
    keywords: ["Happiness", "Family", "Harmony", "Fulfillment"],
    meanings: {
      upright: "Happiness, family, harmony, fulfillment, emotional security.",
      reversed: "Dysfunction, conflict, unfulfilled dreams."
    },
    numerology: 10,
    astrology: "Moon in Cancer"
  },
  {
    id: 32,
    name: "Page of Cups",
    image: PageOfCups,
    keywords: ["Emotional Growth", "Intuition", "New Feelings", "Creativity"],
    meanings: {
      upright: "Emotional growth, intuition, new feelings, creativity, sensitivity.",
      reversed: "Emotional immaturity, avoidance, blocked creativity."
    },
    numerology: 11,
    astrology: "Mercury in Cancer"
  },
  {
    id: 33,
    name: "Knight of Cups",
    image: KnightOfCups,
    keywords: ["Romance", "Charm", "Idealism", "Emotional Journey"],
    meanings: {
      upright: "Romance, charm, idealism, emotional journey, artistic expression.",
      reversed: "Deceit, emotional manipulation, unrealistic expectations."
    },
    numerology: 12,
    astrology: "Venus in Cancer"
  },
  {
    id: 34,
    name: "Queen of Cups",
    image: QueenOfCups,
    keywords: ["Compassion", "Intuition", "Nurturing", "Empathy"],
    meanings: {
      upright: "Compassion, intuition, nurturing, empathy, emotional support.",
      reversed: "Overly sensitive, moodiness, emotional dependency."
    },
    numerology: 13,
    astrology: "Moon in Cancer"
  },
  {
    id: 35,
    name: "King of Cups",
    image: KingOfCups,
    keywords: ["Emotional Maturity", "Compassion", "Balance", "Wisdom"],
    meanings: {
      upright: "Emotional maturity, compassion, balance, wisdom, emotional control.",
      reversed: "Emotional manipulation, repression, coldness."
    },
    numerology: 14,
    astrology: "Jupiter in Cancer"
  },

  // === Minor Arcana: Wands ===
  {
    id: 36,
    name: "Ace of Wands",
    image: AceOfWands,
    keywords: ["Inspiration", "New Opportunities", "Growth", "Potential"],
    meanings: {
      upright: "Inspiration, new opportunities, growth, potential, passion.",
      reversed: "Delays, lack of passion, missed opportunities."
    },
    numerology: 1,
    astrology: "Aries"
  },
  {
    id: 37,
    name: "Two of Wands",
    image: TwoOfWands,
    keywords: ["Future Planning", "Progress", "Decisions", "Discovery"],
    meanings: {
      upright: "Future planning, progress, decisions, discovery, expansion.",
      reversed: "Fear of change, poor planning, disorganization."
    },
    numerology: 2,
    astrology: "Mars in Aries"
  },
  {
    id: 38,
    name: "Three of Wands",
    image: ThreeOfWands,
    keywords: ["Expansion", "Planning", "Teamwork", "Vision"],
    meanings: {
      upright: "Expansion, planning, teamwork, vision, looking ahead.",
      reversed: "Stagnation, lack of direction, isolation."
    },
    numerology: 3,
    astrology: "Jupiter in Aries"
  },
  {
    id: 39,
    name: "Four of Wands",
    image: FourOfWands,
    keywords: ["Celebration", "Stability", "Home", "Foundation"],
    meanings: {
      upright: "Celebration, stability, home, foundation, harmony.",
      reversed: "Instability, lack of security, temporary situations."
    },
    numerology: 4,
    astrology: "Venus in Aries"
  },
  {
    id: 40,
    name: "Five of Wands",
    image: FiveOfWands,
    keywords: ["Conflict", "Competition", "Struggle", "Challenge"],
    meanings: {
      upright: "Conflict, competition, struggle, challenge, testing boundaries.",
      reversed: "Resolution, cooperation, avoiding unnecessary conflict."
    },
    numerology: 5,
    astrology: "Mars in Aries"
  },
  {
    id: 41,
    name: "Six of Wands",
    image: SixOfWands,
    keywords: ["Victory", "Recognition", "Success", "Celebration"],
    meanings: {
      upright: "Victory, recognition, success, celebration, public approval.",
      reversed: "Ego, arrogance, false victory, lack of recognition."
    },
    numerology: 6,
    astrology: "Sun in Aries"
  },
  {
    id: 42,
    name: "Seven of Wands",
    image: SevenOfWands,
    keywords: ["Defense", "Perseverance", "Stand Your Ground", "Resilience"],
    meanings: {
      upright: "Defense, perseverance, stand your ground, resilience, overcoming obstacles.",
      reversed: "Giving up, surrender, feeling overwhelmed."
    },
    numerology: 7,
    astrology: "Moon in Aries"
  },
  {
    id: 43,
    name: "Eight of Wands",
    image: EightOfWands,
    keywords: ["Speed", "Action", "Progress", "Movement"],
    meanings: {
      upright: "Speed, action, progress, movement, quick results.",
      reversed: "Delays, stagnation, lack of momentum."
    },
    numerology: 8,
    astrology: "Mercury in Aries"
  },
  {
    id: 44,
    name: "Nine of Wands",
    image: NineOfWands,
    keywords: ["Endurance", "Resilience", "Last Stand", "Preparation"],
    meanings: {
      upright: "Endurance, resilience, last stand, preparation, guard your position.",
      reversed: "Exhaustion, giving up, lack of preparedness."
    },
    numerology: 9,
    astrology: "Saturn in Aries"
  },
  {
    id: 45,
    name: "Ten of Wands",
    image: TenOfWands,
    keywords: ["Burden", "Responsibility", "Overwhelm", "Commitment"],
    meanings: {
      upright: "Burden, responsibility, overwhelm, commitment, carrying weight.",
      reversed: "Releasing burden, delegating, lightening load."
    },
    numerology: 10,
    astrology: "Jupiter in Aries"
  },
  {
    id: 46,
    name: "Page of Wands",
    image: PageOfWands,
    keywords: ["Enthusiasm", "Adventure", "New Ideas", "Energy"],
    meanings: {
      upright: "Enthusiasm, adventure, new ideas, energy, curiosity.",
      reversed: "Impatience, recklessness, lack of follow-through."
    },
    numerology: 11,
    astrology: "Mercury in Aries"
  },
  {
    id: 47,
    name: "Knight of Wands",
    image: KnightOfWands,
    keywords: ["Action", "Passion", "Adventure", "Impulsiveness"],
    meanings: {
      upright: "Action, passion, adventure, impulsiveness, bold moves.",
      reversed: "Rashness, impatience, burnout, lack of direction."
    },
    numerology: 12,
    astrology: "Venus in Aries"
  },
  {
    id: 48,
    name: "Queen of Wands",
    image: QueenOfWands,
    keywords: ["Confidence", "Charisma", "Leadership", "Passion"],
    meanings: {
      upright: "Confidence, charisma, leadership, passion, warmth.",
      reversed: "Jealousy, insecurity, domineering behavior."
    },
    numerology: 13,
    astrology: "Moon in Aries"
  },
  {
    id: 49,
    name: "King of Wands",
    image: KingOfWands,
    keywords: ["Leadership", "Vision", "Courage", "Inspiration"],
    meanings: {
      upright: "Leadership, vision, courage, inspiration, dynamic energy.",
      reversed: "Tyranny, arrogance, reckless ambition."
    },
    numerology: 14,
    astrology: "Jupiter in Aries"
  },

  // === Minor Arcana: Swords ===
  {
    id: 50,
    name: "Ace of Swords",
    image: AceOfSwords,
    keywords: ["Clarity", "Breakthrough", "Truth", "Mental Power"],
    meanings: {
      upright: "Clarity, breakthrough, truth, mental power, new ideas.",
      reversed: "Confusion, mental chaos, harsh truth, manipulation."
    },
    numerology: 1,
    astrology: "Air"
  },
  {
    id: 51,
    name: "Two of Swords",
    image: TwoOfSwords,
    keywords: ["Indecision", "Stalemate", "Balance", "Avoidance"],
    meanings: {
      upright: "Indecision, stalemate, balance, avoidance, weighing options.",
      reversed: "Decision made, breaking deadlock, facing reality."
    },
    numerology: 2,
    astrology: "Mercury in Air"
  },
  {
    id: 52,
    name: "Three of Swords",
    image: ThreeOfSwords,
    keywords: ["Heartbreak", "Pain", "Sorrow", "Betrayal"],
    meanings: {
      upright: "Heartbreak, pain, sorrow, betrayal, emotional wound.",
      reversed: "Healing, forgiveness, moving on, release of pain."
    },
    numerology: 3,
    astrology: "Moon in Air"
  },
  {
    id: 53,
    name: "Four of Swords",
    image: FourOfSwords,
    keywords: ["Rest", "Recovery", "Peace", "Meditation"],
    meanings: {
      upright: "Rest, recovery, peace, meditation, retreat, healing.",
      reversed: "Restlessness, impatience, forced rest, mental fatigue."
    },
    numerology: 4,
    astrology: "Venus in Air"
  },
  {
    id: 54,
    name: "Five of Swords",
    image: FiveOfSwords,
    keywords: ["Conflict", "Defeat", "Aggression", "Win at All Costs"],
    meanings: {
      upright: "Conflict, defeat, aggression, win at all costs, verbal sparring.",
      reversed: "Reconciliation, compromise, letting go of grudges."
    },
    numerology: 5,
    astrology: "Mars in Air"
  },
  {
    id: 55,
    name: "Six of Swords",
    image: SixOfSwords,
    keywords: ["Transition", "Move On", "Progress", "Healing"],
    meanings: {
      upright: "Transition, move on, progress, healing, leaving the past behind.",
      reversed: "Stuck in the past, resistance to change, emotional baggage."
    },
    numerology: 6,
    astrology: "Jupiter in Air"
  },
  {
    id: 56,
    name: "Seven of Swords",
    image: SevenOfSwords,
    keywords: ["Deception", "Stealth", "Strategy", "Trickery"],
    meanings: {
      upright: "Deception, stealth, strategy, trickery, bending the rules.",
      reversed: "Honesty, transparency, facing consequences, no more secrets."
    },
    numerology: 7,
    astrology: "Moon in Air"
  },
  {
    id: 57,
    name: "Eight of Swords",
    image: EightOfSwords,
    keywords: ["Trapped", "Limitation", "Restriction", "Fear"],
    meanings: {
      upright: "Trapped, limitation, restriction, fear, self-imposed prison.",
      reversed: "Freedom, release, breaking free, regaining control."
    },
    numerology: 8,
    astrology: "Saturn in Air"
  },
  {
    id: 58,
    name: "Nine of Swords",
    image: NineOfSwords,
    keywords: ["Anxiety", "Nightmares", "Worry", "Guilt"],
    meanings: {
      upright: "Anxiety, nightmares, worry, guilt, mental anguish.",
      reversed: "Relief, release, facing fears, letting go of guilt."
    },
    numerology: 9,
    astrology: "Neptune in Air"
  },
  {
    id: 59,
    name: "Ten of Swords",
    image: TenOfSwords,
    keywords: ["End", "Finality", "Devastation", "Release"],
    meanings: {
      upright: "End, finality, devastation, release, hitting rock bottom.",
      reversed: "Recovery, rebuilding, learning from failure."
    },
    numerology: 10,
    astrology: "Pluto in Air"
  },
  {
    id: 60,
    name: "Page of Swords",
    image: PageOfSwords,
    keywords: ["Curiosity", "Intellect", "Alertness", "New Ideas"],
    meanings: {
      upright: "Curiosity, intellect, alertness, new ideas, sharp mind.",
      reversed: "Immaturity, impatience, hasty decisions, lack of focus."
    },
    numerology: 11,
    astrology: "Mercury in Air"
  },
  {
    id: 61,
    name: "Knight of Swords",
    image: KnightOfSwords,
    keywords: ["Action", "Aggression", "Directness", "Impulsiveness"],
    meanings: {
      upright: "Action, aggression, directness, impulsiveness, charging forward.",
      reversed: "Recklessness, rashness, lack of strategy, burnout."
    },
    numerology: 12,
    astrology: "Venus in Air"
  },
  {
    id: 62,
    name: "Queen of Swords",
    image: QueenOfSwords,
    keywords: ["Clarity", "Truth", "Independence", "Sharp Mind"],
    meanings: {
      upright: "Clarity, truth, independence, sharp mind, cutting through illusions.",
      reversed: "Cynicism, bitterness, coldness, emotional detachment."
    },
    numerology: 13,
    astrology: "Moon in Air"
  },
  {
    id: 63,
    name: "King of Swords",
    image: KingOfSwords,
    keywords: ["Logic", "Authority", "Justice", "Intellect"],
    meanings: {
      upright: "Logic, authority, justice, intellect, clear thinking.",
      reversed: "Cruelty, tyranny, manipulation, misuse of power."
    },
    numerology: 14,
    astrology: "Jupiter in Air"
  },

  // === Minor Arcana: Pentacles ===
  {
    id: 64,
    name: "Ace of Pentacles",
    image: AceOfPentacles,
    keywords: ["Opportunity", "Prosperity", "New Ventures", "Wealth"],
    meanings: {
      upright: "Opportunity, prosperity, new ventures, wealth, manifestation.",
      reversed: "Lost opportunity, lack of planning, scarcity mindset."
    },
    numerology: 1,
    astrology: "Earth"
  },
  {
    id: 65,
    name: "Two of Pentacles",
    image: TwoOfPentacles,
    keywords: ["Balance", "Adaptability", "Juggling", "Flexibility"],
    meanings: {
      upright: "Balance, adaptability, juggling, flexibility, managing multiple priorities.",
      reversed: "Overwhelm, imbalance, poor time management, stress."
    },
    numerology: 2,
    astrology: "Mercury in Earth"
  },
  {
    id: 66,
    name: "Three of Pentacles",
    image: ThreeOfPentacles,
    keywords: ["Teamwork", "Skill", "Collaboration", "Mastery"],
    meanings: {
      upright: "Teamwork, skill, collaboration, mastery, building something together.",
      reversed: "Lack of cooperation, poor craftsmanship, isolation."
    },
    numerology: 3,
    astrology: "Moon in Earth"
  },
  {
    id: 67,
    name: "Four of Pentacles",
    image: FourOfPentacles,
    keywords: ["Security", "Possession", "Conservatism", "Hoarding"],
    meanings: {
      upright: "Security, possession, conservatism, hoarding, material stability.",
      reversed: "Generosity, letting go, financial freedom, sharing."
    },
    numerology: 4,
    astrology: "Venus in Earth"
  },
  {
    id: 68,
    name: "Five of Pentacles",
    image: FiveOfPentacles,
    keywords: ["Hardship", "Poverty", "Exclusion", "Struggle"],
    meanings: {
      upright: "Hardship, poverty, exclusion, struggle, feeling left out.",
      reversed: "Recovery, support, finding help, overcoming adversity."
    },
    numerology: 5,
    astrology: "Mars in Earth"
  },
  {
    id: 69,
    name: "Six of Pentacles",
    image: SixOfPentacles,
    keywords: ["Generosity", "Charity", "Giving", "Receiving"],
    meanings: {
      upright: "Generosity, charity, giving, receiving, balance of exchange.",
      reversed: "Manipulation, dependency, stinginess, imbalance."
    },
    numerology: 6,
    astrology: "Jupiter in Earth"
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    image: SevenOfPentacles,
    keywords: ["Patience", "Evaluation", "Long-Term Goals", "Waiting"],
    meanings: {
      upright: "Patience, evaluation, long-term goals, waiting for results.",
      reversed: "Impatience, frustration, lack of progress, giving up."
    },
    numerology: 7,
    astrology: "Moon in Earth"
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    image: EightOfPentacles,
    keywords: ["Dedication", "Skill", "Mastery", "Hard Work"],
    meanings: {
      upright: "Dedication, skill, mastery, hard work, attention to detail.",
      reversed: "Burnout, lack of focus, poor quality, half-hearted effort."
    },
    numerology: 8,
    astrology: "Saturn in Earth"
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    image: NineOfPentacles,
    keywords: ["Independence", "Self-Sufficiency", "Luxury", "Reward"],
    meanings: {
      upright: "Independence, self-sufficiency, luxury, reward, enjoying the fruits of labor.",
      reversed: "Dependence, financial instability, lack of appreciation."
    },
    numerology: 9,
    astrology: "Neptune in Earth"
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    image: TenOfPentacles,
    keywords: ["Legacy", "Wealth", "Family", "Abundance"],
    meanings: {
      upright: "Legacy, wealth, family, abundance, long-term security.",
      reversed: "Financial loss, family discord, short-term gains."
    },
    numerology: 10,
    astrology: "Pluto in Earth"
  },
  {
    id: 74,
    name: "Page of Pentacles",
    image: PageOfPentacles,
    keywords: ["Practicality", "Learning", "New Skills", "Material Focus"],
    meanings: {
      upright: "Practicality, learning, new skills, material focus, grounded approach.",
      reversed: "Laziness, lack of discipline, short-term thinking."
    },
    numerology: 11,
    astrology: "Mercury in Earth"
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    image: KnightOfPentacles,
    keywords: ["Diligence", "Reliability", "Consistency", "Hard Work"],
    meanings: {
      upright: "Diligence, reliability, consistency, hard work, slow but steady progress.",
      reversed: "Stubbornness, laziness, lack of initiative, resistance to change."
    },
    numerology: 12,
    astrology: "Venus in Earth"
  },
  {
    id: 76,
    name: "Queen of Pentacles",
    image: QueenOfPentacles,
    keywords: ["Nurturing", "Practicality", "Abundance", "Comfort"],
    meanings: {
      upright: "Nurturing, practicality, abundance, comfort, material security.",
      reversed: "Overindulgence, materialism, neglect of emotional needs."
    },
    numerology: 13,
    astrology: "Moon in Earth"
  },
  {
    id: 77,
    name: "King of Pentacles",
    image: KingOfPentacles,
    keywords: ["Wealth", "Stability", "Business", "Material Success"],
    meanings: {
      upright: "Wealth, stability, business, material success, practical leadership.",
      reversed: "Greedy, materialistic, miserly, lack of generosity."
    },
    numerology: 14,
    astrology: "Jupiter in Earth"
  }
];
