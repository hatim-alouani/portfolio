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
    const handleScroll = () => {
      const sections = ["hero", "education", "skills", "projects", "certificates", "contact"]
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const elementTop = element.offsetTop - 50 // Adjust offset as needed
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
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
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

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-muted/50 to-background pt-16"
      >
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Profile Photo */}
            <div className="mb-8">
              <img
                src="/images/hatim-profile.png"
                alt="Alouani Hatim"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Alouani Hatim
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-primary font-semibold mb-4">AI & Software Engineering Student</p>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-6 text-pretty max-w-3xl mx-auto">
              AI and Software Engineering student at 1337 Coding School | 42 Network, passionate about building scalable
              systems and intelligent solutions, with a strong focus on Machine Learning, Deep Learning, NLP, and Big
              Data, complemented by hands-on web development knowledge.
            </p>

            {/* Age and Location */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>22 years old</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Nouaceur, Casablanca</span>
              </div>
            </div>

            {/* Languages */}
            <div className="flex justify-center gap-2 mb-8">
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                English
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                French
              </Badge>
              <Badge variant="secondary" className="hover:bg-primary/20 transition-colors">
                Arabic
              </Badge>
            </div>

            <div className="mb-8">{/* Empty space in green as requested */}</div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 hover:scale-105 transition-transform"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 bg-transparent hover:scale-105 transition-transform"
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

      {/* About & Education Section */}
      <section id="education" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Education</h2>

            <div className="space-y-6">
              {/* 1337 Coding School */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">1337 Coding School – Common Core</h3>
                      <p className="text-primary font-medium">Software Engineering Program</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      2023–Present
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Intensive software engineering program focusing on system programming, algorithms, and full-stack
                    development. Part of the prestigious 42 Network with peer-to-peer learning methodology.
                  </p>
                </CardContent>
              </Card>

              {/* Bachelor's Degree */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Bachelor's in Information Systems & AI</h3>
                      <p className="text-primary font-medium">Computer Science & Artificial Intelligence</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      2021–2025
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Specialized in Computer Science, Artificial Intelligence, Big Data, and Advanced Data Analytics with
                    comprehensive theoretical and practical knowledge.
                  </p>
                </CardContent>
              </Card>

              {/* Baccalaureate */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Baccalaureate in Physical Sciences</h3>
                      <p className="text-primary font-medium">Scientific Track</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      2020–2021
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    Strong foundation in mathematics, physics, and scientific methodology, providing the analytical
                    skills essential for computer science and engineering.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Technical Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Programming Languages */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-8 h-8 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">Programming Languages</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default">C</Badge>
                    <Badge className="hover:bg-primary/20 transition-colors duration-200 cursor-default">C++</Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      Shell Scripting
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      SQL
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* AI & Machine Learning */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-blue-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                    >
                      TensorFlow
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                    >
                      Scikit-learn
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                    >
                      Pandas
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200 cursor-default"
                    >
                      Matplotlib
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* NLP & Text Processing */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-purple-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Brain className="w-8 h-8 mr-3 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">NLP & Text Processing</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-default"
                    >
                      SpaCy
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-default"
                    >
                      NLTK
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-default"
                    >
                      TF-IDF
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200 cursor-default"
                    >
                      Sentiment Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Big Data & Analytics */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-orange-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Server className="w-8 h-8 mr-3 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">Big Data & Analytics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-default"
                    >
                      Spark
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-default"
                    >
                      Hadoop
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-default"
                    >
                      Kafka
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200 cursor-default"
                    >
                      PySpark
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-green-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Database className="w-8 h-8 mr-3 text-green-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">Databases</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      PostgreSQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      MySQL
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      Redis
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      Cassandra
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      HBase
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="hover:bg-green-100 hover:text-green-700 transition-colors duration-200 cursor-default"
                    >
                      MariaDB
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* DevOps & Tools */}
              <Card className="group hover:shadow-xl hover:scale-105 transition-all duration-300 border-l-4 border-l-red-500/50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Server className="w-8 h-8 mr-3 text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-semibold">DevOps & Tools</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Nginx</Badge>
                    <Badge>Grafana</Badge>
                    <Badge>Prometheus</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Featured Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Freelance WordPress Project */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Annialux Website</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Developed a professional WordPress website for a luxury client, featuring custom design, responsive
                    layout, and optimized performance for business growth.
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

              {/* Minishell */}
              <Card className="group hover:shadow-lg transition-shadow">
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

              {/* Inception */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Inception</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Designed and deployed a secure and scalable web infrastructure using Docker, with NGINX, WordPress,
                    and MariaDB in a containerized environment.
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

              {/* Product Recommendation Engine */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Courses Recommendation System</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Implemented a personalized course recommendation system using Big Data tools, Hadoop, PySpark with
                    ALS algorithm, and Cassandra for scalable data processing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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

              {/* IRC System */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Internet Relay Chat System</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Developed a real-time chat application in C++ inspired by IRC, supporting multiple users, channels,
                    and message broadcasting with network programming.
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

              {/* Data Warehouse Management */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Data Warehouse Management</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Implemented a Data Warehouse Management System using Big Data technologies for retail chain
                    analytics, utilizing Hadoop, Cassandra, and Python for efficient data processing and storage.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge>Hadoop</Badge>
                    <Badge>Cassandra</Badge>
                    <Badge>Python</Badge>
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

              {/* Sentiment Analysis Model */}
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">COVID-19 Vaccine Sentiment Analysis</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Developed an NLP model to analyze Twitter sentiment about COVID-19 vaccines using NLTK, TF-IDF
                    Vectorizer, and Random Forest Classifier with comprehensive evaluation metrics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
      </section>

      {/* Certificates */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">Certificates</h2>

            {/* Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate */}
            <div className="max-w-2xl mx-auto">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-balance">Get In Touch</h2>

            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="text-lg px-8" asChild>
                <a href="mailto:alouanihatim01@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="https://github.com/hatim-alouani" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  @hatim-alouani
                </a>
              </Button>
              {/* LinkedIn button */}
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" asChild>
                <a href="https://www.linkedin.com/in/hatim-alouani-527617304" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
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

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Alouani Hatim</p>
        </div>
      </footer>
    </div>
  )
}
