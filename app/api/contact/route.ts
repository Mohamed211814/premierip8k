import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, device, message, consent, honeypot } = body;

    // Silent handling of spambots
    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Message traité.' });
    }

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Le nom doit comporter au moins 2 caractères.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Une adresse email valide est requise.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Le message doit comporter au moins 10 caractères.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'Le consentement est requis.' },
        { status: 400 }
      );
    }

    // Log internally (in production, integrate with transactional email service or CRM)
    console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject} | Device: ${device}`);

    return NextResponse.json({
      success: true,
      message: 'Votre message a été transmis avec succès à notre équipe technique.',
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur interne est survenue.' },
      { status: 500 }
    );
  }
}
