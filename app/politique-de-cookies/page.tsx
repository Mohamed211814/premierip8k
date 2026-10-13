import { permanentRedirect } from 'next/navigation';

export default function PolitiqueCookiesPage() {
  permanentRedirect('/legal#cookies');
}
