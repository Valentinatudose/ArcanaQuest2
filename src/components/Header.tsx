import Icon from './Icon';

interface HeaderProps {
  score: number;
  streak: number;
  hints: number;
  onLogout: () => void;
}

const Header = ({ score, streak, hints, onLogout }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-3 sm:p-4 z-50 border-b border-brand-purple/20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-cinzel text-xl sm:text-2xl text-brand-off-white">ArcanaQuest</h1>
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
          <div className="flex items-center gap-1" title="Total Score">
            <span className="text-lg sm:text-xl font-bold">{score}</span>
            <span className="text-yellow-400 text-sm hidden sm:inline">PTS</span>
          </div>
          <div className="flex items-center gap-1" title="Daily Streak">
            <span className="text-lg sm:text-xl font-bold">{streak}</span>
            <Icon name="fire" className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
          </div>
          <div className="flex items-center gap-1" title="Hints Remaining">
            <span className="text-lg sm:text-xl font-bold">{hints}</span>
            <Icon name="lightbulb" className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
          </div>
          <button
            onClick={onLogout}
            className="text-xs sm:text-sm bg-brand-purple/50 hover:bg-brand-purple/80 text-white font-semibold py-1 px-2 sm:px-3 rounded-md transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;