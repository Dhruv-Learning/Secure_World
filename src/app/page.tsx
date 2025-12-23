import { Hero } from '@/components/sections/hero';
import { Statistics } from '@/components/sections/statistics';
import { About } from '@/components/sections/about';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Performance } from '@/components/sections/performance';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <Services />
      <WhyChooseUs />
      <Performance />
      <Testimonials />
      <CTA />
    </>
  );
}
