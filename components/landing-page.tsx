'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {  Menu, X, Mic, Brain, ChartLine } from "lucide-react"
import { Logo } from "./logo"
import { AppleCardsCarouselDemo } from "./AppleCardsCarouselDemo"
import { Hero } from "./Hero"
import { BackgroundBeamsDemo } from "./EmailBackgroundBeam"

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
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#FAQ">
                FAQs
              </Link>
              {/* <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#pricing">
                Pricing
              </Link> */}
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
                href="#FAQ"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              {/* <Link
                className="block transition-colors hover:text-foreground/80 text-foreground/60"
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link> */}
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
        <Hero />

        {/* <section id="features" className="w-full py-9 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features for Your IELTS Success</h2>
              <FeatureCarousel />
          </div>
        </section> */}

        <section id="features">
            <AppleCardsCarouselDemo />
        </section>
        
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Master IELTS Speaking in Three Steps
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Mic className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Start Your Practice Session</h3>
                <p className="text-center text-muted-foreground">
                  Choose from Part 1 (Introduction), Part 2 (Cue Card), or Part 3 (Discussion) and begin speaking naturally with your AI examiner.
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-4 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Brain className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Get Real-Time AI Feedback</h3>
                <p className="text-center text-muted-foreground">
                  Receive instant analysis of your fluency, pronunciation, grammar, and vocabulary using latest audio technology.
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-4 border-t pt-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <ChartLine className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Track Your Progress</h3>
                <p className="text-center text-muted-foreground">
                  Monitor your improvement over time with detailed analytics and personalized recommendations for reaching your target band score.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="video-demo" className="w-full py-12 md:py-24 lg:py-32">
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
        </section> */}

        {/* <section id="testimonials">
          <Testimonials />
        </section> */}

        {/* <section>
          <Pricing />
        </section> */}
        
        <section id="FAQ" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>How does the AI speaking practice work?</AccordionTrigger>
                <AccordionContent>
                  Our AI speaking assistant uses OpenAI&apos;s latest real-time audio technology to create natural, examiner-like conversations. It follows the official IELTS format with all three parts: personal questions, cue cards, and in-depth discussions. You&apos;ll receive instant feedback on your performance, including detailed scoring for fluency, pronunciation, grammar, and vocabulary range.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>What makes this different from other practice apps?</AccordionTrigger>
                <AccordionContent>
                  Unlike traditional apps, we offer real-time conversation practice with an AI that adapts to your responses. You get unlimited practice sessions 24/7, detailed performance analytics, and personalized improvement tips - all at a fraction of the cost of human tutors. Our system is specifically trained on IELTS speaking patterns and scoring criteria to give you the most authentic practice experience possible.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>How much does it cost?</AccordionTrigger>
                <AccordionContent>
                  We offer a freemium model with 3 free practice sessions per month. Our premium subscription is just $14.99/month for unlimited practice sessions, detailed analytics, and progress tracking. This is significantly more affordable than traditional tutoring ($30-50/hour) while providing unlimited practice opportunities. We also offer special packages for institutions and group subscriptions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Can it understand different accents?</AccordionTrigger>
                <AccordionContent>
                  Yes! Our AI is trained to understand a wide variety of accents and speaking patterns. The system adapts to your speaking style while providing feedback to help you improve clarity and pronunciation according to IELTS standards. Whether you&apos;re from Asia, Europe, Africa, or anywhere else, our AI can understand and help you improve your English speaking skills.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>How accurate is the scoring?</AccordionTrigger>
                <AccordionContent>
                  Our scoring system is calibrated to match official IELTS band descriptors and has been validated against real IELTS results. The AI examiner evaluates your speaking using the same four criteria as the actual IELTS test: Fluency and Coherence, Lexical Resource, Grammatical Range and Accuracy, and Pronunciation. While no practice tool can guarantee exact IELTS scores, our system provides highly accurate guidance to help you understand your current level and improve.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="email">
          
            <BackgroundBeamsDemo />
          
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© 2024 IELTS AI Assistant. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">All trademarks are the property of their respective owners. IELTS™ is a registered trademark of University of Cambridge ESOL, the British Council, and IDP Education Australia.
            </p>
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