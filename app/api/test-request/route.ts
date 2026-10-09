import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, device, preferredApp, macAddress, consent, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true, message: 'Demande reçue.' });
    }

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Un prénom ou nom valide est requis.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Une adresse email valide est requise pour recevoir vos identifiants.' },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: 'Vous devez accepter les conditions du test.' },
        { status: 400 }
      );
    }

    console.log(`[Test Request Received] From: ${name} (${email}) | Device: ${device} | App: ${preferredApp}`);

    return NextResponse.json({
      success: true,
      message: 'Demande de test 24h validée avec succès.',
    });
  } catch (error) {
    console.error('Test request API error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur interne est survenue.' },
      { status: 500 }
    );
  }
}
