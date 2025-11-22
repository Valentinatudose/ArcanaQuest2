import { TarotCard } from '../types';

interface CardProps {
  cardData: TarotCard;
  isFlipped: boolean;
  onClick: () => void;
}

const Card = ({ cardData, isFlipped, onClick }: CardProps) => {
  return (
    <div className="perspective-1000 w-full aspect-[2/3.5] mx-auto" onClick={onClick}>
  <div 
    className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 ${isFlipped ? 'rotate-y-180' : ''}`}
  >
    {/* Log the image URL */}
    <div className="absolute top-0 left-0 text-white text-xs p-1 bg-black/50">
      {cardData.image}
    </div>

    {/* Card Back */}
    <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border-2 border-brand-purple/30 bg-gradient-to-br from-[#2a235b] to-[#1c1844] flex items-center justify-center p-4">
      <div className="w-3/4 h-3/4 border-2 border-brand-purple/50 rounded-lg flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v11.494m-9-5.747h18" />
        </svg>
      </div>
    </div>
    
    {/* Card Front */}
    <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-2xl border-2 border-brand-off-white/50 rotate-y-180">
      <img src={cardData.image} alt={cardData.name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center">
        <h3 className="font-cinzel text-lg text-white font-bold">{cardData.name}</h3>
      </div>
    </div>
  </div>
</div>
  );
};

export default Card;
