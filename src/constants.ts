import { TarotCard } from './types';

export const TAROT_DECK: TarotCard[] = [
  // === Major Arcana ===
  {
    id: 0,
    name: "The Fool",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/01_The_Fool.jpg",
    keywords: ["Beginnings", "Innocence", "Spontaneity", "Freedom"],
    meanings: {
      upright: "New beginnings, innocence, spontaneity, free spirit, trusting the universe.",
      reversed: "Recklessness, taken advantage of, poor judgment, inconsideration."
    },
    numerology: 0,
    astrology: "Uranus"
  },
  {
    id: 1,
    name: "The Magician",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/02_The_Magician.jpg",
    keywords: ["Manifestation", "Resourcefulness", "Power", "Will"],
    meanings: {
      upright: "Manifestation, resourcefulness, power, inspired action, direction.",
      reversed: "Manipulation, poor planning, untapped talents, misdirection."
    },
    numerology: 1,
    astrology: "Mercury"
  },
  {
    id: 2,
    name: "The High Priestess",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/03_The_High_Priestess.jpg",
    keywords: ["Intuition", "Mystery", "Sacred Knowledge", "Unconscious"],
    meanings: {
      upright: "Intuition, sacred knowledge, divine feminine, the subconscious mind, inner voice.",
      reversed: "Secrets, disconnected from intuition, withdrawal, silence, hidden motives."
    },
    numerology: 2,
    astrology: "Moon"
  },
  {
    id: 3,
    name: "The Empress",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/04_The_Empress.jpg",
    keywords: ["Femininity", "Abundance", "Nurturing", "Creativity"],
    meanings: {
      upright: "Femininity, beauty, nature, nurturing, abundance, fertility, sensual pleasure.",
      reversed: "Creative block, dependence, emptiness, neglect, overindulgence."
    },
    numerology: 3,
    astrology: "Venus"
  },
  {
    id: 4,
    name: "The Emperor",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/05_The_Emperor.jpg",
    keywords: ["Authority", "Structure", "Control", "Fatherhood"],
    meanings: {
      upright: "Authority, structure, control, stability, leadership, fatherhood, rationality.",
      reversed: "Tyranny, rigidity, coldness, overbearing, insecurity, lack of discipline."
    },
    numerology: 4,
    astrology: "Aries"
  },
  {
    id: 5,
    name: "The Hierophant",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/06_The_Hierophant.jpg",
    keywords: ["Tradition", "Conformity", "Spirituality", "Institutions"],
    meanings: {
      upright: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions, mentorship.",
      reversed: "Breaking tradition, challenging norms, personal spirituality, rebellion."
    },
    numerology: 5,
    astrology: "Taurus"
  },
  {
    id: 6,
    name: "The Lovers",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/07_The_Lovers.jpg",
    keywords: ["Love", "Harmony", "Relationships", "Choices"],
    meanings: {
      upright: "Love, harmony, relationships, alignment of values, choices, soulmate connection.",
      reversed: "Disharmony, imbalance, misalignment, broken communication, betrayal."
    },
    numerology: 6,
    astrology: "Gemini"
  },
  {
    id: 7,
    name: "The Chariot",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/08_The_Chariot.jpg",
    keywords: ["Control", "Willpower", "Victory", "Determination"],
    meanings: {
      upright: "Control, willpower, victory, assertion, determination, overcoming obstacles.",
      reversed: "Lack of direction, aggression, emotional turmoil, defeat, low self-discipline."
    },
    numerology: 7,
    astrology: "Cancer"
  },
  {
    id: 8,
    name: "Strength",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/09_Strength.jpg",
    keywords: ["Courage", "Inner Strength", "Compassion", "Patience"],
    meanings: {
      upright: "Inner strength, courage, compassion, patience, influence, gentle control.",
      reversed: "Self-doubt, weakness, insecurity, raw emotion, lack of self-control."
    },
    numerology: 8,
    astrology: "Leo"
  },
  {
    id: 9,
    name: "The Hermit",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/10_The_Hermit.jpg",
    keywords: ["Soul-searching", "Introspection", "Guidance", "Solitude"],
    meanings: {
      upright: "Soul-searching, introspection, guidance, inner wisdom, solitude, seeking truth.",
      reversed: "Isolation, loneliness, withdrawal, rejection of guidance, lost in darkness."
    },
    numerology: 9,
    astrology: "Virgo"
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/11_Wheel_of_Fortune.jpg",
    keywords: ["Change", "Cycles", "Fate", "Luck"],
    meanings: {
      upright: "Good luck, karma, destiny, turning point, cycles, divine intervention.",
      reversed: "Bad luck, resistance to change, lack of control, missed opportunity."
    },
    numerology: 10,
    astrology: "Jupiter"
  },
  {
    id: 11,
    name: "Justice",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/12_Justice.jpg",
    keywords: ["Fairness", "Truth", "Law", "Cause and Effect"],
    meanings: {
      upright: "Fairness, truth, justice, law, accountability, cause and effect, balance.",
      reversed: "Unfairness, dishonesty, lack of accountability, bias, injustice."
    },
    numerology: 11,
    astrology: "Libra"
  },
  {
    id: 12,
    name: "The Hanged Man",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/13_The_Hanged_Man.jpg",
    keywords: ["Surrender", "New Perspective", "Letting Go", "Patience"],
    meanings: {
      upright: "Surrender, new perspective, letting go, patience, suspension, seeing differently.",
      reversed: "Stalling, resistance, indecision, martyrdom, refusal to sacrifice."
    },
    numerology: 12,
    astrology: "Water signs"
  },
  {
    id: 13,
    name: "Death",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/14_Death.jpg",
    keywords: ["Endings", "Change", "Transformation", "Rebirth"],
    meanings: {
      upright: "Endings, change, transformation, transition, rebirth, new beginning.",
      reversed: "Resistance to change, stagnation, inability to let go, fear of the unknown."
    },
    numerology: 13,
    astrology: "Scorpio"
  },
  {
    id: 14,
    name: "Temperance",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/15_Temperance.jpg",
    keywords: ["Balance", "Patience", "Moderation", "Harmony"],
    meanings: {
      upright: "Balance, moderation, patience, harmony, purpose, blending opposites.",
      reversed: "Imbalance, excess, disharmony, lack of patience, extremes."
    },
    numerology: 14,
    astrology: "Sagittarius"
  },
  {
    id: 15,
    name: "The Devil",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/16_The_Devil.jpg",
    keywords: ["Shadow Self", "Addiction", "Materialism", "Bondage"],
    meanings: {
      upright: "Shadow self, attachment, addiction, materialism, bondage, unhealthy ties.",
      reversed: "Breaking free, releasing limiting beliefs, detachment, liberation."
    },
    numerology: 15,
    astrology: "Capricorn"
  },
  {
    id: 16,
    name: "The Tower",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/17_The_Tower.jpg",
    keywords: ["Sudden Change", "Upheaval", "Revelation", "Liberation"],
    meanings: {
      upright: "Sudden change, upheaval, chaos, revelation, liberation, truth revealed.",
      reversed: "Avoiding disaster, delayed change, fear of change, rebuilding slowly."
    },
    numerology: 16,
    astrology: "Mars"
  },
  {
    id: 17,
    name: "The Star",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/18_The_Star.jpg",
    keywords: ["Hope", "Inspiration", "Faith", "Renewal"],
    meanings: {
      upright: "Hope, faith, purpose, renewal, spirituality, serenity, healing.",
      reversed: "Hopelessness, despair, lost faith, discouragement, lack of purpose."
    },
    numerology: 17,
    astrology: "Aquarius"
  },
  {
    id: 18,
    name: "The Moon",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/19_The_Moon.jpg",
    keywords: ["Illusion", "Fear", "Anxiety", "Unconscious"],
    meanings: {
      upright: "Illusion, fear, anxiety, unconscious, intuition, hidden enemies, deception.",
      reversed: "Release of fear, clarity, truth emerging, inner knowing, resolution."
    },
    numerology: 18,
    astrology: "Pisces"
  },
  {
    id: 19,
    name: "The Sun",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/20_The_Sun.jpg",
    keywords: ["Joy", "Success", "Vitality", "Positivity"],
    meanings: {
      upright: "Joy, success, celebration, positivity, vitality, confidence, good health.",
      reversed: "Temporary depression, lack of success, negativity, delayed happiness."
    },
    numerology: 19,
    astrology: "Sun"
  },
  {
    id: 20,
    name: "Judgement",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/21_Judgement.jpg",
    keywords: ["Rebirth", "Reflection", "Awakening", "Absolution"],
    meanings: {
      upright: "Rebirth, inner calling, absolution, self-reflection, awakening, redemption.",
      reversed: "Self-doubt, inner critic, refusal of self-examination, guilt, regret."
    },
    numerology: 20,
    astrology: "Pluto"
  },
  {
    id: 21,
    name: "The World",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/22_The_World.jpg",
    keywords: ["Completion", "Integration", "Wholeness", "Travel"],
    meanings: {
      upright: "Completion, integration, accomplishment, travel, wholeness, fulfillment.",
      reversed: "Incompletion, lack of closure, short-circuiting process, delay."
    },
    numerology: 21,
    astrology: "Saturn"
  },

  // === Minor Arcana: Wands ===
  {
    id: 22,
    name: "Ace of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/23_Ace_of_Wands.jpg",
    keywords: ["Inspiration", "New Opportunities", "Growth", "Potential"],
    meanings: {
      upright: "Inspiration, new opportunities, growth, potential, passion, creativity.",
      reversed: "Delays, lack of passion, missed opportunities, blocked energy."
    },
    numerology: 1,
    astrology: "Aries"
  },
  {
    id: 23,
    name: "Two of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/24_Two_of_Wands.jpg",
    keywords: ["Future Planning", "Progress", "Decisions", "Discovery"],
    meanings: {
      upright: "Future planning, progress, decisions, discovery, expansion, leadership.",
      reversed: "Fear of change, poor planning, disorganization, lack of vision."
    },
    numerology: 2,
    astrology: "Mars in Aries"
  },
  {
    id: 24,
    name: "Three of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/25_Three_of_Wands.jpg",
    keywords: ["Expansion", "Planning", "Teamwork", "Vision"],
    meanings: {
      upright: "Expansion, planning, teamwork, vision, looking ahead, commerce.",
      reversed: "Stagnation, lack of direction, isolation, pride, missed opportunity."
    },
    numerology: 3,
    astrology: "Jupiter in Aries"
  },
  {
    id: 25,
    name: "Four of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/26_Four_of_Wands.jpg",
    keywords: ["Celebration", "Stability", "Home", "Foundation"],
    meanings: {
      upright: "Celebration, stability, home, foundation, harmony, community.",
      reversed: "Instability, lack of security, temporary situations, family conflict."
    },
    numerology: 4,
    astrology: "Venus in Aries"
  },
  {
    id: 26,
    name: "Five of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/27_Five_of_Wands.jpg",
    keywords: ["Conflict", "Competition", "Struggle", "Challenge"],
    meanings: {
      upright: "Conflict, competition, struggle, challenge, testing boundaries, disagreement.",
      reversed: "Resolution, cooperation, avoiding unnecessary conflict, peace."
    },
    numerology: 5,
    astrology: "Mars in Aries"
  },
  {
    id: 27,
    name: "Six of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/28_Six_of_Wands.jpg",
    keywords: ["Victory", "Recognition", "Success", "Celebration"],
    meanings: {
      upright: "Victory, recognition, success, celebration, public approval, confidence.",
      reversed: "Ego, arrogance, false victory, lack of recognition, self-doubt."
    },
    numerology: 6,
    astrology: "Sun in Aries"
  },
  {
    id: 28,
    name: "Seven of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/29_Seven_of_Wands.jpg",
    keywords: ["Defense", "Perseverance", "Stand Your Ground", "Resilience"],
    meanings: {
      upright: "Defense, perseverance, stand your ground, resilience, overcoming obstacles.",
      reversed: "Giving up, surrender, feeling overwhelmed, insecurity."
    },
    numerology: 7,
    astrology: "Moon in Aries"
  },
  {
    id: 29,
    name: "Eight of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/30_Eight_of_Wands.jpg",
    keywords: ["Speed", "Action", "Progress", "Movement"],
    meanings: {
      upright: "Speed, action, progress, movement, quick results, communication.",
      reversed: "Delays, stagnation, lack of momentum, frustration, waiting."
    },
    numerology: 8,
    astrology: "Mercury in Aries"
  },
  {
    id: 30,
    name: "Nine of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/31_Nine_of_Wands.jpg",
    keywords: ["Endurance", "Resilience", "Last Stand", "Preparation"],
    meanings: {
      upright: "Endurance, resilience, last stand, preparation, guard your position.",
      reversed: "Exhaustion, giving up, lack of preparedness, fatigue."
    },
    numerology: 9,
    astrology: "Saturn in Aries"
  },
  {
    id: 31,
    name: "Ten of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/32_Ten_of_Wands.jpg",
    keywords: ["Burden", "Responsibility", "Overwhelm", "Commitment"],
    meanings: {
      upright: "Burden, responsibility, overwhelm, commitment, carrying weight, stress.",
      reversed: "Releasing burden, delegating, lightening load, relief, teamwork."
    },
    numerology: 10,
    astrology: "Jupiter in Aries"
  },
  {
    id: 32,
    name: "Page of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/33_Page_of_Wands.jpg",
    keywords: ["Enthusiasm", "Adventure", "New Ideas", "Energy"],
    meanings: {
      upright: "Enthusiasm, adventure, new ideas, energy, curiosity, discovery.",
      reversed: "Impatience, recklessness, lack of follow-through, delays."
    },
    numerology: 11,
    astrology: "Mercury in Aries"
  },
  {
    id: 33,
    name: "Knight of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/34_Knight_of_Wands.jpg",
    keywords: ["Action", "Passion", "Adventure", "Impulsiveness"],
    meanings: {
      upright: "Action, passion, adventure, impulsiveness, bold moves, charisma.",
      reversed: "Rashness, impatience, burnout, lack of direction, scattered energy."
    },
    numerology: 12,
    astrology: "Venus in Aries"
  },
  {
    id: 34,
    name: "Queen of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/35_Queen_of_Wands.jpg",
    keywords: ["Confidence", "Charisma", "Leadership", "Passion"],
    meanings: {
      upright: "Confidence, charisma, leadership, passion, warmth, independence.",
      reversed: "Jealousy, insecurity, domineering behavior, temper, attention-seeking."
    },
    numerology: 13,
    astrology: "Moon in Aries"
  },
  {
    id: 35,
    name: "King of Wands",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/36_King_of_Wands.jpg",
    keywords: ["Leadership", "Vision", "Courage", "Inspiration"],
    meanings: {
      upright: "Leadership, vision, courage, inspiration, dynamic energy, enterprise.",
      reversed: "Tyranny, arrogance, reckless ambition, impulsiveness, burnout."
    },
    numerology: 14,
    astrology: "Jupiter in Aries"
  },

  // === Minor Arcana: Cups ===
  {
    id: 36,
    name: "Ace of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/37_Ace_of_Cups.jpg",
    keywords: ["Love", "New Feelings", "Spirituality", "Intuition"],
    meanings: {
      upright: "New feelings, love, spirituality, intuition, emotional opportunities, joy.",
      reversed: "Blocked emotions, emotional loss, emptiness, coldness, creative block."
    },
    numerology: 1,
    astrology: "Cancer"
  },
  {
    id: 37,
    name: "Two of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/38_Two_of_Cups.jpg",
    keywords: ["Union", "Partnership", "Connection", "Harmony"],
    meanings: {
      upright: "Union, partnership, connection, attraction, harmony, mutual respect.",
      reversed: "Broken communication, imbalance, tension, misalignment, divorce."
    },
    numerology: 2,
    astrology: "Venus in Cancer"
  },
  {
    id: 38,
    name: "Three of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/39_Three_of_Cups.jpg",
    keywords: ["Celebration", "Friendship", "Community", "Joy"],
    meanings: {
      upright: "Celebration, friendship, community, joy, socializing, collaboration.",
      reversed: "Isolation, exclusion, superficial connections, overindulgence."
    },
    numerology: 3,
    astrology: "Moon in Cancer"
  },
  {
    id: 39,
    name: "Four of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/40_Four_of_Cups.jpg",
    keywords: ["Apathy", "Discontent", "Boredom", "Indifference"],
    meanings: {
      upright: "Apathy, discontent, boredom, indifference, disengagement, introspection.",
      reversed: "New opportunities, renewed interest, re-engagement, gratitude."
    },
    numerology: 4,
    astrology: "Jupiter in Cancer"
  },
  {
    id: 40,
    name: "Five of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/41_Five_of_Cups.jpg",
    keywords: ["Loss", "Regret", "Disappointment", "Grief"],
    meanings: {
      upright: "Loss, regret, disappointment, grief, focusing on what's gone, sadness.",
      reversed: "Acceptance, moving on, finding hope in the present, forgiveness."
    },
    numerology: 5,
    astrology: "Mars in Cancer"
  },
  {
    id: 41,
    name: "Six of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/42_Six_of_Cups.jpg",
    keywords: ["Nostalgia", "Childhood", "Innocence", "Memory"],
    meanings: {
      upright: "Nostalgia, childhood, innocence, memory, revisiting the past, reunion.",
      reversed: "Stuck in the past, unrealistic expectations, idealization, regret."
    },
    numerology: 6,
    astrology: "Venus in Cancer"
  },
  {
    id: 42,
    name: "Seven of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/43_Seven_of_Cups.jpg",
    keywords: ["Illusion", "Choice", "Fantasy", "Confusion"],
    meanings: {
      upright: "Illusion, choice, fantasy, confusion, daydreaming, wishful thinking.",
      reversed: "Clarity, focus, practical decisions, grounding, commitment."
    },
    numerology: 7,
    astrology: "Neptune in Cancer"
  },
  {
    id: 43,
    name: "Eight of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/44_Eight_of_Cups.jpg",
    keywords: ["Walking Away", "Letting Go", "Disillusionment", "Withdrawal"],
    meanings: {
      upright: "Walking away, letting go, disillusionment, withdrawal, seeking deeper meaning.",
      reversed: "Staying too long, fear of change, clinging to the familiar, avoidance."
    },
    numerology: 8,
    astrology: "Saturn in Cancer"
  },
  {
    id: 44,
    name: "Nine of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/45_Nine_of_Cups.jpg",
    keywords: ["Contentment", "Wishes Fulfilled", "Satisfaction", "Gratitude"],
    meanings: {
      upright: "Contentment, wishes fulfilled, satisfaction, gratitude, emotional fulfillment.",
      reversed: "Overindulgence, complacency, unmet expectations, materialism."
    },
    numerology: 9,
    astrology: "Jupiter in Cancer"
  },
  {
    id: 45,
    name: "Ten of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/46_Ten_of_Cups.jpg",
    keywords: ["Happiness", "Family", "Harmony", "Fulfillment"],
    meanings: {
      upright: "Happiness, family, harmony, fulfillment, emotional security, joy.",
      reversed: "Dysfunction, conflict, unfulfilled dreams, broken home, misalignment."
    },
    numerology: 10,
    astrology: "Moon in Cancer"
  },
  {
    id: 46,
    name: "Page of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/47_Page_of_Cups.jpg",
    keywords: ["Emotional Growth", "Intuition", "New Feelings", "Creativity"],
    meanings: {
      upright: "Emotional growth, intuition, new feelings, creativity, sensitivity.",
      reversed: "Emotional immaturity, avoidance, blocked creativity, insecurity."
    },
    numerology: 11,
    astrology: "Mercury in Cancer"
  },
  {
    id: 47,
    name: "Knight of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/48_Knight_of_Cups.jpg",
    keywords: ["Romance", "Charm", "Idealism", "Emotional Journey"],
    meanings: {
      upright: "Romance, charm, idealism, emotional journey, artistic expression.",
      reversed: "Deceit, emotional manipulation, unrealistic expectations, moodiness."
    },
    numerology: 12,
    astrology: "Venus in Cancer"
  },
  {
    id: 48,
    name: "Queen of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/49_Queen_of_Cups.jpg",
    keywords: ["Compassion", "Intuition", "Nurturing", "Empathy"],
    meanings: {
      upright: "Compassion, intuition, nurturing, empathy, emotional support, calm.",
      reversed: "Overly sensitive, moodiness, emotional dependency, insecurity."
    },
    numerology: 13,
    astrology: "Moon in Cancer"
  },
  {
    id: 49,
    name: "King of Cups",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/50_King_of_Cups.jpg",
    keywords: ["Emotional Maturity", "Compassion", "Balance", "Wisdom"],
    meanings: {
      upright: "Emotional maturity, compassion, balance, wisdom, emotional control.",
      reversed: "Emotional manipulation, repression, coldness, mood swings."
    },
    numerology: 14,
    astrology: "Jupiter in Cancer"
  },

  // === Minor Arcana: Swords ===
  {
    id: 50,
    name: "Ace of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/51_Ace_of_Swords.jpg",
    keywords: ["Clarity", "Breakthrough", "Truth", "Mental Power"],
    meanings: {
      upright: "Clarity, breakthrough, truth, mental power, new ideas, victory.",
      reversed: "Confusion, mental chaos, harsh truth, manipulation, abuse of power."
    },
    numerology: 1,
    astrology: "Air"
  },
  {
    id: 51,
    name: "Two of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/52_Two_of_Swords.jpg",
    keywords: ["Indecision", "Stalemate", "Balance", "Avoidance"],
    meanings: {
      upright: "Indecision, stalemate, balance, avoidance, weighing options, truce.",
      reversed: "Decision made, breaking deadlock, facing reality, clarity."
    },
    numerology: 2,
    astrology: "Mercury in Air"
  },
  {
    id: 52,
    name: "Three of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/53_Three_of_Swords.jpg",
    keywords: ["Heartbreak", "Pain", "Sorrow", "Betrayal"],
    meanings: {
      upright: "Heartbreak, pain, sorrow, betrayal, emotional wound, grief.",
      reversed: "Healing, forgiveness, moving on, release of pain, acceptance."
    },
    numerology: 3,
    astrology: "Moon in Air"
  },
  {
    id: 53,
    name: "Four of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/54_Four_of_Swords.jpg",
    keywords: ["Rest", "Recovery", "Peace", "Meditation"],
    meanings: {
      upright: "Rest, recovery, peace, meditation, retreat, healing, contemplation.",
      reversed: "Restlessness, impatience, forced rest, mental fatigue, burnout."
    },
    numerology: 4,
    astrology: "Venus in Air"
  },
  {
    id: 54,
    name: "Five of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/55_Five_of_Swords.jpg",
    keywords: ["Conflict", "Defeat", "Aggression", "Win at All Costs"],
    meanings: {
      upright: "Conflict, defeat, aggression, win at all costs, verbal sparring, betrayal.",
      reversed: "Reconciliation, compromise, letting go of grudges, peace, truce."
    },
    numerology: 5,
    astrology: "Mars in Air"
  },
  {
    id: 55,
    name: "Six of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/56_Six_of_Swords.jpg",
    keywords: ["Transition", "Move On", "Progress", "Healing"],
    meanings: {
      upright: "Transition, move on, progress, healing, leaving the past behind.",
      reversed: "Stuck in the past, resistance to change, emotional baggage, delay."
    },
    numerology: 6,
    astrology: "Jupiter in Air"
  },
  {
    id: 56,
    name: "Seven of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/57_Seven_of_Swords.jpg",
    keywords: ["Deception", "Stealth", "Strategy", "Trickery"],
    meanings: {
      upright: "Deception, stealth, strategy, trickery, bending the rules, tactics.",
      reversed: "Honesty, transparency, facing consequences, no more secrets, integrity."
    },
    numerology: 7,
    astrology: "Moon in Air"
  },
  {
    id: 57,
    name: "Eight of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/58_Eight_of_Swords.jpg",
    keywords: ["Trapped", "Limitation", "Restriction", "Fear"],
    meanings: {
      upright: "Trapped, limitation, restriction, fear, self-imposed prison, victimhood.",
      reversed: "Freedom, release, breaking free, regaining control, empowerment."
    },
    numerology: 8,
    astrology: "Saturn in Air"
  },
  {
    id: 58,
    name: "Nine of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/59_Nine_of_Swords.jpg",
    keywords: ["Anxiety", "Nightmares", "Worry", "Guilt"],
    meanings: {
      upright: "Anxiety, nightmares, worry, guilt, mental anguish, overthinking.",
      reversed: "Relief, release, facing fears, letting go of guilt, peace of mind."
    },
    numerology: 9,
    astrology: "Neptune in Air"
  },
  {
    id: 59,
    name: "Ten of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/60_Ten_of_Swords.jpg",
    keywords: ["End", "Finality", "Devastation", "Release"],
    meanings: {
      upright: "End, finality, devastation, release, hitting rock bottom, betrayal.",
      reversed: "Recovery, rebuilding, learning from failure, new beginning."
    },
    numerology: 10,
    astrology: "Pluto in Air"
  },
  {
    id: 60,
    name: "Page of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/61_Page_of_Swords.jpg",
    keywords: ["Curiosity", "Intellect", "Alertness", "New Ideas"],
    meanings: {
      upright: "Curiosity, intellect, alertness, new ideas, sharp mind, vigilance.",
      reversed: "Immaturity, impatience, hasty decisions, lack of focus, gossip."
    },
    numerology: 11,
    astrology: "Mercury in Air"
  },
  {
    id: 61,
    name: "Knight of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/62_Knight_of_Swords.jpg",
    keywords: ["Action", "Aggression", "Directness", "Impulsiveness"],
    meanings: {
      upright: "Action, aggression, directness, impulsiveness, charging forward, intellect.",
      reversed: "Recklessness, rashness, lack of strategy, burnout, verbal abuse."
    },
    numerology: 12,
    astrology: "Venus in Air"
  },
  {
    id: 62,
    name: "Queen of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/63_Queen_of_Swords.jpg",
    keywords: ["Clarity", "Truth", "Independence", "Sharp Mind"],
    meanings: {
      upright: "Clarity, truth, independence, sharp mind, cutting through illusions.",
      reversed: "Cynicism, bitterness, coldness, emotional detachment, harsh judgment."
    },
    numerology: 13,
    astrology: "Moon in Air"
  },
  {
    id: 63,
    name: "King of Swords",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/64_King_of_Swords.jpg",
    keywords: ["Logic", "Authority", "Justice", "Intellect"],
    meanings: {
      upright: "Logic, authority, justice, intellect, clear thinking, leadership.",
      reversed: "Cruelty, tyranny, manipulation, misuse of power, cold rationality."
    },
    numerology: 14,
    astrology: "Jupiter in Air"
  },

  // === Minor Arcana: Pentacles ===
  {
    id: 64,
    name: "Ace of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/65_Ace_of_Pentacles.jpg",
    keywords: ["Opportunity", "Prosperity", "New Ventures", "Wealth"],
    meanings: {
      upright: "Opportunity, prosperity, new ventures, wealth, manifestation, abundance.",
      reversed: "Lost opportunity, lack of planning, scarcity mindset, missed chance."
    },
    numerology: 1,
    astrology: "Earth"
  },
  {
    id: 65,
    name: "Two of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/66_Two_of_Pentacles.jpg",
    keywords: ["Balance", "Adaptability", "Juggling", "Flexibility"],
    meanings: {
      upright: "Balance, adaptability, juggling, flexibility, managing multiple priorities.",
      reversed: "Overwhelm, imbalance, poor time management, stress, disorganization."
    },
    numerology: 2,
    astrology: "Mercury in Earth"
  },
  {
    id: 66,
    name: "Three of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/67_Three_of_Pentacles.jpg",
    keywords: ["Teamwork", "Skill", "Collaboration", "Mastery"],
    meanings: {
      upright: "Teamwork, skill, collaboration, mastery, building something together.",
      reversed: "Lack of cooperation, poor craftsmanship, isolation, miscommunication."
    },
    numerology: 3,
    astrology: "Moon in Earth"
  },
  {
    id: 67,
    name: "Four of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/68_Four_of_Pentacles.jpg",
    keywords: ["Security", "Possession", "Conservatism", "Hoarding"],
    meanings: {
      upright: "Security, possession, conservatism, hoarding, material stability.",
      reversed: "Generosity, letting go, financial freedom, sharing, openness."
    },
    numerology: 4,
    astrology: "Venus in Earth"
  },
  {
    id: 68,
    name: "Five of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/69_Five_of_Pentacles.jpg",
    keywords: ["Hardship", "Poverty", "Exclusion", "Struggle"],
    meanings: {
      upright: "Hardship, poverty, exclusion, struggle, feeling left out, insecurity.",
      reversed: "Recovery, support, finding help, overcoming adversity, community."
    },
    numerology: 5,
    astrology: "Mars in Earth"
  },
  {
    id: 69,
    name: "Six of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/70_Six_of_Pentacles.jpg",
    keywords: ["Generosity", "Charity", "Giving", "Receiving"],
    meanings: {
      upright: "Generosity, charity, giving, receiving, balance of exchange, philanthropy.",
      reversed: "Manipulation, dependency, stinginess, imbalance, power games."
    },
    numerology: 6,
    astrology: "Jupiter in Earth"
  },
  {
    id: 70,
    name: "Seven of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/71_Seven_of_Pentacles.jpg",
    keywords: ["Patience", "Evaluation", "Long-Term Goals", "Waiting"],
    meanings: {
      upright: "Patience, evaluation, long-term goals, waiting for results, investment.",
      reversed: "Impatience, frustration, lack of progress, giving up, short-term thinking."
    },
    numerology: 7,
    astrology: "Moon in Earth"
  },
  {
    id: 71,
    name: "Eight of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/72_Eight_of_Pentacles.jpg",
    keywords: ["Dedication", "Skill", "Mastery", "Hard Work"],
    meanings: {
      upright: "Dedication, skill, mastery, hard work, attention to detail, craftsmanship.",
      reversed: "Burnout, lack of focus, poor quality, half-hearted effort, perfectionism."
    },
    numerology: 8,
    astrology: "Saturn in Earth"
  },
  {
    id: 72,
    name: "Nine of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/73_Nine_of_Pentacles.jpg",
    keywords: ["Independence", "Self-Sufficiency", "Luxury", "Reward"],
    meanings: {
      upright: "Independence, self-sufficiency, luxury, reward, enjoying the fruits of labor.",
      reversed: "Dependence, financial instability, lack of appreciation, isolation."
    },
    numerology: 9,
    astrology: "Neptune in Earth"
  },
  {
    id: 73,
    name: "Ten of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/74_Ten_of_Pentacles.jpg",
    keywords: ["Legacy", "Wealth", "Family", "Abundance"],
    meanings: {
      upright: "Legacy, wealth, family, abundance, long-term security, inheritance.",
      reversed: "Financial loss, family discord, short-term gains, broken tradition."
    },
    numerology: 10,
    astrology: "Pluto in Earth"
  },
  {
    id: 74,
    name: "Page of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/75_Page_of_Pentacles.jpg",
    keywords: ["Practicality", "Learning", "New Skills", "Material Focus"],
    meanings: {
      upright: "Practicality, learning, new skills, material focus, grounded approach.",
      reversed: "Laziness, lack of discipline, short-term thinking, boredom."
    },
    numerology: 11,
    astrology: "Mercury in Earth"
  },
  {
    id: 75,
    name: "Knight of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/76_Knight_of_Pentacles.jpg",
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
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/77_Queen_of_Pentacles.jpg",
    keywords: ["Nurturing", "Practicality", "Abundance", "Comfort"],
    meanings: {
      upright: "Nurturing, practicality, abundance, comfort, material security, home.",
      reversed: "Overindulgence, materialism, neglect of emotional needs, smothering."
    },
    numerology: 13,
    astrology: "Moon in Earth"
  },
  {
    id: 77,
    name: "King of Pentacles",
    image: "https://huggingface.co/datasets/multimodalart/1920-raider-waite-tarot-public-domain/resolve/main/images/78_King_of_Pentacles.jpg",
    keywords: ["Wealth", "Stability", "Business", "Material Success"],
    meanings: {
      upright: "Wealth, stability, business, material success, practical leadership, prosperity.",
      reversed: "Greedy, materialistic, miserly, lack of generosity, workaholic."
    },
    numerology: 14,
    astrology: "Jupiter in Earth"
  }
];
