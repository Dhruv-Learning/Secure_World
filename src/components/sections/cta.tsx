import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SectionWrapper } from "../section-wrapper"

export function CTA() {
  return (
    <SectionWrapper className="bg-primary">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-white">
          Need Reliable Security for Your Property or Business?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Don't wait for a security threat to become a reality. Contact our experts today for a free, no-obligation security assessment.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary">
            <a href="tel:+11234567890">Call Now</a>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  )
}
