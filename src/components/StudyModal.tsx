import { useState } from 'react';
import { TarotCard } from '../types';

interface StudyModalProps {
  cards: TarotCard[];
  onStartQuiz: () => void;
  onClose: () => void;
}

interface DetailCardProps {
  card: TarotCard;
}

const DetailCard = ({ card }: DetailCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="perspective-1000 w-full aspect-[2/3.5]" onClick={() => setIsFlipped(!isFlipped)}>
      <div
        className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg border border-brand-off-white/30">
          <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center">
            <h3 className="font-cinzel text-md text-white font-bold">{card.name}</h3>
          </div>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-y-auto p-4 rotate-y-180 bg-gradient-to-br from-[#2a235b] to-[#1c1844] border border-brand-purple">
          <h3 className="font-cinzel text-xl text-center mb-2">{card.name}</h3>
          <div className="text-sm space-y-3 text-brand-off-white/90">
            <p><strong>Keywords:</strong> {card.keywords.join(', ')}</p>
            <p><strong>Numerology:</strong> {card.numerology}</p>
            <p><strong>Astrology:</strong> {card.astrology}</p>
            <div className="pt-1">
              <h4 className="font-bold text-brand-off-white">Upright</h4>
              <p className="text-brand-off-white/80">{card.meanings.upright}</p>
            </div>
            <div>
              <h4 className="font-bold text-brand-off-white">Reversed</h4>
              <p className="text-brand-off-white/80">{card.meanings.reversed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StudyModal = ({ cards, onStartQuiz, onClose }: StudyModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-brand-purple/30">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-cinzel">Study Today's Cards</h2>
          <button onClick={onClose} className="text-3xl text-white/50 hover:text-white transition">
            &times;
          </button>
        </div>
        <p className="text-center text-brand-off-white/70 mb-6">
          Tap a card to flip it over and see its meaning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cards.map((card) => (
            <DetailCard key={card.id} card={card} />
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onStartQuiz}
            className="px-8 py-3 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 text-xl"
          >
            I'm Ready for the Quiz!
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudyModal;