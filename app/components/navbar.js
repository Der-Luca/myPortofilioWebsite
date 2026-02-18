'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // WICHTIG: Image importieren
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#selected-work', label: 'Projekte' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/eu-cloud-migration', label: 'EU Cloud' },
  { href: '/eu-cloud-migration/risiko-check', label: 'DSGVO-Check' },
];

function NavLink({ href, label, active }) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-xl text-sm font-medium transition
        ${
          active
            ? 'text-white bg-white/10 shadow-sm shadow-black/40'
            : 'text-gray-200/80 hover:text-white hover:bg-white/5 hover:shadow-sm hover:shadow-black/30'
        }`}
      aria-current={active ? 'page' : undefined}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
  <header
  className={[
    'fixed top-0 left-0 right-0 z-50',
    'backdrop-blur-xl supports-[backdrop-filter]:bg-slate-900/10',
    'transition-all duration-300',
    scrolled
      ? 'bg-slate-900/40 border-b border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.45)]'
      : 'bg-slate-900/10 border-b border-white/5 shadow-none',
  ].join(' ')}
>

      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Bereich mit LOGO */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          {/* Hier ist das neue Logo. 
             Stelle sicher, dass 'logo.png' im 'public' Ordner liegt.
          */}
       <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-105">
  <Image
    src="/logo.png"
    alt="Plessing Consulting Logo"
    fill
    className="object-contain"
    priority
  />
</div>
   

          {/* Text daneben (nur Desktop) */}
          <div className="hidden flex-col leading-tight text-left sm:flex">
            <span className="text-sm font-semibold text-white tracking-wide">
              Plessing Consulting
            </span>
            <span className="text-[0.65rem] text-slate-300/80 uppercase tracking-wider font-medium">
              Automatisierung & KI
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((n) => (
            <NavLink
              key={n.href}
              href={n.href}
              label={n.label}
              active={pathname === n.href}
            />
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-2xl bg-gradient-to-r from-blue-500/90 to-cyan-400/90
                       px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(37,99,235,0.55)]
                       hover:from-blue-400 hover:to-cyan-300 hover:shadow-[0_14px_40px_rgba(37,99,235,0.75)]
                       active:scale-[0.98] transition
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/80 focus-visible:ring-offset-0"
          >
            Kontakt
          </Link>
        </div>

        {/* Mobile Burger Button (War schon korrekt in deinem Code!) */}
        <button
          type="button"
          aria-label="Navigation öffnen"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          // Z-Index erhöht, damit er sicher über dem Menü liegt, falls nötig
          className="relative z-50 inline-flex items-center justify-center rounded-xl p-2
                     text-slate-100/80 hover:text-white hover:bg-white/8
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:hidden"
        >
          <span className="sr-only">Menü</span>
          {/* Die Animation des Hamburgers zum 'X' */}
          <div className="flex flex-col gap-[5px] w-6">
              <motion.span
                animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full rounded-full bg-current origin-center transition-transform"
              />
              <motion.span
                animate={open ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="block h-0.5 w-full rounded-full bg-current transition-all"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block h-0.5 w-full rounded-full bg-current origin-center transition-transform"
              />
          </div>
        </button>
      </nav>

      {/* Mobile Menü Dropdown (War auch schon korrekt) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            // Hab den Hintergrund etwas dunkler gemacht für besseren Kontrast
            className="absolute top-full left-0 right-0 z-40 md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl shadow-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6 lg:px-8">
              {navItems.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  // Klick schließt das Menü
                  onClick={() => setOpen(false)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition
                    ${
                      pathname === n.href
                        ? 'text-white bg-white/15 shadow-sm shadow-black/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                href="/contact"
                 // Klick schließt das Menü
                onClick={() => setOpen(false)}
                className="mt-4 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500
                           px-4 py-4 text-center text-base font-bold text-white
                           shadow-[0_4px_20px_rgba(37,99,235,0.4)]
                           active:scale-[0.98] transition focus:outline-none"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}