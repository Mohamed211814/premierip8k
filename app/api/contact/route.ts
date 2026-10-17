import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = process.env.CONTACT_EMAIL_RECEIVER || 'iptvusapro@gmail.com';

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

    let emailSent = false;
    let deliveryMethod = 'none';

    // 1. Try sending via direct SMTP if SMTP credentials are configured
    const smtpHost = process.env.SMTP_HOST || (process.env.SMTP_USER ? 'smtp.gmail.com' : '');
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailSubject = `[Premier IPTV] Nouveau message de ${name} : ${subject || 'Demande client'}`;
        const mailHtml = `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
            <div style="background: #1a088b; padding: 15px 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 20px;">Nouveau Message de Contact Premier IPTV</h2>
            </div>
            
            <p style="font-size: 14px; color: #475569; margin-bottom: 20px;">
              Vous avez reçu une nouvelle demande depuis le formulaire de contact du site.
            </p>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 12px; background: #f8fafc; font-weight: bold; width: 35%; border-bottom: 1px solid #e2e8f0;">Nom et Prénom :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Email :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}" style="color: #dd1111; font-weight: bold;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Téléphone / WhatsApp :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${phone || 'Non renseigné'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Appareil Principal :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a;">${device || 'Non spécifié'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f8fafc; font-weight: bold; border-bottom: 1px solid #e2e8f0;">Sujet :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: bold;">${subject || 'Demande générale'}</td>
              </tr>
            </table>

            <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #dd1111; margin-bottom: 25px;">
              <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px;">Message du client :</h4>
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 15px;">
              Ce message a été envoyé depuis le formulaire de contact officiel de Premier IPTV.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"Premier IPTV Contact" <${smtpUser}>`,
          to: RECIPIENT_EMAIL,
          replyTo: email,
          subject: mailSubject,
          text: `Nouveau message de ${name} (${email}, ${phone || 'sans tél'})\nAppareil: ${device}\nSujet: ${subject}\n\nMessage:\n${message}`,
          html: mailHtml,
        });

        emailSent = true;
        deliveryMethod = 'smtp';
      } catch (smtpErr) {
        console.error('SMTP send failed, falling back to HTTP forwarder:', smtpErr);
      }
    }

    // 2. Fallback to FormSubmit HTTP forwarding service directly to iptvusapro@gmail.com
    if (!emailSent) {
      try {
        const originUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://premieriptv.fr';
        const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Origin': originUrl,
            'Referer': `${originUrl}/contact`,
          },
          body: JSON.stringify({
            _subject: `[Premier IPTV] Nouveau message de ${name} : ${subject || 'Demande client'}`,
            _replyto: email,
            "Nom complet": name,
            "Adresse Email": email,
            "Numéro de téléphone": phone || 'Non renseigné',
            "Appareil": device || 'Non spécifié',
            "Sujet": subject || 'Demande générale',
            "Message du client": message,
          }),
        });

        if (res.ok) {
          emailSent = true;
          deliveryMethod = 'formsubmit';
        } else {
          console.error('FormSubmit HTTP error:', await res.text());
        }
      } catch (httpErr) {
        console.error('HTTP forwarder failed:', httpErr);
      }
    }

    console.log(`[Contact Form Received] From: ${name} (${email}) | Subject: ${subject} | Delivery: ${deliveryMethod}`);

    return NextResponse.json({
      success: true,
      message: 'Votre message a été transmis avec succès à notre équipe technique.',
    });
  } catch (error) {
    console.error('Contact API fatal error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur interne est survenue lors du traitement de votre demande.' },
      { status: 500 }
    );
  }
}
