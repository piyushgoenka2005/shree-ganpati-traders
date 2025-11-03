"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, FileText, Calculator, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero-section', 'cta-section']))
  
  useEffect(() => {
    // Check initial visibility of sections on page load
    const checkInitialVisibility = () => {
      const sections = document.querySelectorAll('[data-animate-section]')
      sections.forEach((section) => {
        if (!section.id) return
        
        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const sectionHeight = rect.height
        
        // Calculate visible percentage
        if (sectionHeight === 0) return // Skip if section has no height
        
        const visibleTop = Math.max(0, -rect.top)
        const visibleBottom = Math.min(sectionHeight, viewportHeight - rect.top)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visiblePercentage = visibleHeight / sectionHeight
        
        // If 20-30% or more is visible, show the section immediately
        if (visiblePercentage >= 0.2) {
          setVisibleSections(prev => new Set(prev).add(section.id))
        }
      })
    }

    // Check immediately and after a short delay to ensure DOM is ready
    checkInitialVisibility()
    const initialCheckTimer = setTimeout(checkInitialVisibility, 100)

    // Set up Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: [0.2, 0.3], // Trigger when 20% or 30% of section is visible
      rootMargin: '0px 0px -10% 0px' // Trigger earlier, even on mobile
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
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "",
    budget: "",
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")

  const WEB3FORMS_ACCESS_KEY = "b47a7fae-c473-4550-80df-aa8294c56c9f"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSubmitMessage("")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission - ${formData.service || "General Inquiry"}`,
          from_name: formData.name,
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          urgency: formData.urgency,
          budget: formData.budget,
          message: `Service Required: ${formData.service || "Not specified"}
Project Urgency: ${formData.urgency || "Not specified"}
Estimated Budget: ${formData.budget || "Not specified"}
Newsletter Subscription: ${formData.newsletter ? "Yes" : "No"}

Project Details:
${formData.message}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setSubmitMessage("Thank you for your inquiry! We'll get back to you within 24 hours.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
          urgency: "",
          budget: "",
          newsletter: false
        })
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
          setSubmitMessage("")
        }, 5000)
      } else {
        setSubmitStatus("error")
        setSubmitMessage("Something went wrong. Please try again or contact us directly.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setSubmitMessage("Something went wrong. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const services = [
    "Visiting Cards",
    "Custom Bags",
    "ID Cards",
    "Brochures & Flyers",
    "Banners & Signage",
    "Stickers & Labels",
    "Wedding Invitations",
    "Custom Printing",
    "Other"
  ]

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 81002 37440", "+91 93308 97899"],
      color: "text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@ganpatitraders.com"],
      color: "text-orange-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["19, Brabourne Road", "Kolkata, West Bengal 700001"],
      color: "text-green-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Sun: 12:00 PM - 7:00 PM"],
      color: "text-purple-600"
    }
  ]

  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer: "Most orders are completed within 24-48 hours. Rush orders can be accommodated with additional charges."
    },
    {
      question: "Do you offer design services?",
      answer: "Yes, we have an in-house design team that can create custom designs for all your printing needs."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept PDF, AI, PSD, JPG, PNG, and other common design file formats. We can also work with your existing brand guidelines."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes, we offer competitive pricing for bulk orders. Contact us with your requirements for a custom quote."
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
            Get In Touch
          </h1>
          <p className={`text-xl opacity-90 max-w-3xl mx-auto transition-all duration-1000 ${
            visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            Ready to start your printing project? We're here to help you every step of the way. Contact us for a free consultation and quote.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section 
        id="contact-section"
        data-animate-section
        className={`py-20 transition-all duration-1000 ${
          visibleSections.has('contact-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className={`lg:col-span-2 transition-all duration-1000 ${
              visibleSections.has('contact-section') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '300ms' }}
            >
              <Card className="border border-border rounded-xl shadow-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 text-blue-600" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-foreground/70 mt-2">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-foreground">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your@email.com"
                          className="w-full"
                          required
                        />
                      </div>
                    </div>

                    {/* Phone and Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+91 81002 37440"
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-foreground">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          placeholder="Your company name"
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Service and Urgency */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-medium text-foreground">
                          Service Required <span className="text-red-500">*</span>
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)} required>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="urgency" className="text-sm font-medium text-foreground">
                          Project Urgency
                        </Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard (3-5 days)</SelectItem>
                            <SelectItem value="urgent">Urgent (1-2 days)</SelectItem>
                            <SelectItem value="rush">Rush (Same day)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-foreground">
                        Project Details <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please describe your printing requirements, quantities, specifications, and any other relevant details..."
                        rows={5}
                        className="w-full resize-y"
                        required
                      />
                    </div>

                    {/* Submit Status Messages */}
                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-green-800 dark:text-green-200">{submitMessage}</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-red-800 dark:text-red-200">{submitMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-6 py-6 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className={`space-y-6 transition-all duration-1000 ${
              visibleSections.has('contact-section') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              {/* Contact Details */}
              <Card className={`border border-border rounded-xl shadow-lg transition-all duration-1000 ${
                visibleSections.has('contact-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '500ms' }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`${info.color} mt-1`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground/80 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className={`border border-border rounded-xl shadow-lg transition-all duration-1000 ${
                visibleSections.has('contact-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start bg-green-600 hover:bg-green-700 text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: +91 81002 37440
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                    <FileText className="w-4 h-4 mr-2" />
                    <Link href="/services">View Services & Pricing</Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950">
                    <Calculator className="w-4 h-4 mr-2" />
                    Request Custom Quote
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section 
        id="location-section"
        data-animate-section
        className={`py-20 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has('location-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('location-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Find Us <span className="text-blue-600">Here</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Visit our location or get directions to our printing facility in Kolkata
            </p>
          </div>

          <div className={`transition-all duration-1000 ${
            visibleSections.has('location-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            <Card className="border border-border rounded-xl shadow-xl overflow-hidden p-0 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ paddingBottom: '40%', height: 0 }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117826.87202161834!2d88.2640868054121!3d22.65044209063457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bab9ceab79%3A0xc592a6562680b624!2sShree%20Ganpati%20Traders!5e0!3m2!1sen!2sin!4v1762158341891!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      border: 0,
                      borderRadius: '0.75rem'
                    }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-xl"
                  />
                </div>
                
                <div className="p-6 bg-card">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        Our Location
                      </h3>
                      <p className="text-foreground/80">
                        19, Brabourne Road, Kolkata, West Bengal 700001
                      </p>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/Shree+Ganpati+Traders/@22.6504421,88.2640868,12z/data=!4m6!3m5!1s0x3a0277bab9ceab79:0xc592a6562680b624!8m2!3d22.6504421!4d88.2640868!16s%2Fg%2F11v9qw36q1?entry=ttu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq-section"
        data-animate-section
        className={`py-20 bg-card transition-all duration-1000 ${
          visibleSections.has('faq-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('faq-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Find answers to common questions about our printing services and processes.
            </p>
          </div>

          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
            visibleSections.has('faq-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-card shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-foreground/80 mb-4">Still have questions?</p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat with Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        id="cta-section"
        data-animate-section
        className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white relative z-10"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-1000 ${
            visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            Ready to Start Your Project?
          </h2>
          <p className={`text-xl opacity-90 mb-8 max-w-2xl mx-auto transition-all duration-1000 ${
            visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            Don't wait! Contact us today and let's bring your printing vision to life with our expert team and premium services.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 ${
            visibleSections.has('cta-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '500ms' }}
          >
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
