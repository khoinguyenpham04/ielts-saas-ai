'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Mic, PenTool, BookOpen, Play, Menu, X } from "lucide-react"
import Image from "next/image"
import { Logo } from "./logo"
import FeatureCarousel from './feature-carousel'
import Testimonials from "./Testimonials"
import { ContainerScroll } from "./ui/container-scroll-animation"

export function LandingPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">
                Features
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#how-it-works">
                How It Works
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#testimonials">
                Testimonials
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex md:items-center md:space-x-2">
                <Button variant="outline">Log in</Button>
                <Button>Sign up</Button>
              </div>
              <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden">
            <div className="space-y-2 px-4 py-3">
              <Link
                className="block transition-colors hover:text-foreground/80 text-foreground/60"
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                className="block transition-colors hover:text-foreground/80 text-foreground/60"
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                className="block transition-colors hover:text-foreground/80 text-foreground/60"
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                className="block transition-colors hover:text-foreground/80 text-foreground/60"
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full justify-center">
                  Log in
                </Button>
                <Button className="w-full justify-center">Sign up</Button>
              </div>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Ace Your IELTS Writing and Speaking with AI-Powered Assessments
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Get instant feedback on your IELTS writing and speaking, improve your scores, and achieve your dream IELTS band.
                </p>
              </div>
              <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button size="lg">Get Started for Free</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            Master Your IELTS skills <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                your new AI assistant
              </span>
            </h1>
          </>
        }
      >
        <Image
              src={`/images/example.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full object-left-top"
              draggable={false}
            />
      </ContainerScroll>
        </div>

        </section>
        <section id="features" className="w-full py-9 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features for Your IELTS Success</h2>
              <FeatureCarousel />
          </div>
        </section>
        
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">1</div>
                <h3 className="text-xl font-bold">Write or record your response</h3>
                <p className="text-center text-muted-foreground">Submit your writing or speaking sample for assessment.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">2</div>
                <h3 className="text-xl font-bold">Get instant AI-powered feedback</h3>
                <p className="text-center text-muted-foreground">
                  Receive detailed feedback on coherence, grammar, pronunciation, and vocabulary.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">3</div>
                <h3 className="text-xl font-bold">Review, improve, and track progress</h3>
                <p className="text-center text-muted-foreground">Analyze your performance and see your improvement over time.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See It in Action</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Watch how our AI-powered IELTS assistant can help you improve your scores.
                </p>
              </div>
              <div className="w-full max-w-3xl aspect-video overflow-hidden rounded-xl border bg-muted">
                <div className="flex items-center justify-center h-full">
                  <Button variant="outline" size="icon">
                    <Play className="h-4 w-4" />
                    <span className="sr-only">Play demo video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Choose Your Plan</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <p className="text-4xl font-bold mb-6">$0</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      3 Writing Assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      3 Speaking Assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Basic Study Resources
                    </li>
                  </ul>
                  <Button className="w-full">Start Free Trial</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <p className="text-4xl font-bold mb-6">$19.99/mo</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Unlimited Writing Assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Unlimited Speaking Assessments
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Advanced Study Resources
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Progress Tracking
                    </li>
                  </ul>
                  <Button className="w-full">Get Premium</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Custom</h3>
                  <p  className="text-4xl font-bold mb-6">Contact Us</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Custom Assessment Volumes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Dedicated Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      API Access
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How accurate is the AI feedback?</AccordionTrigger>
                <AccordionContent>
                  Our AI has been trained on thousands of IELTS essays and speaking samples, and its accuracy is continuously
                  improving. While it provides highly accurate feedback, we always recommend using it in conjunction with human
                  expertise for the best results.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How does the speaking assessment work?</AccordionTrigger>
                <AccordionContent>
                  You can record your speaking responses directly through our platform. Our AI then analyzes your speech for
                  fluency, pronunciation, coherence, and lexical resource, providing detailed feedback and suggestions for
                  improvement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What kind of writing tasks are covered?</AccordionTrigger>
                <AccordionContent>
                  Our AI can assess both Task 1 and Task 2 writing tasks for IELTS Academic and General Training. This includes
                  essays, letters, reports, and graph descriptions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Improve Your IELTS Score?</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Start your journey to IELTS success with our AI-powered assistant.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button size="lg" className="w-full">Start Your Free Trial Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2024 IELTS AI Assistant. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}