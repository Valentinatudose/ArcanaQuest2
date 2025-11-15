interface ResultsModalProps {
  correct: number;
  total: number;
  onNewDraw: () => void;
  onRetakeQuiz: () => void;
  onTryAgain: () => void;
}

const ResultsModal = ({ correct, total, onNewDraw, onRetakeQuiz, onTryAgain }: ResultsModalProps) => {
  const accuracy = total > 0 ? (correct / total) * 100 : 0;
  const passed = accuracy >= 80;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-brand-purple/30 text-center">
        <h2 className="text-4xl font-cinzel mb-4">{passed ? "Congratulations!" : "Keep Trying!"}</h2>
        <p className="text-6xl font-bold mb-4">{accuracy.toFixed(0)}%</p>
        <p className="text-xl mb-6">You answered {correct} out of {total} questions correctly.</p>

        {passed ? (
          <>
            <p className="text-brand-off-white/80 mb-6">You've earned {correct * 10} points and 1 new hint!</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={onRetakeQuiz}
                className="px-6 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 text-lg"
              >
                Retake Quiz
              </button>
              <button
                onClick={onNewDraw}
                className="px-6 py-3 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 text-lg"
              >
                New Draw
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-brand-off-white/80 mb-6 bg-purple-900/30 p-4 rounded-lg">
              <strong>Pro Tip:</strong> Neuroscientists have found that making mistakes is the fastest way to learn. Each attempt strengthens your memory!
            </p>
            <button
              onClick={onTryAgain}
              className="px-8 py-3 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 text-xl"
            >
              Try Again
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsModal;