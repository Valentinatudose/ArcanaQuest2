import { useState } from 'react';

interface AuthProps {
  onAuthSuccess: (user: { email: string }) => void;
}

const Auth = ({ onAuthSuccess }: AuthProps) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        onAuthSuccess({ email });
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (err) {
      setError('An unknown error occurred.');
    } finally {
      setLoading(false);
    }
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
          disabled={loading}
          className="w-full py-3 px-4 bg-brand-purple text-white font-bold rounded-lg shadow-lg hover:shadow-glow-purple transition-all duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Processing...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Auth;