// api/subscribe.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = request.body;
  const apiKey = process.env.BREVO_API_KEY;

  if (!email || !apiKey) {
    return response.status(400).json({ message: 'Missing email or API key.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return response.status(400).json({ message: 'Invalid email address.' });
  }

  try {
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
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

    if (brevoResponse.ok) {
      return response.status(200).json({ success: true });
    } else {
      return response.status(400).json({ success: false });
    }
  } catch (error) {
    return response.status(500).json({ success: false });
  }
}