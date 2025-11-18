// components/CardDisplay.tsx
import React from 'react';

interface Card {
  id: number;
  name: string;
  image: string;
  meaning: string;
  keywords: string[];
  meanings: {
    upright: string;
    reversed: string;
  };
  numerology: number;
  astrology: string;
}

interface CardDisplayProps {
  card: Card;
  isReversed?: boolean;
}

const CardDisplay: React.FC<CardDisplayProps> = ({ card, isReversed = false }) => {
  return (
    <div className={`card ${isReversed ? 'reversed' : ''}`}>
      <div className="card-image-container">
        <img 
          src={card.image} 
          alt={card.name}
          className="card-image"
        />
        {isReversed && <div className="reversal-indicator">Reversed</div>}
      </div>
      <div className="card-info">
        <h3 className="card-name">{card.name}</h3>
        <p className="card-meaning">
          {isReversed ? card.meanings.reversed : card.meanings.upright}
        </p>
        <div className="keywords">
          {card.keywords.slice(0, 2).map((keyword, index) => (
            <span key={index} className="keyword-tag">{keyword}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDisplay;
