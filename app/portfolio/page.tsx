import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Eye, Download } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Tech Startup Business Cards",
      category: "Visiting Cards",
      client: "InnovateTech Solutions",
      image: "/placeholder.svg?height=400&width=600",
      description: "Premium matte finish business cards with embossed logo and modern typography for a tech startup.",
      tags: ["Premium", "Embossed", "Modern"],
      featured: true
    },
    {
      id: 2,
      title: "Eco-Friendly Shopping Bags",
      category: "Custom Bags",
      client: "Green Earth Store",
      image: "/placeholder.svg?height=400&width=600",
      description: "Sustainable paper bags with custom branding for an eco-conscious retail store.",
      tags: ["Eco-Friendly", "Custom Design", "Retail"]
    },
    {
      id: 3,
      title: "Corporate ID Cards",
      category: "ID Cards",
      client: "Global Enterprises Ltd",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional employee ID cards with security features and magnetic stripe for access control.",
      tags: ["Security", "Corporate", "Professional"]
    },
    {
      id: 4,
      title: "Restaurant Menu Brochures",
      category: "Brochures",
      client: "Spice Garden Restaurant",
      image: "/placeholder.svg?height=400&width=600",
      description: "Tri-fold menu brochures with high-quality food photography and elegant design.",
      tags: ["Food & Beverage", "Photography", "Elegant"]
    },
    {
      id: 5,
      title: "Event Banner Display",
      category: "Banners",
      client: "Mumbai Music Festival",
      image: "/placeholder.svg?height=400&width=600",
      description: "Large format banners for outdoor music festival with weather-resistant materials.",
      tags: ["Large Format", "Weather-Resistant", "Events"],
      featured: true
    },
    {
      id: 6,
      title: "Product Label Stickers",
      category: "Stickers",
      client: "Artisan Cosmetics",
      image: "/placeholder.svg?height=400&width=600",
      description: "Waterproof product labels with gold foil accents for premium cosmetic products.",
      tags: ["Waterproof", "Gold Foil", "Premium"]
    },
    {
      id: 7,
      title: "Wedding Invitation Suite",
      category: "Invitations",
      client: "Sharma Family",
      image: "/placeholder.svg?height=400&width=600",
      description: "Luxury wedding invitation cards with traditional motifs and gold embossing.",
      tags: ["Wedding", "Luxury", "Traditional"]
    },
    {
      id: 8,
      title: "Real Estate Flyers",
      category: "Flyers",
      client: "Prime Properties",
      image: "/placeholder.svg?height=400&width=600",
      description: "Professional marketing flyers for property listings with high-quality photography.",
      tags: ["Real Estate", "Marketing", "Professional"]
    },
    {
      id: 9,
      title: "Cafe Loyalty Cards",
      category: "Loyalty Cards",
      client: "Coffee Corner Cafe",
      image: "/placeholder.svg?height=400&width=600",
      description: "Custom loyalty cards with punch-hole design for a local coffee shop.",
      tags: ["Loyalty Program", "Custom", "Food & Beverage"],
      featured: true
    }
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "InnovateTech Solutions",
      rating: 5,
      text: "The business cards exceeded our expectations. The quality is outstanding and the design perfectly represents our brand.",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      name: "Priya Sharma",
      company: "Green Earth Store",
      rating: 5,
      text: "Fantastic work on our eco-friendly bags. They're durable, beautiful, and align perfectly with our sustainability values.",
      image: "/placeholder.svg?height=60&width=60"
    },
    {
      name: "Amit Patel",
      company: "Global Enterprises Ltd",
      rating: 5,
      text: "Professional service and high-quality ID cards. The security features work perfectly and the design is clean and modern.",
      image: "/placeholder.svg?height=60&width=60"
    }
  ]

  const categories = ["All", "Visiting Cards", "Custom Bags", "ID Cards", "Brochures", "Banners", "Stickers"]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our collection of successful printing projects and see how we've helped businesses and individuals achieve their goals.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-foreground/70">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
              <div className="text-foreground/70">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
              <div className="text-foreground/70">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-foreground/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-blue-600 hover:bg-blue-700" : "border-border hover:border-blue-600 hover:text-blue-600"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.featured && (
                    <Badge className="absolute top-4 left-4 bg-orange-600 hover:bg-orange-700">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-blue-600 mb-2">{item.client}</p>
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-blue-600">Clients</span> Say
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about our work.
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
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life. Contact us today for a free consultation and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Link href="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
