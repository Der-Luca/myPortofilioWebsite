import Navbar from '../components/navbar';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-24 pt-32">
      <div className="max-w-3xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold">Impressum</h1>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            Luca-Samuel Pleßing<br />
            Freiberuflicher Software Engineer & IT Consultant
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Anschrift</h2>
          <p>
            Carrer Costa Bona 8, Piso 4-1<br />
            08033 Barcelona<br />
            Spanien
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Kontakt</h2>
          <p>
            E-Mail:{' '}
            <a
              href="mailto:luca@plessing-consulting.com"
              className="underline"
            >
              luca@plessing-consulting.com
            </a>
          </p>
        </section>

     <section className="space-y-2">
  <h2 className="text-xl font-semibold">Umsatzsteuer</h2>
  <p>
    Umsatzsteuer-Identifikationsnummer (EU):<br />
    <strong>ESZ3850679R</strong>
  </p>
  <p className="text-sm text-gray-400">
    Hinweis: Tätigkeit als in Spanien registrierter autónomo (freelancer).
  </p>
</section>


        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <p>
            Luca-Samuel Pleßing
          </p>
        </section>

      </div>
    </main>
    </>
  );
}
