"use client";

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import Navbar from '../components/navbar';
import Footers from '../components/home/Footer';
import { 
  Phone, 
  Send, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Mail, 
  MessageSquare,
  Smartphone,
  Linkedin 
} from 'lucide-react';

// Animations-Varianten
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const startedAt = useRef(Date.now());

  async function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: data.get('message'),
          company: data.get('company'),
          t: Date.now() - startedAt.current,
        }),
      });

      if (!res.ok) throw new Error();
      setSuccess(true);
      form.reset();
    } catch {
      setError('Nachricht konnte nicht gesendet werden.');
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "w-full bg-gray-950/50 border border-gray-800 text-gray-100 rounded-xl px-4 py-3.5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 focus:outline-none transition-all placeholder:text-gray-600";
  const labelClasses =
    "text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1 flex items-center gap-1.5";

  return (
    <main className="relative min-h-screen bg-[#050505] text-gray-100 selection:bg-blue-500/30 overflow-hidden">
      <Navbar />

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 px-6 pt-32 pb-20 max-w-5xl mx-auto flex flex-col items-center"
      >
        {/* Hero */}
        <motion.div variants={item} className="text-center mb-16 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 pb-2">
            Kontakt aufnehmen
          </h1>
          <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed">
            Gib uns kurz die wichtigsten Infos (Ziel, Zeitraum, Budget). Wir melden uns zeitnah.
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* FORM */}
          <motion.div variants={item} className="lg:col-span-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <form
                onSubmit={submitForm}
                className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl space-y-6"
              >
                <input type="text" name="company" tabIndex="-1" autoComplete="off" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={labelClasses}><User className="w-3 h-3" /> Name</label>
                    <input name="name" required placeholder="Dein Name" className={inputClasses} />
                  </div>
                  <div className="space-y-2">
                    <label className={labelClasses}><Mail className="w-3 h-3" /> E-Mail</label>
                    <input name="email" type="email" required placeholder="name@beispiel.de" className={inputClasses} />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}><Smartphone className="w-3 h-3" /> Telefon (Optional)</label>
                  <input name="phone" type="tel" placeholder="+49 123 45678" className={inputClasses} />
                </div>

                <div className="space-y-2">
                  <label className={labelClasses}><MessageSquare className="w-3 h-3" /> Nachricht</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Erzähle uns von deinem Projekt..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                {/* DSGVO CHECKBOX */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border border-gray-700 bg-gray-900 text-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    />
                    <span className="text-sm text-gray-400 leading-relaxed">
                      Ich habe die{" "}
                      <a
                        href="/datenschutz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                      >
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und akzeptiere sie.
                    </span>
                  </label>
                </div>

                {/* SUBMIT */}
                <div className="pt-2">
                  <button
                    disabled={loading || success}
                    className={`w-full rounded-xl py-4 font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2
                      ${success ? 'bg-green-500' : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-[1.01]'}
                    `}
                  >
                    {success ? <><CheckCircle2 className="w-5 h-5" />Gesendet!</> :
                     loading ? <><Loader2 className="w-5 h-5 animate-spin" />Senden...</> :
                     <><span>Nachricht absenden</span><Send className="w-4 h-4" /></>}
                  </button>
                </div>

                {error && (
                  <div className="flex items-center justify-center gap-2 text-red-400 text-sm bg-red-900/20 py-3 rounded-xl border border-red-900/50">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
          

          {/* SIDEBAR */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <motion.a variants={item} href="tel:+4917632279415" className="group flex items-center gap-5 p-5 rounded-3xl border border-white/5 bg-gray-900/40 backdrop-blur-md">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-sm text-gray-300">Jetzt anrufen</span>
            </motion.a>

            <motion.a variants={item} href="https://www.linkedin.com/in/luca-samuel-ple%C3%9Fing-233336274" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 p-5 rounded-3xl border border-white/5 bg-gray-900/40 backdrop-blur-md">
              <Linkedin className="w-5 h-5 text-[#0077b5]" />
              <span className="text-sm text-gray-300">LinkedIn</span>
            </motion.a>
              {/* 3. Info Box */}
            <motion.div 
              variants={item} 
              className="p-6 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/5 backdrop-blur-sm mt-2"
            >
              <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                Status
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Wir melden uns in der Regel innerhalb von 24 Stunden.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
           <Footers/>
    </main>
  );
}







 