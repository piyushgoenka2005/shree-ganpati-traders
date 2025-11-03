"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero-section']))
  
  useEffect(() => {
    // Check initial visibility of sections on page load
    const checkInitialVisibility = () => {
      const sections = document.querySelectorAll('[data-animate-section]')
      const viewportHeight = window.innerHeight
      
      sections.forEach((section) => {
        if (!section.id) return
        
        const rect = section.getBoundingClientRect()
        
        // Check if section is anywhere in the viewport (more lenient check)
        // If any part of the section is visible, show it immediately
        const isInViewport = (
          rect.top < viewportHeight * 1.5 && // Section top is within 1.5x viewport height
          rect.bottom > -viewportHeight * 0.5 && // Section bottom is above -0.5x viewport
          rect.top < viewportHeight + 200 // Section starts within viewport + 200px buffer
        )
        
        // For initial load, be very lenient - if section is near or in viewport, show it
        if (isInViewport) {
          setVisibleSections(prev => new Set(prev).add(section.id))
        }
      })
    }

    // Check immediately and multiple times to ensure DOM is ready (especially on mobile)
    checkInitialVisibility()
    const initialCheckTimer = setTimeout(checkInitialVisibility, 50)
    const secondCheckTimer = setTimeout(checkInitialVisibility, 200)
    const thirdCheckTimer = setTimeout(checkInitialVisibility, 500)

    // Set up Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: [0.05, 0.1, 0.2, 0.3], // Multiple thresholds for better detection
      rootMargin: '50px 0px 50px 0px' // Larger margin to trigger earlier on mobile
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id))
        }
      })
    }, observerOptions)

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const sections = document.querySelectorAll('[data-animate-section]')
      sections.forEach(section => {
        if (section.id) {
          observer.observe(section)
        }
      })
    }, 150)

    return () => {
      clearTimeout(initialCheckTimer)
      clearTimeout(secondCheckTimer)
      clearTimeout(thirdCheckTimer)
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const services = [
    {
      id: "letterhead",
      title: "Letterhead Printing",
      description: "Professional letterheads and stationery for business correspondence with custom branding.",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/2/NO/BM/KE/11233291/letterhead-printing.jpg",
      price: 3,
      minQuantity: 100,
      highlights: [
        "Premium quality paper (80-100 GSM)",
        "Custom logo and branding design",
        "Quick printing with various size options"
      ]
    },
    {
      id: "visiting-card",
      title: "Visiting Card Printing",
      description: "Professional business cards that make lasting first impressions with premium materials & custom design.",
      image: "https://www.creativeartsdesigning.in/wp-content/uploads/2017/03/QR-Visiting-card-single-side.jpg",
      price: 2.5,
      minQuantity: 100,
      highlights: [
        "300GSM premium cardstock available",
        "QR code and digital integration options",
        "Matte, glossy, and UV finish choices"
      ]
    },
    {
      id: "bill-book",
      title: "Bill Book Printing",
      description: "Custom bill books and invoice pads for businesses with professional layouts and branding.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTVyhUTGYJJjVwQzINWRg84AKq-wCcJyVMjyiYfv6GcUNkP7wynzyC2-c2eSAPMshSgF5lHddGQ2qr0wwHuAdOHWd7dfmweUUO_tIDOxFaXLWQf8pxcGnpfU6aRZidRDG-pj4Z3V7MgskV/s2048/Bill-book-triplicate2.jpg",
      price: 120,
      minQuantity: 10,
      highlights: [
        "Duplicate and triplicate options",
        "Custom serial numbering available",
        "Professional layout and formatting"
      ]
    },
    {
      id: "vouchers",
      title: "Vouchers",
      description: "Custom voucher printing for promotions, discounts, and special offers with security features.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/gift-voucher-printing-service-2226609542-n76x0dmk.jpg",
      price: 0.8,
      minQuantity: 1000,
      highlights: [
        "Security features and unique codes",
        "Multiple design templates available",
        "Watermark and anti-counterfeit options"
      ]
    },
    {
      id: "pamphlets",
      title: "Pamphlets",
      description: "Eye-catching pamphlets for marketing, events, and information distribution with vibrant printing.",
      image: "https://www.perprint.in/wp-content/uploads/2023/05/Flyers-images.jpg",
      highlights: [
        "Full-color vibrant printing",
        "Various sizes and fold options",
        "Bulk printing discounts available"
      ]
    },
    {
      id: "catalogues",
      title: "Catalogues",
      description: "Comprehensive catalogues showcasing your products and services with premium printing quality.",
      image: "https://www.gayathriprints.com/img/catalogues.jpg",
      highlights: [
        "High-resolution photo printing",
        "Binding and finishing options",
        "Custom page layouts and designs"
      ]
    },
    {
      id: "premium-cards",
      title: "Premium Cards",
      description: "Luxury premium cards with special finishes, textures, and premium materials for elite branding.",
      image: "https://www.meraprint.com/wp-content/uploads/2021/09/business-visiting-cards-1.jpg",
      price: 2,
      minQuantity: 1000,
      highlights: [
        "Luxury finishes and textures",
        "Embossed and debossed options",
        "Premium 350GSM+ cardstock"
      ]
    },
    {
      id: "stickers",
      title: "Stickers",
      description: "Custom stickers and promotional items with unique designs and high-quality printing.",
      image: "https://images.jdmagicbox.com/quickquotes/images_main/printing-services-for-pvc-sticker-2223061475-x26rd0gq.jpg",
      highlights: [
        "Waterproof and weather-resistant",
        "Die-cut and custom shapes",
        "Strong adhesive options available"
      ]
    },
    {
      id: "engravings",
      title: "Engravings",
      description: "Precision engraving services for metal, wood, and other materials with intricate designs.",
      image: "https://www.thewalletstore.in/cdn/shop/products/04_37383af6-1fe0-4c08-9794-7147f5393d13.jpg?v=1737714853&width=1280",
      highlights: [
        "Precision laser engraving",
        "Multiple material options",
        "Custom designs and monograms"
      ]
    },
    {
      id: "uv-cards",
      title: "UV Cards",
      description: "Business cards with UV spot printing for premium finish and eye-catching visual effects.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/8/336967900/ZT/BT/OX/145954645/raised-spot-uv-business-card.jpg",
      price: 4.5,
      minQuantity: 1000,
      highlights: [
        "Raised spot UV effects",
        "Selective gloss finish options",
        "Premium tactile experience"
      ]
    },
    {
      id: "foil-card",
      title: "Foil Card",
      description: "Elegant foil-stamped cards with gold, silver, or colored foil for luxury branding.",
      image: "https://i.etsystatic.com/23185647/r/il/5334b5/2347199913/il_570xN.2347199913_irw4.jpg",
      highlights: [
        "Gold, silver, and colored foil options",
        "Hot foil stamping technique",
        "Luxury metallic finish"
      ]
    },
    {
      id: "texture-sheet",
      title: "Texture Sheet",
      description: "Specialty texture sheets for unique tactile experiences and premium print finishes.",
      image: "https://tiimg.tistatic.com/fp/1/008/431/3mm-thick-rectangular-224-gsm-plain-shinny-embossed-textured-sheet-980.jpg",
      price: 15,
      minQuantity: 10,
      highlights: [
        "Various texture patterns available",
        "Premium GSM options",
        "Custom texture designs"
      ]
    },
    {
      id: "visiting-card-box",
      title: "Visiting Card Box",
      description: "Premium card boxes and holders to present your business cards elegantly and professionally.",
      image: "https://m.media-amazon.com/images/I/31zPuDQ-AeL._AC_UF1000,1000_QL80_.jpg",
      price: 2.7,
      minQuantity: 1000,
      highlights: [
        "Elegant presentation boxes",
        "Custom branding options",
        "Various sizes and finishes"
      ]
    },
    {
      id: "id-card",
      title: "ID Card",
      description: "Secure and professional identification cards with advanced security features for organizations.",
      image: "https://m.media-amazon.com/images/I/51o8Ihu1gZL.jpg",
      price: 30,
      minQuantity: 50,
      highlights: [
        "PVC and Teslin materials",
        "Hologram and security features",
        "Barcode and QR code integration"
      ]
    },
    {
      id: "lanyard",
      title: "Lanyard",
      description: "Custom lanyards for ID cards, badges, and event access with various materials and printing options.",
      image: "https://www.swagify.com/blog/wp-content/uploads/2024/03/A-collection-of-different-colored-lanyards-kept-with-each-other.jpg",
      price: 20,
      minQuantity: 50,
      highlights: [
        "Custom printing and branding",
        "Various width and material options",
        "Bulk order pricing available"
      ]
    },
    {
      id: "tshirt-printing",
      title: "T-Shirt Printing",
      description: "Customized t-shirt printing for events, promotions, and personal use using high-quality fabrics and long-lasting prints.",
      image: "https://phoenixprint.in/wp-content/uploads/2025/01/1931.Ganpati-best-image-printed-t-shirt-for-men.jpg",
      highlights: [
        "Durable fabric and colorfast printing",
        "Custom logo and design options",
        "Available in multiple sizes and colors"
      ]
    },
    {
      id: "mug-printing",
      title: "Mug Printing",
      description: "Personalized mug printing for gifts, branding, or corporate giveaways with premium ceramic finishes.",
      image: "https://printposters.in/public/uploads/canvas-prints/1727083349.jpg",
      highlights: [
        "Full-color sublimation printing",
        "Microwave and dishwasher safe",
        "Ideal for bulk corporate gifting"
      ]
    },
    {
      id: "shopping-bag-printing",
      title: "Shopping Bag Printing",
      description: "Eco-friendly custom printed shopping bags made of non-woven, jute, or cotton material for branding and retail use.",
      image: "https://www.shutterstock.com/shutterstock/photos/1354256210/display_1500/stock-vector-textile-environmentally-friendly-reusable-shopping-bags-with-lettering-say-no-to-plastic-bags-eco-1354256210.jpg",
      highlights: [
        "Reusable and eco-friendly materials",
        "Custom logo and design printing",
        "Available in various sizes and colors"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">  
      {/* Hero Section */}
      <section 
        id="hero-section"
        data-animate-section
        className={`py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white transition-all duration-1000 ${
          visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
            visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '200ms' }}
          >
            Our Printing Services
          </h1>
          <p className={`text-xl opacity-90 max-w-3xl mx-auto transition-all duration-1000 ${
            visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            Comprehensive printing solutions tailored to meet your business and personal needs with exceptional quality and competitive pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section 
        id="services-section"
        data-animate-section
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('services-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group hover:shadow-xl transition-all duration-300 border border-border shadow-lg hover:-translate-y-2 overflow-hidden p-0 ${
                  visibleSections.has('services-section') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="relative -m-px overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Price Badge - Bottom Left */}
                  {service.price && (
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-border/50">
                        <span className="text-sm font-semibold text-foreground">Starting from ₹{service.price}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Min Quantity Badge - Bottom Right */}
                  {service.minQuantity && (
                    <div className="absolute bottom-4 right-4">
                      <div className="bg-background/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg border border-border/50">
                        <span className="text-sm font-semibold text-foreground">Min Qn {service.minQuantity}</span>
                      </div>
                    </div>
                  )}
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors duration-150">{service.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-sm group-hover:text-foreground/90 transition-colors duration-150">{service.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Service Highlights
                      </h4>
                      <ul className="space-y-2.5">
                        {service.highlights.map((highlight, idx) => {
                          const colors = ['bg-blue-500', 'bg-orange-500', 'bg-green-500'];
                          return (
                            <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                              <div className={`w-1.5 h-1.5 ${colors[idx % colors.length]} rounded-full mt-1.5 flex-shrink-0`} />
                              <span>{highlight}</span>
                          </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:shadow-lg transition-all duration-150">
                    <Link href="/contact" className="flex items-center justify-center gap-2 w-full">
                      Get Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                      </Link>
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        id="process-section"
        data-animate-section
        className={`py-20 bg-card transition-all duration-1000 ${
          visibleSections.has('process-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('process-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Simple <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              From concept to delivery, we make the printing process smooth and hassle-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Consultation", desc: "Discuss your requirements and get expert advice on materials and design.", color: "from-blue-500 to-blue-600" },
              { num: "2", title: "Design & Proof", desc: "Create or refine your design and receive a digital proof for approval.", color: "from-orange-500 to-orange-600" },
              { num: "3", title: "Production", desc: "High-quality printing using state-of-the-art equipment and premium materials.", color: "from-green-500 to-green-600" },
              { num: "4", title: "Delivery", desc: "Fast and secure delivery to your doorstep or pickup from our facility.", color: "from-purple-500 to-purple-600" }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-1000 ${
                  visibleSections.has('process-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">{step.num}</span>
              </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/80">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's bring your printing project to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center gap-2">
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm px-8 py-3">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
