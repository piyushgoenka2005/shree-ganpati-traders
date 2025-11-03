"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-background border-b border-border shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-orange-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+91 81002 37440</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>info@ganpatitraders.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Quality Printing Solutions Since 2014</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">Ganpati Traders</div>
              <div className="text-xs text-muted-foreground">Premium Printing Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="transition-transform duration-300 hover:scale-110"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground transition-all duration-300 rotate-0" />
              ) : (
                <Menu className="w-6 h-6 text-foreground transition-all duration-300 rotate-0" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-[600px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-foreground/80 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 transform ${
                    isMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${index * 50 + 100}ms` : '0ms' 
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className={`bg-blue-600 hover:bg-blue-700 text-white mt-4 transition-all duration-200 transform ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${navigation.length * 50 + 150}ms` : '0ms' 
                }}
              >
                <Link href="/contact" className="flex items-center justify-center w-full">Get Quote</Link>
              </Button>
              <Button 
                variant="outline"
                className={`border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 mt-2 transition-all duration-200 transform ${
                  isMenuOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${navigation.length * 50 + 200}ms` : '0ms' 
                }}
                onClick={() => {
                  window.location.href = 'tel:+918100237440'
                  setIsMenuOpen(false)
                }}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
