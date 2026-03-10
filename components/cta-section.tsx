import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-accent-foreground mb-4 text-balance">
          Ready for Your Daily Coffee Break?
        </h2>
        <p className="text-accent-foreground/80 mb-8 max-w-md mx-auto">
          Visit us today and experience the perfect blend of great coffee and cozy atmosphere.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <Link href="#location">Visit Us Today</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 px-8 bg-transparent">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
