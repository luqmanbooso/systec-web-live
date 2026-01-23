import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToHash = (href: string) => {
    if (href && href.startsWith('#')) {
      const el = document.querySelector(href);
      const nav = document.querySelector('nav');
      const offset = nav ? nav.getBoundingClientRect().height : 0;
      if (el) {
        const top = (el as Element).getBoundingClientRect().top + window.scrollY - offset - 12;
        window.scrollTo({ top, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <img src="/systecweb.png" alt="Systec Web" className="w-full h-10  rounded-xl object-cover transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold font-serif tracking-tight text-foreground">
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('#')) {
                  e.preventDefault();
                  scrollToHash(link.href);
                }
              }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="cta" className="rounded-full px-6">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    scrollToHash(link.href);
                  }
                }}
              >
                {link.name}
              </a>
            ))}
            <Button variant="cta" className="w-full rounded-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
