import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionWrapper } from '../section-wrapper';
import { CheckCircle } from 'lucide-react';

const highlights = [
    "Government verified guards",
    "Background-checked staff",
    "Professional training",
    "Quick deployment"
]

export function About() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <SectionWrapper id="about" className="bg-background">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Trusted Security Partner for Your Peace of Mind
          </h2>
          <p className="text-muted-foreground">
            At Vanguard Security, we are dedicated to providing top-tier security solutions tailored to your unique needs. With years of experience, our mission is to ensure the safety and security of our clients through professionalism, vigilance, and integrity.
          </p>
          <ul className="space-y-3">
            {highlights.map((text, index) => (
                <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span>{text}</span>
                </li>
            ))}
          </ul>
        </div>
        <div>
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              data-ai-hint={aboutImage.imageHint}
              width={800}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
