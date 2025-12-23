export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Datenschutzerklärung</h1>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Allgemeine Hinweise</h2>
          <p className="text-gray-300">
            Der Schutz deiner persönlichen Daten ist mir wichtig.
            Personenbezogene Daten werden auf dieser Website nur im
            technisch notwendigen Umfang verarbeitet.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Verantwortlicher</h2>
          <p className="text-gray-300">
            Luca-Samuel Pleßing<br />
            Carrer Costa Bona 8, Piso 4-1<br />
            08033 Barcelona, Spanien<br />
            E-Mail: luca@plessing-consulting.com
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Kontaktformular</h2>
          <p className="text-gray-300">
            Wenn du mich per Kontaktformular kontaktierst, werden die
            von dir gemachten Angaben (Name, E-Mail-Adresse, Nachricht)
            zum Zweck der Bearbeitung der Anfrage gespeichert.
          </p>
          <p className="text-gray-300">
            Diese Daten werden nicht ohne deine Einwilligung weitergegeben
            und nur so lange gespeichert, wie es für die Bearbeitung der
            Anfrage erforderlich ist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Deine Rechte</h2>
          <p className="text-gray-300">
            Du hast jederzeit das Recht auf Auskunft über deine gespeicherten
            personenbezogenen Daten sowie auf Berichtigung oder Löschung
            dieser Daten.
          </p>
        </section>

        <p className="pt-8 text-sm text-gray-500">
          Stand: {new Date().toLocaleDateString("de-DE")}
        </p>
      </div>
    </main>
  );
}
