import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '../section-wrapper';
import { ShieldCheck, Building, Home, Factory, PartyPopper, Video, type LucideIcon } from 'lucide-react';

const services = [
  { icon: ShieldCheck, title: "Security Guard Services", description: "Highly trained, professional guards for static and mobile patrols." },
  { icon: Building, title: "Corporate Security", description: "Comprehensive security solutions for office buildings and corporate campuses." },
  { icon: Home, title: "Residential Security", description: "Protecting homes and communities with dedicated personnel and surveillance." },
  { icon: Factory, title: "Industrial Security", description: "Specialized security for manufacturing plants, warehouses, and industrial sites." },
  { icon: PartyPopper, title: "Event Security", description: "Expert crowd management and security for events of all sizes." },
  { icon: Video, title: "CCTV Surveillance", description: "24/7 monitoring services with state-of-the-art CCTV technology." },
];

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <Card className="bg-card text-card-foreground text-center p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20 hover:border-accent">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-primary rounded-full">
          <Icon className="h-8 w-8 text-accent" />
        </div>
      </div>
      <h3 className="text-xl font-bold font-headline mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}

export function Services() {
  return (
    <SectionWrapper id="services" className="bg-primary">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Our Security Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                We offer a wide range of security services to meet the specific needs of our clients.
            </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>
    </SectionWrapper>
  );
}
