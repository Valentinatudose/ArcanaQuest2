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
  const [quizQuestions, setQuizQuestions] = useState<QuestionType[]>([]);
  const [lastQuizResult, setLastQuizResult] = useState({ correct: 0, total: 5 });
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  const drawNewCards = useCallback(() => {
    const shuffled = [...TAROT_DECK].sort(() => 0.5 - Math.random());
    setCurrentDraw(shuffled.slice(0, 3));
    setGamePhase(GamePhase.DRAW);
  }, []);

  useEffect(() => {
    if (user) {
      drawNewCards();
      updateStreak();
    }
  }, [user, drawNewCards, updateStreak]);

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
  const tryAgainQuiz = () => setGamePhase(GamePhase.QUIZ);
  
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
    <div className="h-screen bg-gradient-to-br from-[#0a0628] to-[#1d1a3f] text-brand-off-white font-poppins flex flex-col">
      <Header score={score} streak={streak} hints={hints} onLogout={logoutUser} />

      <main className="flex-1 flex flex-col items-center justify-start p-4 md:p-6">
        <h1 className="text-4xl md:text-5xl font-cinzel text-center mb-4">Your Daily Draw</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-2 md:px-0 my-4">
          {currentDraw.map((card) => (
            <Card key={card.id} cardData={card} isFlipped={true} onClick={() => {}} />
          ))}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={startLearning}
            className="px-6 py-3 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all text-lg"
          >
            Learn Today's Cards
          </button>
        </div>
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
