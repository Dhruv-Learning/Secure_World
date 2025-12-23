import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
    const mapImage = PlaceHolderImages.find(p => p.id === 'contact-map');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">We're here to help. Reach out to us for any inquiries or to get a quote.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Get a Free Quote</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card border-border">
                <CardHeader>
                    <CardTitle className="text-2xl font-headline">Our Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Our Office</h3>
                            <p className="text-muted-foreground">456 Shield Avenue,GAziyabad City, India </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Email Us</h3>
                            <p className="text-muted-foreground">info@vanguardsecurity.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">Call Us</h3>
                            <p className="text-muted-foreground">(+91) 6396309165</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <MessageCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold">WhatsApp</h3>
                            <p className="text-muted-foreground">+91 7008755889 </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {mapImage && (
              <div className="rounded-lg overflow-hidden border border-border">
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  data-ai-hint={mapImage.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
