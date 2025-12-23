"use client"
import React from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { SectionWrapper } from "../section-wrapper"
import Autoplay from "embla-carousel-autoplay"


const testimonials = [
  {
    name: "John D., CEO of TechCorp",
    avatarId: "testimonial-avatar-1",
    rating: 5,
    review: "Vanguard Security has been an invaluable partner. Their guards are professional, punctual, and highly skilled. We've seen a significant improvement in our corporate security since they came on board."
  },
  {
    name: "Sarah L., Event Manager",
    avatarId: "testimonial-avatar-2",
    rating: 5,
    review: "We hired Vanguard for our annual music festival, and they were outstanding. Their team handled crowd control flawlessly and ensured a safe environment for everyone. Highly recommended!"
  },
  {
    name: "Michael B., Property Manager",
    avatarId: "testimonial-avatar-3",
    rating: 5,
    review: "The peace of mind Vanguard provides for our residential community is priceless. Their 24/7 presence and quick response times have made our residents feel incredibly safe."
  }
];

export function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <SectionWrapper id="testimonials" className="bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">What Our Clients Say</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Real stories from satisfied clients who trust us with their security.
        </p>
      </div>

      <Carousel 
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => {
            const avatar = PlaceHolderImages.find(p => p.id === testimonial.avatarId);
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card border-border">
                    <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <p className="italic text-muted-foreground mb-6">"{testimonial.review}"</p>
                      <div className="flex items-center gap-4">
                        {avatar && (
                           <Image
                            src={avatar.imageUrl}
                            alt={avatar.description}
                            data-ai-hint={avatar.imageHint}
                            width={50}
                            height={50}
                            className="rounded-full"
                          />
                        )}
                        <span className="font-semibold font-headline">{testimonial.name}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </SectionWrapper>
  );
}
