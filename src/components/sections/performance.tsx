"use client";

import { useEffect, useState, useRef } from 'react';
import { Progress } from "@/components/ui/progress";
import { SectionWrapper } from '../section-wrapper';

const performanceData = [
  { label: "Guard Reliability", value: 98 },
  { label: "Client Retention", value: 95 },
  { label: "Incident Prevention", value: 99 },
  { label: "Fast Response Time", value: 97 },
];

const AnimatedProgress = ({ value }: { value: number }) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 500);
    return () => clearTimeout(timer);
  }, [value]);

  return <Progress value={progress} className="w-full h-3 [&>*]:bg-accent" />;
};

export function Performance() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <SectionWrapper id="performance" className="bg-primary">
        <div ref={ref}>
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">Our Success & Performance</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
                    We pride ourselves on delivering exceptional results and maintaining the highest standards of service.
                </p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {performanceData.map((item, index) => (
                <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-white">{item.label}</h3>
                    <span className="font-bold text-accent font-headline">{inView ? item.value : 0}%</span>
                    </div>
                    {inView && <AnimatedProgress value={item.value} />}
                </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
}
