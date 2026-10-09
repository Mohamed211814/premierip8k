'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ContactFormProps {
  initialPlan?: string;
}

export function ContactForm({ initialPlan = '' }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: initialPlan ? `Demande concernant le plan ${initialPlan}` : 'Demande générale',
    device: 'Smart TV',
    message: '',
    consent: false,
    honeypot: '', // anti-spam
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client side validation
    if (!formData.name.trim()) {
      setErrorMessage('Veuillez renseigner votre nom complet.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Veuillez saisir une adresse email valide.');
      setStatus('error');
      return;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Votre message doit comporter au moins 10 caractères.');
      setStatus('error');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Veuillez accepter la politique de confidentialité pour envoyer le formulaire.');
      setStatus('error');
      return;
    }

    if (formData.honeypot) {
      // Spam detected silently
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi de votre message.");
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Erreur réseau. Veuillez réessayer ou nous contacter directement par email.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl bg-emerald-50/80 p-8 text-center border-2 border-emerald-500/30">
        <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-600 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Message envoyé avec succès !</h3>
        <p className="text-sm text-slate-700 mb-6 max-w-md mx-auto leading-relaxed">
          Merci {formData.name}. Notre équipe technique a bien reçu votre demande et vous répondra sous 30 minutes par email ({formData.email}).
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              phone: '',
              subject: 'Demande générale',
              device: 'Smart TV',
              message: '',
              consent: false,
              honeypot: '',
            });
          }}
        >
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Anti-spam Honeypot (hidden from real users) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="honeypot">Ne pas remplir ce champ</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          tabIndex={-1}
          value={formData.honeypot}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-slate-800 mb-1.5">
            Nom et Prénom *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Jean Dupont"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold text-slate-800 mb-1.5">
            Adresse Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jean.dupont@exemple.fr"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-bold text-slate-800 mb-1.5">
            Numéro de téléphone / WhatsApp (Optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+33 6 12 34 56 78"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="device" className="block text-xs font-bold text-slate-800 mb-1.5">
            Votre Appareil Principal
          </label>
          <select
            id="device"
            name="device"
            value={formData.device}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:border-[#dd1111] focus:outline-none"
          >
            <option value="Smart TV Samsung / LG">Smart TV (Samsung / LG)</option>
            <option value="Amazon Fire TV Stick">Amazon Fire TV Stick</option>
            <option value="Box Android TV / Google TV">Box Android TV / Google TV</option>
            <option value="Apple TV / iOS">Apple TV / iPhone / iPad</option>
            <option value="Ordinateur PC / Mac">Ordinateur PC / Mac</option>
            <option value="Boîtier MAG / Formuler">Boîtier MAG / Formuler</option>
            <option value="Autre">Autre matériel</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-bold text-slate-800 mb-1.5">
          Sujet de votre demande
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:border-[#dd1111] focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-slate-800 mb-1.5">
          Votre Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre question, votre appareil ou vos besoins d'assistance..."
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none resize-none"
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-slate-300 bg-white text-[#dd1111] focus:ring-[#dd1111]"
        />
        <label htmlFor="consent" className="text-xs text-slate-600 leading-normal">
          J'accepte que mes coordonnées soient utilisées uniquement pour répondre à ma demande dans le respect de la politique de confidentialité.
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={status === 'submitting'}
        className="w-full justify-center mt-4 font-bold"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            <span>Envoyer ma demande</span>
          </>
        )}
      </Button>
    </form>
  );
}
