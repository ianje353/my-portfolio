import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Download, Code, Palette, Smartphone, Figma } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <div className="mr-4 flex">
              <Link href="/" className="mr-6 flex items-center space-x-2">
                <span className="font-bold text-xl">Portfolio</span>
              </Link>
            </div>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
            <div className="ml-auto flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link href="/resume.pdf" download="Ian_Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section - Centered Single Column */}
        <section className="container px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  priority
                  className="relative rounded-full border-4 border-background shadow-2xl w-80 h-80 object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Ian Je Nierre
                </span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">UI/UX Designer</p>
            </div>

            <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto">
              I create beautiful, functional, and user-centered digital experiences. Passionate about clean code,
              innovative design, and solving complex problems.
            </p>

            <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center">
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4 justify-center">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:ianjenierre@example.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container px-4 py-24 bg-muted/50">
          <div className="max-w-3xl mx-auto text-center space-y-4 px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="text-muted-foreground md:text-lg">
              I'm a fresh IT graduate with hands-on experience in front-end development and UI/UX design. I enjoy
              building clean, responsive user interfaces and creating smooth, user-friendly experiences. I'm eager to
              grow my skills and contribute to a creative and collaborative team.
            </p>
            <div className="grid gap-6 md:grid-cols-3 pt-8">
              <div className="flex flex-col items-center space-y-2">
                <Code className="h-12 w-12 text-primary" />
                <h3 className="font-semibold">Clean Code</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Writing maintainable, scalable, and efficient code
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Palette className="h-12 w-12 text-primary" />
                <h3 className="font-semibold">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Creating beautiful and intuitive user experiences
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Smartphone className="h-12 w-12 text-primary" />
                <h3 className="font-semibold">Responsive</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Building applications that work on all devices
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container px-4 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
              <p className="text-muted-foreground md:text-lg">Technologies I work with to bring ideas to life</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                  <CardDescription>Building interactive user interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Vue.js</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                  <CardDescription>Server-side development and APIs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">GraphQL</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Tools & Others</CardTitle>
                  <CardDescription>Development tools and platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">Docker</Badge>
                    <Badge variant="secondary">AWS</Badge>
                    <Badge variant="secondary">Vercel</Badge>
                    <Badge variant="secondary">Figma</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container px-4 py-24 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
              <p className="text-muted-foreground md:text-lg">Some of my recent work that I'm proud of</p>
            </div>

            {/* First row of projects */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/Apartment_listing.png"
                    alt="Apartment Listing"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>Apartment Listing</CardTitle>
                  <CardDescription>
                    A full-stack apartment listing with HTML, CSS, JavaScript, and API integration
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">HTML</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">C#</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://github.com">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/inventory_system.png"
                    alt="Inventory System"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>Task Management App</CardTitle>
                  <CardDescription>
                    A collaborative task management tool with real-time updates and team features
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Html</Badge>
                    <Badge variant="outline">CSS</Badge>
                    <Badge variant="outline">PHP</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://github.com">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/Doctor_appointment_system.png"
                    alt="Doctor Appointment System"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>Doctor Appointment System</CardTitle>
                  <CardDescription>
                    A healthcare scheduling system with appointment booking and management
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">MongoDb</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Node.js</Badge>                    
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://github.com">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Second row of projects */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/Realty_property_system.png"
                    alt="Realty Property System"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>Realty Property System</CardTitle>
                  <CardDescription>
                    A real estate platform for property listings, searches, and agent management
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Vb.net</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://github.com">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/ByaheDVO.png"
                    alt="ByaheDVO"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>ByaheDVO</CardTitle>
                  <CardDescription>
                    A travel guide app for Davao City with interactive maps and local recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Flutter</Badge>
                    <Badge variant="outline">Firebase</Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://github.com">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden h-full flex flex-col w-full">
                <div className="relative h-48 bg-muted">
                  <Image
                    src="/images/Aptura.png"
                    alt="Social Media Dashboard"
                    width={400}
                    height={225}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex-grow">
                  <CardTitle>Social Media Dashboard</CardTitle>
                  <CardDescription>
                    A dashboard for tracking and analyzing social media metrics across platforms
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Figma</Badge>              
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="w-full">
                      <Link href="https://www.figma.com/design/6q6g03bmTKSVo9TU7bVOeP/OJT_Nierre?node-id=1-4&t=KrrA60R1sAuzH7jH-1">
                        <Figma className="mr-2 h-4 w-4" />
                        Figma
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container px-4 py-24">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="text-muted-foreground md:text-lg">
              I'm always open to discussing new opportunities and interesting projects. Let's create something amazing
              together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" asChild>
                <Link href="mailto:ianjenierre@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="https://www.linkedin.com/in/ian-je-nierre-b8435b314/">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t bg-muted/50">
          <div className="container px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ian Je Nierre. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://www.linkedin.com/in/ian-je-nierre-b8435b314/" className="text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:ianjenierre@gmail.com" className="text-muted-foreground hover:text-foreground">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
