import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.MAIL_TO,
      from: process.env.MAIL_FROM,
      subject: 'Contact from Portfolio website',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
