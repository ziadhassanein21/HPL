'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import ThemeToggle from './ThemeToggle';

export default function SiteHeader({ dict, lang }) {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuActive(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleEscape);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuActive);
    return () => document.body.classList.remove('menu-open');
  }, [menuActive]);

  const switchLanguage = () => {
    const newLang = lang === 'ar' ? 'en' : 'ar';
    const newPathname = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPathname || `/${newLang}`);
  };

  const closeMenu = () => setMenuActive(false);

  return (
    <header className={scrolled ? 'site-header scrolled' : 'site-header'}>
      <div className="container nav-shell">
        <a href="#home" className="brand-mark" onClick={closeMenu}>
          <Image
            src="/Images/logo.png"
            alt="NEW BASIC Company"
            width={42}
            height={42}
            className="brand-logo"
            priority
          />
          <span className="brand-copy">
            <strong>NEW BASIC</strong>
            <small>{dict.nav.brand}</small>
          </span>
        </a>

        <nav id="primary-navigation" className={`nav-links ${menuActive ? 'active' : ''}`} aria-label={dict.nav.ariaLabel}>
          <a href="#products" onClick={closeMenu}>{dict.nav.products}</a>
          <a href="#features" onClick={closeMenu}>{dict.nav.features}</a>
          <a href="#process" onClick={closeMenu}>{dict.nav.process}</a>
          <a href="#gallery" onClick={closeMenu}>{dict.nav.gallery}</a>
          <a href="#faq" onClick={closeMenu}>{dict.nav.faq}</a>
          <a href="#contact" onClick={closeMenu}>{dict.nav.contact}</a>
          <ThemeToggle dict={dict} />
          <button className="lang-toggle" type="button" onClick={switchLanguage}>
            {dict.nav.langToggle}
          </button>
        </nav>

        <button
          type="button"
          className={`hamburger ${menuActive ? 'active' : ''}`}
          onClick={() => setMenuActive((current) => !current)}
          aria-label={dict.nav.menuToggle}
          aria-expanded={menuActive}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
