"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Database,
  Brain,
  Server,
  Linkedin,
  Menu,
  X,
  GraduationCap,
  Calendar,
  Globe,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
    setActiveSection(sectionId)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "education", "skills", "projects", "certificates", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementTop = element.offsetTop - 50
          const elementBottom = elementTop + element.offsetHeight

          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl">Hatim Alouani</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "hero" ? "text-primary font-semibold" : ""
                }`}
              >
                Home
                {activeSection === "hero" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("education")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "education" ? "text-primary font-semibold" : ""
                }`}
              >
                Education
                {activeSection === "education" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "skills" ? "text-primary font-semibold" : ""
                }`}
              >
                Skills
                {activeSection === "skills" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "projects" ? "text-primary font-semibold" : ""
                }`}
              >
                Projects
                {activeSection === "projects" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("certificates")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "certificates" ? "text-primary font-semibold" : ""
                }`}
              >
                Certificates
                {activeSection === "certificates" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 transform hover:scale-105 ${
                  activeSection === "contact" ? "text-primary font-semibold" : ""
                }`}
              >
                Contact
                {activeSection === "contact" && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full animate-pulse"></div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden transform hover:scale-110 transition-transform duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "hero" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("education")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "education" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "skills" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "projects" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("certificates")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "certificates" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Certificates
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`text-left text-muted-foreground hover:text-foreground transition-all duration-200 hover:translate-x-2 ${
                    activeSection === "contact" ? "text-primary font-semibold" : ""
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black pt-16">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            {/* Profile Photo */}
            <div className="mb-8">
              <img
                src="/images/hatim-profile-new.png"
                alt="Alouani Hatim"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl hover:scale-105 transition-all duration-500 animate-glow"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance animate-fade-in-up">
              Alouani Hatim
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4 animate-fade-in-up">
              AI & Software Engineering Student
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6 text-pretty max-w-3xl mx-auto animate-fade-in-up">
              AI and Software Engineering student at 1337 Coding School | 42 Network, passionate about building scalable
              systems and intelligent solutions, with a strong focus on Machine Learning, Deep Learning, NLP, and Big
              Data, complemented by hands-on web development knowledge.
            </p>

            {/* Age and Location */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground animate-slide-in-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span>22 years old</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nouaceur, Casablanca</span>
              </div>
            </div>

            {/* Languages */}
            <div className="flex justify-center gap-2 mb-8 animate-slide-in-right">
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors border border-primary/20">
                English
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors border border-primary/20">
                French
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors border border-primary/20">
                Arabic
              </Badge>
            </div>

            <div className="mb-8">{/* Empty space as requested */}</div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button
                size="lg"
                className="text-lg px-8 hover:scale-105 transition-all duration-300 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/10"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/Hatim_Alouani_CV.pdf"
                  link.download = "Hatim_Alouani_CV.pdf"
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/hatim-alouani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance scroll-reveal">
              <GraduationCap className="w-10 h-10 mx-auto mb-4 text-primary" />
              Education Journey
            </h2>

            <div className="space-y-8">
              {/* 1337 Coding School */}
              <div className="scroll-reveal">
                <Card className="gradient-frame hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                          <Code className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">1337 Coding School – Common Core</h3>
                          <p className="text-lg font-semibold text-white mb-2">Software Engineering</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>2023 – Present</span>
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="w-fit mt-4 lg:mt-0 border-primary/30 text-primary bg-primary/5"
                      >
                        In Progress
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Intensive software engineering program focusing on system programming, algorithms, and full-stack
                      development. Part of the prestigious 42 Network with peer-to-peer learning methodology and
                      project-based curriculum.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-primary/10 text-white border-primary/20">
                        C Programming
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-white border-primary/20">
                        System Programming
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/10 text-white border-primary/20">
                        42 Network
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bachelor's Degree */}
              <div className="scroll-reveal">
                <Card className="gradient-frame hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors">
                          <Brain className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">Bachelor's in Information Systems & AI</h3>
                          <p className="text-lg font-semibold text-white mb-2">
                            Computer Science & Artificial Intelligence
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>2021 – 2025</span>
                          </div>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit mt-4 lg:mt-0 border-accent/30 text-accent bg-accent/5">
                        Completed
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Specialized in Computer Science, Artificial Intelligence, Big Data, and Advanced Data Analytics
                      with comprehensive theoretical and practical knowledge in machine learning and data science.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Artificial Intelligence
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Big Data
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Data Analytics
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Mathematics
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Physics
                      </Badge>
                      <Badge variant="secondary" className="bg-accent/10 text-white border-accent/20">
                        Scientific Method
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance scroll-reveal">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-primary/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Code className="w-8 h-8 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">Programming Languages</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        C
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        C++
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Python
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        JavaScript
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        TypeScript
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Shell Scripting
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Web Development */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-cyan-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Globe className="w-8 h-8 mr-3 text-cyan-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">Web Development</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        WordPress
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        HTML
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        CSS
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        React
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Next.js
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Node.js
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Flask
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI & Machine Learning */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-blue-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Brain className="w-8 h-8 mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        TensorFlow
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Scikit-learn
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Pandas
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Matplotlib
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* NLP & Text Processing */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-purple-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Brain className="w-8 h-8 mr-3 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">NLP & Text Processing</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        SpaCy
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        NLTK
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        TF-IDF
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Sentiment Analysis
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Big Data & Analytics */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-orange-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Server className="w-8 h-8 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">Big Data & Analytics</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Spark
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Hadoop
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Kafka
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        PySpark
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Power BI
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Databases */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-gray-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Database className="w-8 h-8 mr-3 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">Databases</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        PostgreSQL
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        MySQL
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Redis
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Cassandra
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        HBase
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        MariaDB
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* DevOps & Tools */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-red-500/50 gradient-frame min-h-[200px] flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Server className="w-8 h-8 mr-3 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-lg font-semibold">DevOps & Tools</h3>
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Git
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Docker
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Nginx
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Grafana
                      </Badge>
                      <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default bg-secondary text-secondary-foreground min-w-[80px] text-center">
                        Prometheus
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Add more skills as needed */}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance scroll-reveal">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Products Recommendation System */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/amazon-recommendation.jpeg"
                      alt="Products Recommendation System"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Products Recommendation System</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      An Amazon-like recommendation system combining TensorFlow, PostgreSQL, web scraping, and fully
                      containerized with Docker and Python for intelligent product suggestions.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>TensorFlow</Badge>
                      <Badge>PostgreSQL</Badge>
                      <Badge>Python</Badge>
                      <Badge>Docker</Badge>
                      <Badge>Web Scraping</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Products-Recommendation-System"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Freelance WordPress Project */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/annia.jpeg"
                      alt="Annialux Website"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Annialux Website</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Developed a professional WordPress website for a luxury client, featuring custom design,
                      responsive layout, and optimized performance for business growth.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>WordPress</Badge>
                      <Badge>PHP</Badge>
                      <Badge>Custom Design</Badge>
                      <Badge>Freelance</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://annialux.com" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Minishell */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/minishell.webp"
                      alt="Minishell Project"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Minishell</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Built a Unix-like shell in C for process control and command execution, implementing core shell
                      functionalities and system programming concepts.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>C</Badge>
                      <Badge>Unix</Badge>
                      <Badge>System Programming</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Minishell-42cursus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Inception */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/docker.webp"
                      alt="Inception Docker Project"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Inception</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Designed and deployed a secure and scalable web infrastructure using Docker, with NGINX,
                      WordPress, and MariaDB in a containerized environment.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Docker</Badge>
                      <Badge>NGINX</Badge>
                      <Badge>WordPress</Badge>
                      <Badge>MariaDB</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Inception-42Cursus"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Courses Recommendation System */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/feature-courses-1.webp"
                      alt="Courses Recommendation System"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Courses Recommendation System</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Implemented a personalized course recommendation system using Big Data tools, Hadoop, PySpark with
                      ALS algorithm, Cassandra, and Python for scalable data processing.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Python</Badge>
                      <Badge>Hadoop</Badge>
                      <Badge>PySpark</Badge>
                      <Badge>Cassandra</Badge>
                      <Badge>Flask</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Courses-Recommendation-System"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* IRC System */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/irc.webp"
                      alt="Internet Relay Chat System"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Internet Relay Chat System</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Developed a real-time chat application in C++ inspired by IRC, supporting multiple users,
                      channels, and message broadcasting with network programming.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>C++</Badge>
                      <Badge>Network Programming</Badge>
                      <Badge>Real-time</Badge>
                      <Badge>IRC Protocol</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/hatim-alouani/IRC-42Cursus" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Data Warehouse Management */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/data-warehouse.webp"
                      alt="Data Warehouse Management"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Data Warehouse Management</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Implemented a Data Warehouse Management System using Big Data technologies for retail chain
                      analytics, utilizing Hadoop, Cassandra, and Python for efficient data processing and storage.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Python</Badge>
                      <Badge>Hadoop</Badge>
                      <Badge>Cassandra</Badge>
                      <Badge>Big Data</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Data-Warehouse-Management"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Sentiment Analysis Model */}
              <div className="scroll-reveal">
                <Card className="group hover:shadow-xl transition-all duration-300 gradient-frame overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/sentiment.webp"
                      alt="Sentiment Analysis Model"
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">COVID-19 Vaccine Sentiment Analysis</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">
                      Developed an NLP model using Python to analyze Twitter sentiment about COVID-19 vaccines using
                      NLTK, TF-IDF Vectorizer, and Random Forest Classifier with comprehensive evaluation metrics.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge>Python</Badge>
                      <Badge>NLP</Badge>
                      <Badge>NLTK</Badge>
                      <Badge>Random Forest</Badge>
                      <Badge>Sentiment Analysis</Badge>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://github.com/hatim-alouani/Sentiment-Analysis-Model"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-20 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance scroll-reveal">
              Certificates
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto scroll-reveal">
              <Card className="group hover:shadow-lg transition-shadow gradient-frame">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="/images/oracle-certificate.png"
                      alt="Oracle Certified Foundations Associate Certificate"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate
                  </h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Professional certification demonstrating expertise in Oracle Cloud Infrastructure AI foundations,
                    covering machine learning concepts, AI services, and cloud-based AI solutions.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=6317F4DD5AB78773B277883B633D99CD0DFCEA311ED1B17CCE1B1D3031ADF118"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow gradient-frame">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src="/images/rosetta-stone-certificate.jpeg"
                      alt="Rosetta Stone English Certificate B2 Level"
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Rosetta Stone English Certificate (2025)</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    B2 level English proficiency certification achieved through Rosetta Stone's comprehensive language
                    learning program. Completed during my education at FP Khouribga, demonstrating advanced English
                    communication skills.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Get In Touch</h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25"
                asChild
              >
                <a href="mailto:alouanihatim01@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/hatim-alouani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  @hatim-alouani
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/hatim-alouani-527617304" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300 border-primary/30 hover:border-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://profile.indeed.com/p/alouanih-rtd5hn4" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-5 h-5 mr-2" />
                  Indeed
                </a>
              </Button>
            </div>

            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+212615359651</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>alouanihatim01@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-primary/20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Alouani Hatim</p>
        </div>
      </footer>
    </div>
  )
}
