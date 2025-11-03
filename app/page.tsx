"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react'
import Stack from "@/components/Stack"

export default function HomePage() {
  const services = [
    {
      title: "Printing Solutions",
      description: "Business essentials related to office use, branding, and documentation",
      image: "https://a.storyblok.com/f/165154/1280x720/0a30e26489/01_digital-printing-overview.jpg",
      services: ["Letter Pad Printing", "Bill Book Printing", "Vouchers", "Pamphlets", "Catalogues"]
    },
    {
      title: "Business Identity and Branding Materials",
      description: "Personal or corporate branding and professional presentation solutions",
      image: "https://img.freepik.com/free-vector/stylish-business-stationery-items-set-blue-color_1017-30619.jpg?semt=ais_hybrid&w=740&q=80",
      services: ["Visiting Card Printing", "Premium Cards", "UV Cards", "Foil Cards", "Texture Sheet"]
    },
    {
      title: "Customized and Creative Printing Works",
      description: "Specialized, creative, and high-quality printing for design-focused needs",
      image: "https://quapri.in/wp-content/uploads/2025/09/custom-vinyl-stickers.webp",
      services: ["Cardboard Works Printing", "Stickers", "Engravings"]
    },
    {
      title: "Corporate and Event Accessories",
      description: "Supporting materials and accessories for offices, conferences, and events",
      image: "https://meowprintsg.b-cdn.net/wp-content/uploads/2024/09/21121737/T-Shirt-Printing-and-Corporate-Gifts-Printing-Singapore-MeowPrint-Pte-Ltd.jpg",
      services: ["Visiting Card Box", "ID Card", "T-Shirt Printing", "Mug Printing", "Shopping Bag Printing"]
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Solutions Pvt Ltd",
      rating: 5,
      text: "Exceptional quality and service! Our visiting cards turned out perfect and were delivered on time."
    },
    {
      name: "Priya Sharma",
      company: "Fashion Boutique",
      rating: 5,
      text: "The custom bags for our store are amazing. Great quality and the printing is vibrant and durable."
    },
    {
      name: "Amit Patel",
      company: "Educational Institute",
      rating: 5,
      text: "Professional ID cards with excellent security features. Highly recommend Ganpati Traders!"
    }
  ]

  const images = [
    { id: 1, img: "https://images.jdmagicbox.com/quickquotes/images_main/printing-services-for-pvc-sticker-2223061475-x26rd0gq.jpg" },
    { id: 2, img: "https://www.meraprint.com/wp-content/uploads/2021/09/business-visiting-cards-1.jpg" },
    { id: 3, img: "https://m.media-amazon.com/images/I/51o8Ihu1gZL.jpg" },
    { id: 4, img: "https://phoenixprint.in/wp-content/uploads/2025/01/1931.Ganpati-best-image-printed-t-shirt-for-men.jpg" }
  ];

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero-section']))
  
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Set up Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.15, // Trigger when 15% of section is visible
      rootMargin: '0px 0px -100px 0px' // Trigger slightly before section enters viewport
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          // Only add section when it's scrolled into view
          setVisibleSections(prev => new Set(prev).add(entry.target.id))
          // Once visible, we can optionally stop observing it
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Wait for DOM to be ready before observing
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate-section]')
      sections.forEach(section => {
        // Skip hero section as it's already visible
        if (section.id !== 'hero-section') {
          observer.observe(section)
        }
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">    
      {/* Hero Section */}
      <section 
        id="hero-section"
        data-animate-section
        className={`relative pt-16 pb-10 lg:pt-24 lg:pb-20 overflow-hidden transition-all duration-1000 ${
          visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className={`space-y-4 transition-all duration-1000 ${
                visibleSections.has('hero-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '200ms' }}
              >
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Premium <span className="text-blue-600">Printing</span> Solutions for Your <span className="text-orange-600">Business</span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  From visiting cards to custom bags, we deliver exceptional printing services that elevate your brand and make lasting impressions.
                </p>
              </div>
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
                visibleSections.has('hero-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '400ms' }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link href="/services" className="flex items-center gap-2">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div className={`flex items-center gap-8 pt-4 transition-all duration-1000 ${
                visibleSections.has('hero-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionDelay: '600ms' }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-foreground/70">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-foreground/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">24hrs</div>
                  <div className="text-sm text-foreground/70">Quick Delivery</div>
                </div>
              </div>
            </div>
            <div className={`relative flex items-center justify-center min-h-[500px] lg:min-h-[600px] transition-all duration-1000 ${
              visibleSections.has('hero-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '300ms' }}
            >
              {/* Decorative background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-orange-400/20 rounded-3xl transform rotate-3 blur-3xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-orange-600/10 rounded-3xl" />
              
              {/* Stack component with better sizing */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <Stack
                  randomRotation={true}
                  sensitivity={180}
                  sendToBackOnClick={false}
                  cardDimensions={{ width: 500, height: 500 }}
                  cardsData={images}
                  animationConfig={{ stiffness: 200, damping: 30 }}
                />
              </div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section 
        id="services-section"
        data-animate-section
        className={`py-20 bg-card transition-all duration-1000 ${
          visibleSections.has('services-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('services-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-blue-600">Printing</span> Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We offer a comprehensive range of high-quality printing services to meet all your business and personal needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-xl transition-all duration-300 border border-border shadow-lg hover:-translate-y-2 overflow-hidden p-0 ${
                  visibleSections.has('services-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={380}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/80 mb-4 text-sm">{service.description}</p>
                    <ul className="space-y-2">
                      {service.services.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              <Link href="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section 
        id="why-choose-section"
        data-animate-section
        className={`py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white transition-all duration-1000 ${
          visibleSections.has('why-choose-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('why-choose-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Ganpati Traders?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center transition-all duration-1000 ${
              visibleSections.has('why-choose-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="opacity-90">Premium materials and state-of-the-art printing technology ensure superior quality in every project.</p>
            </div>
            <div className={`text-center transition-all duration-1000 ${
              visibleSections.has('why-choose-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="opacity-90">Quick processing and delivery without compromising on quality. Most orders ready within 24-48 hours.</p>
            </div>
            <div className={`text-center transition-all duration-1000 ${
              visibleSections.has('why-choose-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '600ms' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="opacity-90">Experienced professionals who understand your needs and provide personalized solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials-section"
        data-animate-section
        className={`py-20 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has('testimonials-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('testimonials-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`group border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${
                  visibleSections.has('testimonials-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic group-hover:text-foreground transition-colors duration-300">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-section"
        data-animate-section
        className={`py-20 bg-card transition-all duration-1000 ${
          visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-3xl mx-auto transition-all duration-1000 ${
            visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your <span className="text-orange-600">Printing</span> Project?
            </h2>
            <p className="text-xl text-foreground/80 mb-8">
              Get in touch with us today for a free consultation and quote. Let's bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2 text-foreground/80">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+91 81002 37440</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>info@ganpatitraders.com</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>Kolkata, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
