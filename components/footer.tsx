import Link from "next/link"
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6" />
              <span className="font-serif text-xl font-semibold">Urban Coffee Bar</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs mb-4">
              Your daily coffee break. Fresh coffee, warm atmosphere, and unforgettable moments since 2014.
            </p>
            <p className="text-background/50 text-xs italic">
              Urban Coffee Bar — Your daily coffee break
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-background/70 text-sm">
              <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
              <p>Saturday: 8:00 AM - 10:00 PM</p>
              <p>Sunday: 8:00 AM - 8:00 PM</p>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-background/70 text-sm">123 Coffee Street</p>
            <p className="text-background/70 text-sm">New York, NY 10001</p>
            <p className="text-background/70 text-sm mt-2">+1 (234) 567-890</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Urban Coffee Bar. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/50 hover:text-background/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/50 hover:text-background/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
