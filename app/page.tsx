import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const services = [
    {
      title: "Visiting Cards",
      description: "Professional business cards that make lasting impressions",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Premium Materials", "Custom Designs", "Quick Turnaround"]
    },
    {
      title: "Custom Bags",
      description: "Eco-friendly and branded bags for all occasions",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Various Materials", "Bulk Orders", "Brand Customization"]
    },
    {
      title: "ID Cards",
      description: "Secure and professional identification cards",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Security Features", "Durable Materials", "Fast Processing"]
    },
    {
      title: "Custom Printing",
      description: "Specialized printing solutions for unique requirements",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Flexible Options", "Quality Assured", "Expert Consultation"]
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-orange-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Premium <span className="text-blue-600">Printing</span> Solutions for Your <span className="text-orange-600">Business</span>
                </h1>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  From visiting cards to custom bags, we deliver exceptional printing services that elevate your brand and make lasting impressions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link href="/services" className="flex items-center gap-2">
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3">
                  <Link href="/contact">Get Quote</Link>
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl transform rotate-3 opacity-20" />
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Ganpati Traders Printing Services"
                width={500}
                height={600}
                className="relative z-10 rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-blue-600">Printing</span> Services
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              We offer a comprehensive range of high-quality printing services to meet all your business and personal needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/80 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {feature}
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Ganpati Traders?</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="opacity-90">Premium materials and state-of-the-art printing technology ensure superior quality in every project.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="opacity-90">Quick processing and delivery without compromising on quality. Most orders ready within 24-48 hours.</p>
            </div>
            <div className="text-center">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
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
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>info@ganpatitraders.com</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
