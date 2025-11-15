interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="w-full max-w-2xl p-8 space-y-8 text-center bg-white/5 backdrop-blur-sm rounded-2xl shadow-2xl animate-fade-in">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20 text-brand-purple mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.939m-3.75 2.143a4 4 0 01-5.292 0M9 12a4 4 0 014-4.354m0 0a4 4 0 00-4 4.354m0 0a4 4 0 014 4.354m0 0a4 4 0 004-4.354m0-5.292a4 4 0 00-4-4.354"
        />
      </svg>

      <h1 className="text-4xl md:text-5xl font-cinzel text-white tracking-wider">
        Unlock the Wisdom Within
      </h1>

      <p className="text-md md:text-lg text-brand-off-white/80 leading-relaxed font-light">
        Welcome, Seeker, to <strong>ArcanaQuest</strong>. An adventure into the heart of the Tarot
        awaits. On this path, you will forge a deep connection with the 78 cards, mastering their
        symbolic language of keywords, numbers, and stars. This journey is designed to transform your
        curiosity into confident intuition, one beautiful card at a time.
      </p>

      <button
        onClick={onStart}
        className="px-10 py-4 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 text-xl animate-pulse-slow"
      >
        Begin Your Journey
      </button>
    </div>
  );
};

export default WelcomeScreen;