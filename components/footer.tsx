import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center space-x-2">
              <Image className="rounded-lg" src="/logo.png" alt="Ganpati Traders" width={40} height={40} />
              <div>
                <div className="text-xl font-bold text-foreground">Ganpati Traders</div>
                <div className="text-xs text-muted-foreground">Premium Printing Solutions</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for all printing needs. We deliver quality, creativity, and reliability in every project.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links and Services - Side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2 md:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Visiting Cards</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Custom Bags</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">ID Cards</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Custom Printing</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">Bulk Orders</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span className="text-muted-foreground">+91 81002 37440</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <span className="text-muted-foreground">info@ganpatitraders.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-500 mt-1" />
                <span className="text-muted-foreground">
                  19, Brabourne Road,<br />
                  Kolkata, West Bengal 700001
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ganpati Traders. All rights reserved. | 
            <Link href="/privacy" className="hover:text-foreground transition-colors"> Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-foreground transition-colors"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
