'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TestIptvForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: 'Smart TV (Samsung / LG)',
    preferredApp: 'IPTV Smarters Pro',
    macAddress: '',
    honeypot: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

    if (!formData.name.trim()) {
      setErrorMessage('Veuillez renseigner votre prénom ou nom.');
      setStatus('error');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Veuillez fournir une adresse email valide pour recevoir vos identifiants.');
      setStatus('error');
      return;
    }

    if (!formData.consent) {
      setErrorMessage('Veuillez accepter les conditions du test.');
      setStatus('error');
      return;
    }

    if (formData.honeypot) {
      setStatus('success');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/test-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Erreur de connexion. Veuillez réessayer.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-emerald-50/70 p-8 text-center border-2 border-emerald-500/30">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Demande de Test 24h Validée !</h3>
        <p className="text-sm text-slate-700 mb-6 leading-relaxed">
          Merci {formData.name}. Vos identifiants de test 24h avec le tutoriel pour {formData.device} sont en cours de génération et vont vous être envoyés à l’adresse : <strong>{formData.email}</strong> dans un délai de 5 à 15 minutes.
        </p>
        <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto mb-6 shadow-sm">
          <p>💡 Pensez à vérifier votre dossier "Courriers indésirables / Spams" si vous ne recevez rien d'ici 15 minutes.</p>
        </div>
        <Button variant="outline" size="sm" href="/">
          Retourner à l'accueil
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          id="test_honeypot"
          name="honeypot"
          tabIndex={-1}
          value={formData.honeypot}
          onChange={handleChange}
        />
      </div>

      {status === 'error' && errorMessage && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label htmlFor="test_name" className="block text-xs font-bold text-slate-800 mb-1.5">
          Votre Prénom ou Nom *
        </label>
        <input
          type="text"
          id="test_name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Ex: Marc"
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="test_email" className="block text-xs font-bold text-slate-800 mb-1.5">
          Votre Adresse Email de Réception *
        </label>
        <input
          type="email"
          id="test_email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="votre.email@exemple.fr"
          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="test_device" className="block text-xs font-bold text-slate-800 mb-1.5">
            Appareil Utilisé
          </label>
          <select
            id="test_device"
            name="device"
            value={formData.device}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none transition-colors"
          >
            <option value="Smart TV (Samsung / LG)">Smart TV (Samsung / LG)</option>
            <option value="Amazon Fire TV Stick">Amazon Fire TV Stick</option>
            <option value="Android TV / Nvidia Shield / Xiaomi">Android TV / Nvidia / Xiaomi</option>
            <option value="Apple TV / iOS">Apple TV / iOS</option>
            <option value="PC Windows / Mac (VLC)">PC Windows / Mac (VLC)</option>
            <option value="Boîtier MAG / Formuler">Boîtier MAG / Formuler</option>
          </select>
        </div>

        <div>
          <label htmlFor="test_app" className="block text-xs font-bold text-slate-800 mb-1.5">
            Application Souhaitée
          </label>
          <select
            id="test_app"
            name="preferredApp"
            value={formData.preferredApp}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none transition-colors"
          >
            <option value="IPTV Smarters Pro">IPTV Smarters Pro / Lite</option>
            <option value="TiviMate IPTV Player">TiviMate (Android TV)</option>
            <option value="IBO Player">IBO Player (Smart TV)</option>
            <option value="SmartOne IPTV">SmartOne IPTV</option>
            <option value="VLC Media Player">VLC Media Player (M3U)</option>
            <option value="Autre / Conseil requis">Autre / Besoin d'aide</option>
          </select>
        </div>
      </div>

      {formData.device.includes('MAG') && (
        <div>
          <label htmlFor="test_mac" className="block text-xs font-bold text-slate-800 mb-1.5">
            Adresse MAC de l’appareil (MAG / STB)
          </label>
          <input
            type="text"
            id="test_mac"
            name="macAddress"
            value={formData.macAddress}
            onChange={handleChange}
            placeholder="00:1A:79:XX:XX:XX"
            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 font-mono placeholder-slate-400 text-sm focus:bg-white focus:border-[#dd1111] focus:ring-2 focus:ring-[#dd1111]/20 focus:outline-none transition-colors"
          />
        </div>
      )}

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="test_consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-slate-300 bg-white text-[#dd1111] focus:ring-[#dd1111]"
        />
        <label htmlFor="test_consent" className="text-xs text-slate-600 leading-normal">
          Je certifie disposer d'une connexion internet stable et souhaite recevoir mon code d'accès test 24h par email sans engagement.
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === 'submitting'}
        className="w-full justify-center mt-4 font-bold"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            <span>Génération des accès...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Recevoir mon test 24h gratuit</span>
          </>
        )}
      </Button>
    </form>
  );
}
