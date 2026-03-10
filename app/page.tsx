import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { MenuSection } from "@/components/menu-section"
import { GallerySection } from "@/components/gallery-section"
import { TrustSection } from "@/components/trust-section"
import { LocationSection } from "@/components/location-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Cart } from "@/components/cart"

export default function Home() {
  return (
    <>
      <Header />
      <Cart />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <TrustSection />
        <LocationSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
