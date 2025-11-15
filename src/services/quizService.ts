import { TarotCard, Question, QuestionType } from '../types';

export const generateQuiz = (drawnCards: TarotCard[], fullDeck: TarotCard[]): Question[] => {
  const questions: Question[] = [];

  // Question 1: Image → Name
  const imageCard = drawnCards[0];
  questions.push({
    cardId: imageCard.id,
    questionText: "What is the name of this card?",
    options: [
      imageCard.name,
      fullDeck[Math.floor(Math.random() * fullDeck.length)].name,
      fullDeck[Math.floor(Math.random() * fullDeck.length)].name,
      fullDeck[Math.floor(Math.random() * fullDeck.length)].name,
    ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4),
    correctAnswer: imageCard.name,
    type: 'image_to_name',
    image: imageCard.image,
    explanation: `The ${imageCard.name} represents ${imageCard.meanings.upright.substring(0, 60)}...`
  });

  // Question 2: Name → Keywords
  const keywordCard = drawnCards[1];
  const correctKeyword = keywordCard.keywords[0];
  const allKeywords = Array.from(new Set(fullDeck.flatMap(c => c.keywords)));
  const randomKeywords = allKeywords
    .filter(k => k !== correctKeyword)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  questions.push({
    cardId: keywordCard.id,
    questionText: `Which of the following is a key keyword for the ${keywordCard.name}?`,
    options: [correctKeyword, ...randomKeywords].sort(() => 0.5 - Math.random()),
    correctAnswer: correctKeyword,
    type: 'name_to_keyword',
    explanation: `${keywordCard.name} is associated with: ${keywordCard.keywords.join(', ')}.`
  });

  // Question 3: Name → Numerology
  const numberCard = drawnCards[2];
  const correctNumber = numberCard.numerology.toString();
  const randomNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '22']
    .filter(n => n !== correctNumber)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  questions.push({
    cardId: numberCard.id,
    questionText: `What is the numerology number for the ${numberCard.name}?`,
    options: [correctNumber, ...randomNumbers].sort(() => 0.5 - Math.random()),
    correctAnswer: correctNumber,
    type: 'name_to_number',
    explanation: `The ${numberCard.name} is linked to the number ${numberCard.numerology}.`
  });

  // Question 4: Name → Astrology
  const astroCard = drawnCards[0];
  const correctAstro = astroCard.astrology;
  const allAstros = Array.from(new Set(fullDeck.map(c => c.astrology)));
  const randomAstros = allAstros
    .filter(a => a !== correctAstro && a !== 'None')
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  questions.push({
    cardId: astroCard.id,
    questionText: `Which zodiac sign or planet is associated with the ${astroCard.name}?`,
    options: [correctAstro, ...randomAstros].filter(v => v).sort(() => 0.5 - Math.random()).slice(0, 4),
    correctAnswer: correctAstro,
    type: 'name_to_astro',
    explanation: `${astroCard.name} corresponds to ${astroCard.astrology}.`
  });

  // Question 5: Mixed review
  const reviewCard = drawnCards[1];
  questions.push({
    cardId: reviewCard.id,
    questionText: `What is a core meaning of the ${reviewCard.name} in its upright position?`,
    options: [
      reviewCard.meanings.upright.split('. ')[0] + '.',
      fullDeck[Math.floor(Math.random() * fullDeck.length)].meanings.upright.split('. ')[0] + '.',
      fullDeck[Math.floor(Math.random() * fullDeck.length)].meanings.upright.split('. ')[0] + '.',
      fullDeck[Math.floor(Math.random() * fullDeck.length)].meanings.upright.split('. ')[0] + '.',
    ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 4),
    correctAnswer: reviewCard.meanings.upright.split('. ')[0] + '.',
    type: 'image_to_name',
    explanation: reviewCard.meanings.upright
  });

  return questions;
};