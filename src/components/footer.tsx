import Link from 'next/link';
import { Shield, Twitter, Facebook, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Services' },
  { href: '/#why-us', label: 'Why Choose Us' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '#', label: 'Security Guard Services' },
  { href: '#', label: 'Corporate Security' },
  { href: '#', label: 'Residential Security' },
  { href: '#', label: 'Industrial Security' },
  { href: '#', label: 'Event Security' },
  { href: '#', label: 'CCTV Surveillance' },
];


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold font-headline text-white">Vanguard Security</span>
            </Link>
            <p className="text-sm text-gray-300">
              Providing professional, reliable, and highly-trained security personnel for all your needs. Your safety is our priority.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-accent"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-300 hover:text-accent"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-300 hover:text-accent"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold font-headline mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold font-headline mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-headline mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>123 Security Lane, Metropolis, USA</li>
              <li>Email: contact@vanguardsecurity.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vanguard Security. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
