import Navbar from "../components/navbar";
import Footer from "../components/home/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <article className="mx-auto max-w-3xl space-y-10 px-6 pb-24 pt-36 leading-7 text-slate-300">
        <div>
          <h1 className="text-4xl font-bold text-white">Datenschutzerklärung</h1>
          <p className="mt-4 text-sm text-slate-500">Stand: 19. August 2026</p>
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">1. Verantwortlicher</h2>
          <p>Luca-Samuel Pleßing<br />Carrer Costa Bona 8, Piso 4-1<br />08033 Barcelona, Spanien<br />E-Mail: luca@plessing-consulting.com</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">2. Technische Bereitstellung</h2>
          <p>Beim Aufruf dieser Website verarbeitet der Hosting-Anbieter technisch notwendige Verbindungsdaten, insbesondere IP-Adresse, Zeitpunkt, aufgerufene Datei und Browserinformationen. Diese Verarbeitung ist für die sichere Bereitstellung der Website erforderlich.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">3. Einwilligungsbasierte Besuchsanalyse</h2>
          <p>Nur nach Ihrer ausdrücklichen Zustimmung werden Seitenaufrufe und Klicks auf ausgewählte Kontakt-Schaltflächen erfasst. Verarbeitet werden der aufgerufene Seitenpfad, die zuvor besuchte interne Seite, bei Kontakt-Schaltflächen deren Bezeichnung, eine gegebenenfalls im aufgerufenen Link enthaltene Einstiegsquelle, der Hostname einer verweisenden Website, der Zeitpunkt sowie zufällig erzeugte Besucher- und Sitzungskennungen. IP-Adresse, vollständige Referrer-URL und Browserkennung werden nicht in die Auswertung oder Benachrichtigung übernommen.</p>
          <p>Die Besucherkennung wird als First-Party-Cookie <code>pc_visitor_id</code> für höchstens 180 Tage gespeichert. Die Sitzungskennung liegt nur im Sitzungsspeicher des Browsers. Das notwendige Cookie <code>pc_consent</code> speichert für höchstens 180 Tage, ob Sie der Analyse zugestimmt oder sie abgelehnt haben. Bei einer Ablehnung wird keine Besucherkennung angelegt und es findet keine Besuchsanalyse statt.</p>
          <p>Die Ereignisdaten werden für höchstens 180 Tage auf dem eigenen Server gespeichert und zur Reichweiten-, Navigations- und Conversionanalyse genutzt. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit den anwendbaren Vorschriften über den Zugriff auf Endeinrichtungen.</p>
          <p>Bei zugestimmten Ereignissen wird über die Telegram Bot API eine Benachrichtigung an ein privates Konto übermittelt. Sie enthält die genannten pseudonymen Ereignisdaten. Telegram verarbeitet diese Informationen nach den eigenen Datenschutzbestimmungen.</p>
          <p>Sie können Ihre Entscheidung jederzeit über „Cookie-Einstellungen“ im Footer ändern. Bei einem Widerruf wird die lokale Besucherkennung gelöscht und die zukünftige Analyse beendet. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">4. Kontaktformular</h2>
          <p>Wenn Sie das Kontaktformular nutzen, werden Name, E-Mail-Adresse, freiwillig angegebene Telefonnummer und Nachricht verarbeitet, um Ihre Anfrage zu beantworten und gegebenenfalls vorvertragliche Maßnahmen durchzuführen.</p>
          <p>Die Angaben werden über die Telegram Bot API an ein privates Konto übermittelt, damit die Anfrage zeitnah bearbeitet werden kann. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit es um eine konkrete Anfrage oder vorvertragliche Maßnahme geht; in anderen Fällen Art. 6 Abs. 1 lit. f DSGVO.</p>
          <p>Die Daten werden nur so lange gespeichert, wie dies für die Bearbeitung der Anfrage oder aufgrund gesetzlicher Aufbewahrungspflichten erforderlich ist.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-white">5. Ihre Rechte</h2>
          <p>Sie haben nach Maßgabe der gesetzlichen Voraussetzungen das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem besteht ein Beschwerderecht bei einer zuständigen Datenschutzaufsichtsbehörde.</p>
        </section>

        <aside className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 text-sm text-amber-100">
          Diese Datenschutzerklärung beschreibt die aktuell implementierten technischen Abläufe. Vor dem produktiven Einsatz sollte sie auf Hosting-Anbieter, Telegram-Konfiguration und die konkrete betriebliche Verarbeitung juristisch geprüft werden.
        </aside>
      </article>
      <Footer />
    </main>
  );
}
