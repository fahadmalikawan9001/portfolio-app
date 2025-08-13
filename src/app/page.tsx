"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, ExternalLink, Github, Mail, MapPin, Phone, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResumePage() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      image: "/placeholder.svg?height=200&width=400&text=E-Commerce+Platform",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
      liveUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/yourusername/task-manager",
      image: "/placeholder.svg?height=200&width=400&text=Task+Manager",
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with location-based forecasts, charts, and weather alerts using external APIs.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
      liveUrl: "https://weather-dashboard-demo.netlify.app",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      image: "/placeholder.svg?height=200&width=400&text=Weather+Dashboard",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "https://yourportfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/portfolio",
      image: "/placeholder.svg?height=200&width=400&text=Portfolio+Website",
    },
  ]

  const skills = {
    Frontend: ["React", "JavaScript", "HTML5", "CSS"],
    Backend: ["Node.js", "Python", "FAST APIs"],
    "Tools & Others": ["Git", "Vercel", "Figma"],
  }

  const experience = [
    {
      title: "Frontend Developer",
      company: "Nutech Innovation Center NIC",
      period: "2024 - 2025",
      description:
        "Led development of responsive web applications using React and Next.js. Collaborated with design teams to implement pixel-perfect UIs and improved application performance by 40%.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <User className="h-6 w-6" />
              <span className="font-bold text-xl">Malik Fahad Hassan Awan</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=150&width=150&text=Profile"
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
              />
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Fahad Hassan</h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6">Full Stack Developer & UI/UX Enthusiast</p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Passionate developer with 1+ years of experience creating modern web applications. I love turning
                complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Rawalpindi, Islamabad, PK.
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                fahadhassan2305@hotmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +92 318 3648613
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <CardDescription className="text-lg font-medium text-primary">{job.company}</CardDescription>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                        <CalendarDays className="h-4 w-4" />
                        {job.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <Card key={category}>
                  <CardHeader>
                    <CardTitle className="text-xl">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your
              ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="mailto:fahadhassan2305@hotmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="https://github.com/fahadmalikawan9001" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Fahad Hassan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
