interface IconProps {
  name: 'fire' | 'lightbulb';
  className?: string;
}

const icons = {
  fire: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.362-3.797z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9.75a3 3 0 110-6 3 3 0 010 6z"
      />
    </svg>
  ),
  lightbulb: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18a.75.75 0 00.75-.75V15m0-6V5.25A2.25 2.25 0 009.75 3h-1.5A2.25 2.25 0 006 5.25v3.75m6 0v1.5a2.25 2.25 0 01-2.25 2.25H9a2.25 2.25 0 01-2.25-2.25v-1.5m6 0a2.25 2.25 0 002.25-2.25v-1.5a2.25 2.25 0 00-2.25-2.25h-1.5A2.25 2.25 0 009 5.25v1.5A2.25 2.25 0 0011.25 9h1.5z"
      />
    </svg>
  ),
};

const Icon = ({ name, className }: IconProps) => {
  return <div className={className}>{icons[name]}</div>;
};

export default Icon;