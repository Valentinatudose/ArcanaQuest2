import { useState } from 'react';

interface AuthProps {
  onAuthSuccess: (user: { email: string }) => void;
}

const Auth = ({ onAuthSuccess }: AuthProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    const MAILCHIMP_U = '916fc2dd75b286d5de0c5593c';
    const MAILCHIMP_ID = 'b1da420c53';
    const url = `https://happyeverafter.us8.list-manage.com/subscribe/post-json?u=${MAILCHIMP_U}&id=${MAILCHIMP_ID}&EMAIL=${encodeURIComponent(email)}&c=?`;

    fetch(url, { method: 'GET', mode: 'no-cors' })
      .then(() => onAuthSuccess({ email }))
      .catch(() => onAuthSuccess({ email })); // Best-effort
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-cinzel text-center text-white">Join the Quest</h1>
      <p className="text-center text-brand-off-white/70">
        Enter your email to begin your Tarot learning journey.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="text-sm font-bold text-gray-300 block mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-lg bg-black/30 text-white border border-white/20 focus:ring-2 focus:ring-brand-purple focus:border-brand-purple outline-none transition"
            placeholder="you@example.com"
          />
        </div>
        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Auth;
