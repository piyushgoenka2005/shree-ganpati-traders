"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users, Clock, Target, Heart, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set(['hero-section']))
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set(prev).add(entry.target.id))
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('[data-animate-section]')
    sections.forEach(section => observer.observe(section))

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])
  const teamMembers = [
    {
      name: "Pankaj Goenka",
      position: "Owner",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      bio: "Visionary leader with over 15 years in the printing industry. Started Ganpati Traders with a mission to provide quality printing solutions to businesses of all sizes."
    },
    {
      name: "Kamal Kumar Goenka",
      position: "Manager",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
      bio: "Award-winning designer specializing in brand identity and print design. Leads our creative team to deliver innovative and impactful design solutions."
    },
  ]

  const milestones = [
    {
      year: "2014",
      title: "Company Founded",
      description: "Started as a small printing shop with a vision to serve local businesses."
    },
    {
      year: "2016",
      title: "First Major Contract",
      description: "Secured our first corporate client, marking our entry into commercial printing."
    },
    {
      year: "2018",
      title: "Facility Expansion",
      description: "Moved to a larger facility and invested in state-of-the-art printing equipment."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Launched online services and expanded our digital printing capabilities."
    },
    {
      year: "2022",
      title: "500+ Clients Milestone",
      description: "Reached the milestone of serving over 500 satisfied clients across various industries."
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description: "Introduced eco-friendly printing options and sustainable business practices."
    }
  ]

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We never compromise on quality. Every project receives our full attention to detail and craftsmanship."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description: "We respect deadlines and ensure timely delivery without compromising on quality."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously invest in new technologies and techniques to stay ahead of industry trends."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Honest communication, fair pricing, and ethical business practices guide all our interactions."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "We focus on delivering measurable results that help our clients achieve their business goals."
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
            About Ganpati Traders
          </h1>
          <p className={`text-xl opacity-90 max-w-3xl mx-auto transition-all duration-1000 ${
            visibleSections.has('hero-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
          >
            Your trusted partner in premium printing solutions since 2014. We combine traditional craftsmanship with modern technology to deliver exceptional results.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section 
        id="story-section"
        data-animate-section
        className={`py-20 bg-card transition-all duration-1000 ${
          visibleSections.has('story-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our <span className="text-blue-600">Story</span>
              </h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  Founded in 2014 by Ganesh Patel, Ganpati Traders began as a small printing shop with a big vision: to provide high-quality, affordable printing solutions to businesses and individuals in Mumbai and beyond.
                </p>
                <p>
                  What started as a one-person operation has grown into a full-service printing company with a team of dedicated professionals, state-of-the-art equipment, and a reputation for excellence that spans across industries.
                </p>
                <p>
                  Today, we serve over 500 clients ranging from small startups to large corporations, helping them create impactful print materials that drive their business forward. Our commitment to quality, innovation, and customer satisfaction has made us a trusted name in the printing industry.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  <Link href="/contact" className="flex items-center gap-2">
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-orange-400 rounded-3xl transform rotate-3 opacity-20" />
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop"
                alt="Ganpati Traders Team"
                width={600}
                height={500}
                className="relative z-10 rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section 
        id="mission-section"
        data-animate-section
        className={`py-20 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className={`text-center border-0 shadow-lg transition-all duration-1000 ${
              visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '300ms' }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To provide exceptional printing solutions that help businesses communicate effectively, build their brand, and achieve their goals through high-quality, innovative print materials.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`text-center border-0 shadow-lg transition-all duration-1000 ${
              visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '400ms' }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-foreground/80 leading-relaxed">
                  To be the leading printing company in India, known for our commitment to quality, innovation, and customer satisfaction while contributing to a sustainable future.
                </p>
              </CardContent>
            </Card>
            
            <Card className={`text-center border-0 shadow-lg transition-all duration-1000 ${
              visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '500ms' }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Promise</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We promise to deliver exceptional quality, maintain transparent communication, and build lasting relationships with every client we serve.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
            visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '600ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-blue-600">Core Values</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              These values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 transition-all duration-1000 ${
                  visibleSections.has('mission-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-orange-600">Journey</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              From humble beginnings to industry leadership - here are the key milestones in our growth story.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-orange-500 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge className="mb-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-white border-4 border-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
                  </div>
                  
                  <div className="w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section 
        id="team-section"
        data-animate-section
        className={`py-20 bg-muted/30 transition-all duration-1000 ${
          visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${
            visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to bringing your printing projects to life with expertise and creativity.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {teamMembers.map((member, index) => (
                <Card 
                  key={index} 
                  className={`text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    visibleSections.has('team-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-1">{member.position}</p>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {member.experience}
                  </Badge>
                  <p className="text-foreground/80 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5000+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">99%</div>
              <div className="text-lg opacity-90">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Work <span className="text-orange-600">Together?</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your printing needs and create something amazing together. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Link href="/contact" className="flex items-center gap-2">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
