import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Star, Clock, Shield, Palette } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      id: "visiting-cards",
      title: "Visiting Cards",
      description: "Professional business cards that make lasting first impressions with premium materials and custom designs.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹299",
      features: [
        "Premium 300GSM cardstock",
        "Matte/Glossy finish options",
        "Custom design consultation",
        "Quick 24-hour delivery",
        "Bulk order discounts",
        "Digital proof before printing"
      ],
      specifications: {
        "Standard Size": "3.5\" x 2\"",
        "Material": "300GSM Art Card",
        "Finish": "Matte/Glossy/UV Spot",
        "Colors": "Full Color (CMYK)",
        "Minimum Order": "100 pieces"
      },
      popular: true
    },
    {
      id: "custom-bags",
      title: "Custom Bags",
      description: "Eco-friendly and branded bags perfect for retail, events, and promotional activities.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹15",
      features: [
        "Various material options",
        "Custom size and design",
        "Eco-friendly materials",
        "Bulk order pricing",
        "Brand logo printing",
        "Handle customization"
      ],
      specifications: {
        "Materials": "Paper, Non-woven, Canvas",
        "Sizes": "Custom sizes available",
        "Printing": "Screen/Digital printing",
        "Handle": "Rope/Ribbon/Die-cut",
        "Minimum Order": "500 pieces"
      }
    },
    {
      id: "id-cards",
      title: "ID Cards",
      description: "Secure and professional identification cards with advanced security features for organizations.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹25",
      features: [
        "PVC card material",
        "Security hologram options",
        "Magnetic stripe available",
        "Photo quality printing",
        "Barcode/QR code integration",
        "Lanyard and accessories"
      ],
      specifications: {
        "Material": "PVC/Teslin",
        "Size": "CR80 (85.6 x 53.98mm)",
        "Thickness": "0.76mm",
        "Security": "Hologram/UV printing",
        "Minimum Order": "50 pieces"
      }
    },
    {
      id: "brochures",
      title: "Brochures & Flyers",
      description: "Eye-catching marketing materials that effectively communicate your message and promote your business.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹5",
      features: [
        "Various fold options",
        "High-quality paper",
        "Full-color printing",
        "Custom sizes available",
        "Design assistance",
        "Fast turnaround"
      ],
      specifications: {
        "Paper": "130-300GSM",
        "Sizes": "A4, A5, DL, Custom",
        "Folds": "Bi-fold, Tri-fold, Z-fold",
        "Finish": "Matte/Glossy",
        "Minimum Order": "100 pieces"
      }
    },
    {
      id: "banners",
      title: "Banners & Signage",
      description: "Large format printing for outdoor and indoor advertising, events, and promotional displays.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹50/sq ft",
      features: [
        "Weather-resistant materials",
        "Various sizes available",
        "Indoor/outdoor options",
        "Grommets and finishing",
        "High-resolution printing",
        "Installation support"
      ],
      specifications: {
        "Materials": "Vinyl, Flex, Canvas",
        "Resolution": "720-1440 DPI",
        "Sizes": "Custom sizes",
        "Finishing": "Hemming, Grommets",
        "Minimum Order": "1 piece"
      }
    },
    {
      id: "stickers",
      title: "Stickers & Labels",
      description: "Custom stickers and labels for branding, packaging, and promotional purposes with various materials.",
      image: "/placeholder.svg?height=300&width=400",
      price: "Starting from ₹2",
      features: [
        "Waterproof options",
        "Various shapes and sizes",
        "Strong adhesive",
        "UV-resistant inks",
        "Die-cut options",
        "Bulk pricing available"
      ],
      specifications: {
        "Materials": "Vinyl, Paper, Transparent",
        "Adhesive": "Permanent/Removable",
        "Finish": "Matte/Glossy/Transparent",
        "Cutting": "Kiss-cut/Die-cut",
        "Minimum Order": "100 pieces"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Printing Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive printing solutions tailored to meet your business and personal needs with exceptional quality and competitive pricing.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-600 hover:bg-orange-700">
                      <Star className="w-3 h-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1">
                        <span className="text-lg font-bold text-foreground">{service.price}</span>
                      </div>
                    </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-foreground/80 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-orange-500" />
                        Specifications
                      </h4>
                      <ul className="space-y-2">
                        {Object.entries(service.specifications).slice(0, 3).map(([key, value], idx) => (
                          <li key={idx} className="text-sm">
                            <span className="text-muted-foreground">{key}:</span>
                            <span className="text-foreground/80 ml-1">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Link href="/contact" className="flex items-center gap-2">
                        Get Quote <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950">
                      View Samples
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Simple <span className="text-blue-600">Process</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              From concept to delivery, we make the printing process smooth and hassle-free.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-foreground/80">Discuss your requirements and get expert advice on materials and design.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Design & Proof</h3>
              <p className="text-foreground/80">Create or refine your design and receive a digital proof for approval.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Production</h3>
              <p className="text-foreground/80">High-quality printing using state-of-the-art equipment and premium materials.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Delivery</h3>
              <p className="text-foreground/80">Fast and secure delivery to your doorstep or pickup from our facility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Turnaround</h3>
              <p className="text-foreground/80">Most orders completed within 24-48 hours without compromising quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality Guarantee</h3>
              <p className="text-foreground/80">100% satisfaction guarantee with premium materials and expert craftsmanship.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Custom Design</h3>
              <p className="text-foreground/80">Professional design services to create unique and impactful print materials.</p>
            </div>
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
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
