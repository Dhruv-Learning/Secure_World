"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Menu, X, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/#why-us', label: 'Why Choose Us' },
  { href: '/#testimonials', label: 'Testimonials' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold font-headline text-white">Vanguard Security</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-300 hover:text-accent transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-background/95 pb-4 absolute top-20 left-0 w-full">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-accent" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-4/5 mt-4">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
