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

    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.name = 'mailchimp-frame';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Create a hidden form targeting the iframe
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://happyeverafter.us8.list-manage.com/subscribe/post?u=916fc2dd75b286d5de0c5593c&id=b1da420c53&f_id=00f17be1f0';
    form.target = 'mailchimp-frame';

    const emailInput = document.createElement('input');
    emailInput.type = 'hidden';
    emailInput.name = 'EMAIL';
    emailInput.value = email;

    form.appendChild(emailInput);
    document.body.appendChild(form);
    form.submit();

    // Clean up after a short delay
    setTimeout(() => {
      if (document.body.contains(form)) document.body.removeChild(form);
      if (document.body.contains(iframe)) document.body.removeChild(iframe);
    }, 1000);

    // Immediately log in and proceed to the game
    onAuthSuccess({ email });
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
