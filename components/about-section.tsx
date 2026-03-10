"use client"

import Link from "next/link"

import Image from "next/image"
import { Coffee, Leaf, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu")
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="/images/cafe-interior.jpg"
                alt="Urban Coffee Bar cozy interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card p-6 rounded-lg shadow-xl max-w-[200px]">
              <p className="font-serif text-3xl font-bold text-primary mb-1">10+</p>
              <p className="text-muted-foreground text-sm">Years of serving happiness</p>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              Where Every Cup Tells a Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Founded in 2014, Urban Coffee Bar was born from a simple passion: crafting the perfect cup of coffee. 
              What started as a small corner cafe has grown into a beloved neighborhood spot where locals gather, 
              work, and create memories.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We source our beans directly from sustainable farms across the globe, roasting them locally to ensure 
              freshness in every sip. Our skilled baristas are artists, transforming these premium beans into 
              handcrafted drinks that delight your senses.
            </p>

            {/* USP Points */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Locally Roasted</h3>
                  <p className="text-sm text-muted-foreground">Fresh beans, roasted weekly</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Sustainable</h3>
                  <p className="text-sm text-muted-foreground">Ethically sourced beans</p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Handcrafted</h3>
                  <p className="text-sm text-muted-foreground">Made with love & care</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={scrollToMenu}
              >
                Explore Our Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
