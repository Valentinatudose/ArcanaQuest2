// api/subscribe.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;
  const apiKey = process.env.BREVO_API_KEY;

  if (!email || !apiKey) {
    return res.status(400).json({ message: 'Missing email or API key.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address.' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Successfully subscribed!' });
    } else {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return res.status(400).json({ success: false, message: 'Subscription failed.' });
    }
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
}
