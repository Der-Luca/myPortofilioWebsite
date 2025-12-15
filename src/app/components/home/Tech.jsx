export default function Tech() {
  const logos = ['n8n','Next.js','Postgres','Docker','Node.js','OpenAI', "Firebase"];
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto text-center">
      <h2 className="text-2xl font-semibold mb-6">Tech & Integrationen</h2>
      <div className="flex flex-wrap items-center justify-center gap-3 text-gray-300">
        {logos.map(l => (
          <span key={l} className="rounded-full border border-gray-800 px-4 py-2 bg-gray-900/50">{l}</span>
        ))}
      </div>
    </section>
  );
}
