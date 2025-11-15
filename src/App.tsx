import { useState, useEffect, useCallback } from 'react';
import { useGameState } from './hooks/useGameState';
import { GamePhase, TarotCard as TarotCardType, Question as QuestionType } from './types';
import { TAROT_DECK } from './constants'; 
import { generateQuiz } from './services/quizService';
import WelcomeScreen from './components/WelcomeScreen';
import Auth from './components/Auth';
import Header from './components/Header';
import Card from './components/Card';
import StudyModal from './components/StudyModal';
import QuizModal from './components/QuizModal';
import ResultsModal from './components/ResultsModal';

export default function App() {
  const {
    user,
    score,
    streak,
    hints,
    loginUser,
    logoutUser,
    addScore,
    useHint,
    addHint,
    updateStreak,
  } = useGameState();

  const [gamePhase, setGamePhase] = useState<GamePhase>(GamePhase.DRAW);
  const [currentDraw, setCurrentDraw] = useState<TarotCardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<boolean[]>([false, false, false]);
  const [quizQuestions, setQuizQuestions] = useState<QuestionType[]>([]);
  const [lastQuizResult, setLastQuizResult] = useState({ correct: 0, total: 5 });
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const drawNewCards = useCallback(() => {
    const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
    setCurrentDraw(shuffled.slice(0, 3));
    setFlippedCards([false, false, false]);
    setGamePhase(GamePhase.DRAW);
  }, []);

  useEffect(() => {
    if (user) {
      drawNewCards();
      updateStreak();
    }
  }, [user, drawNewCards, updateStreak]);

  const handleCardFlip = (index: number) => {
    const newFlipped = [...flippedCards];
    newFlipped[index] = true;
    setFlippedCards(newFlipped);
  };

  const allCardsFlipped = flippedCards.every(Boolean);

  const startLearning = () => setGamePhase(GamePhase.LEARN);

  const startQuiz = () => {
    const questions = generateQuiz(currentDraw, TAROT_DECK);
    setQuizQuestions(questions);
    setGamePhase(GamePhase.QUIZ);
  };

  const handleQuizComplete = (correctAnswers: number) => {
    const totalQuestions = quizQuestions.length;
    setLastQuizResult({ correct: correctAnswers, total: totalQuestions });
    const accuracy = correctAnswers / totalQuestions;
    if (accuracy >= 0.8) {
        const pointsEarned = correctAnswers * 10;
        addScore(pointsEarned);
        addHint();
    }
    setGamePhase(GamePhase.RESULTS);
  };
  
  const retakeQuiz = () => setGamePhase(GamePhase.QUIZ);

  const tryAgainQuiz = () => {
      setGamePhase(GamePhase.QUIZ);
  };
  
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0628] to-[#1d1a3f] text-brand-off-white font-poppins p-4 flex items-center justify-center">
        {showWelcomeScreen ? (
          <WelcomeScreen onStart={() => setShowWelcomeScreen(false)} />
        ) : (
          <Auth onAuthSuccess={loginUser} />
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0628] to-[#1d1a3f] text-brand-off-white font-poppins p-4 pt-24 md:pt-28">
      <Header score={score} streak={streak} hints={hints} onLogout={logoutUser} />

      <main className="container mx-auto max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-cinzel text-center mb-2 text-brand-off-white">Your Daily Draw</h1>
        <p className="text-center text-lg text-brand-off-white/70 mb-8 md:mb-12">Tap the cards to reveal them.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 px-4 md:px-0">
          {currentDraw.map((card, index) => (
            <Card key={card.id} cardData={card} isFlipped={flippedCards[index]} onClick={() => handleCardFlip(index)} />
          ))}
        </div>

        {gamePhase === GamePhase.DRAW && (
          <div className="text-center mt-12 animate-fade-in">
            <button
              onClick={startLearning}
              disabled={!allCardsFlipped}
              className={`px-8 py-3 font-bold rounded-lg shadow-lg text-xl transition-all duration-500 ${
                allCardsFlipped
                  ? 'bg-brand-purple text-white hover:shadow-glow-purple animate-pulse-slow'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {allCardsFlipped ? "Learn Today's Cards" : "Reveal All Cards to Continue"}
            </button>
          </div>
        )}
      </main>

      {gamePhase === GamePhase.LEARN && (
        <StudyModal cards={currentDraw} onStartQuiz={startQuiz} onClose={() => setGamePhase(GamePhase.DRAW)} />
      )}

      {gamePhase === GamePhase.QUIZ && (
        <QuizModal 
          questions={quizQuestions} 
          onQuizComplete={handleQuizComplete} 
          hints={hints}
          onUseHint={useHint}
        />
      )}

      {gamePhase === GamePhase.RESULTS && (
        <ResultsModal
          correct={lastQuizResult.correct}
          total={lastQuizResult.total}
          onNewDraw={drawNewCards}
          onRetakeQuiz={retakeQuiz}
          onTryAgain={tryAgainQuiz}
        />
      )}
    </div>
  );
}
