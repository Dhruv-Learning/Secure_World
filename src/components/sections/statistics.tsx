import { AnimatedCounter } from '@/components/animated-counter';
import { SectionWrapper } from '../section-wrapper';

const stats = [
  { value: 500, label: 'Trained Security Guards', suffix: '+' },
  { value: 120, label: 'Happy Clients', suffix: '+' },
  { value: 99, label: 'Client Satisfaction', suffix: '%' },
  { value: 24, label: 'Security Support', suffix: '/7' },
];

export function Statistics() {
  return (
    <SectionWrapper className="bg-primary">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center flex flex-col items-center justify-start">
              <div className="text-4xl md:text-5xl font-bold font-headline text-accent flex items-baseline">
                <AnimatedCounter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm md:text-base text-gray-300 max-w-40">{stat.label}</p>
            </div>
          ))}
        </div>
    </SectionWrapper>
  );
}
