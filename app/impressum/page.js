export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-8">
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
              href="mailto:luca@blessing-consulting.com"
              className="underline"
            >
              luca@plessing-consulting.com
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            <em>wird nachgereicht</em>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt</h2>
          <p>
            Luca-Samuel Pleßing
          </p>
        </section>

        <p className="pt-8 text-sm text-gray-400">
          Hinweis: Die Tätigkeit erfolgt als freiberuflicher Software Engineer mit Sitz in Spanien.
        </p>
      </div>
    </main>
  );
}
