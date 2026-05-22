export default async function handler(req, res) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Send email using Resend API via native fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY || 're_2HQZL148_N7jDURY4ThbLYzayNdmYroz6'}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'omkottalwar17@gmail.com',
        subject: `🚨 Portfolio Lead: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 24px; max-width: 600px; color: #1a1a1a;">
            <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 8px;">New Message from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <div style="background-color: #f7f7f7; padding: 16px; border-left: 4px solid #ff6b35; margin-top: 16px; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #eee; margin-top: 24px;" />
            <p style="font-size: 11px; color: #999;">Received via Om Kottalwar Portfolio Mainframe.</p>
          </div>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ success: true, data });
    } else {
      return res.status(response.status).json({ error: data.message || 'Resend transmission failed.' });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal System Error.' });
  }
}
