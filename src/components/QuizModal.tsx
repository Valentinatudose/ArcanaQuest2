import { useState, useEffect } from 'react';
import { Question } from '../types';
import Icon from './Icon';

interface QuizModalProps {
  questions: Question[];
  onQuizComplete: (correctAnswers: number) => void;
  hints: number;
  onUseHint: () => void;
}

const QuizModal = ({ questions, onQuizComplete, hints, onUseHint }: QuizModalProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [hintUsed, setHintUsed] = useState(false);
  const [disabledOptions, setDisabledOptions] = useState<string[]>([]);

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setHintUsed(false);
    setDisabledOptions([]);
  }, [currentQuestionIndex]);
  
  const handleAnswer = (answer: string) => {
    if (feedback) return; // Prevent multiple answers

    const isCorrect = answer === currentQuestion.correctAnswer;
    setFeedback(isCorrect ? 'correct' : 'incorrect');
    setUserAnswers(prev => [...prev, answer]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setFeedback(null);
    } else {
      const correctCount = questions.reduce((count, q, i) => {
        return userAnswers[i] === q.correctAnswer ? count + 1 : count;
      }, 0);
      onQuizComplete(correctCount);
    }
  };

  const useHint = () => {
    if (hints > 0 && !hintUsed) {
      onUseHint();
      setHintUsed(true);
      
      const incorrectOptions = currentQuestion.options.filter(
        opt => opt !== currentQuestion.correctAnswer
      );
      
      const shuffledIncorrect = [...incorrectOptions].sort(() => 0.5 - Math.random());
      const optionsToDisable = shuffledIncorrect.slice(0, 2);
      
      if (optionsToDisable.length > 0) {
        setDisabledOptions(optionsToDisable);
      }
    }
  };

  const getButtonClass = (option: string) => {
    if (!feedback) return 'bg-white/10 hover:bg-brand-purple/50';
    if (option === currentQuestion.correctAnswer) return 'bg-green-500 shadow-glow-green scale-105';
    if (option === userAnswers[currentQuestionIndex]) return 'bg-red-500';
    return 'bg-white/10 opacity-50';
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-brand-purple/30">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-cinzel">Quiz Time!</h2>
          <div className="flex items-center gap-2">
            <span className="text-lg">Question {currentQuestionIndex + 1}/{questions.length}</span>
          </div>
        </div>
        
        {currentQuestion.image && <img src={currentQuestion.image} alt="Tarot Card for quiz" className="w-48 mx-auto my-4 rounded-lg" />}
        <p className="text-xl text-center mb-6 min-h-[56px]">{currentQuestion.questionText}</p>
        
        {feedback && currentQuestion.explanation && (
          <div className="text-center text-brand-off-white/80 bg-black/20 p-3 rounded-lg mb-4 animate-fade-in">
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={feedback !== null || disabledOptions.includes(option)}
              className={`p-4 rounded-lg text-lg transition-all duration-300 text-center ${getButtonClass(option)} disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="text-center mt-6 min-h-[52px]">
          {feedback ? (
            <button
              onClick={handleNextQuestion}
              className="px-8 py-3 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 text-xl animate-fade-in"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          ) : (
            <button 
              onClick={useHint}
              disabled={hints === 0 || hintUsed}
              className="flex items-center gap-2 mx-auto px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-300 hover:bg-yellow-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              <Icon name="lightbulb" className="w-5 h-5" />
              Use Hint ({hints})
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizModal;