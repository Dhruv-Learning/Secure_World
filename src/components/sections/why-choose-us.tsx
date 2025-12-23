import { SectionWrapper } from '../section-wrapper';
import { Card } from '../ui/card';
import { Users, Clock, Replace, BadgePercent, Gavel, Target, type LucideIcon } from 'lucide-react';

const reasons = [
  { icon: Users, title: "Experienced & Trained Personnel", description: "Our guards undergo rigorous training and have extensive field experience." },
  { icon: Clock, title: "24/7 Customer Support", description: "We are always available to address your concerns, day or night." },
  { icon: Replace, title: "Quick Replacement Guarantee", description: "Swift guard replacement to ensure uninterrupted security coverage." },
  { icon: BadgePercent, title: "Affordable Pricing", description: "Competitive pricing without compromising on quality or reliability." },
  { icon: Gavel, title: "Legal Compliance", description: "Fully licensed, insured, and compliant with all industry regulations." },
  { icon: Target, title: "Customized Solutions", description: "Tailoring security plans to fit the unique needs of each client." }
];

interface ReasonCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

function ReasonCard({ icon: Icon, title, description }: ReasonCardProps) {
    return (
        <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
                <div className="p-3 bg-primary rounded-full">
                    <Icon className="h-6 w-6 text-accent" />
                </div>
            </div>
            <div>
                <h3 className="text-lg font-semibold font-headline">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
            </div>
        </div>
    );
}

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Vanguard Security?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are committed to excellence and dedicated to providing a security service you can depend on.
        </p>
      </div>
      <Card className="bg-card p-8 md:p-12 border-border">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {reasons.map((reason, index) => (
                  <ReasonCard key={index} {...reason} />
              ))}
          </div>
      </Card>
    </SectionWrapper>
  );
}
