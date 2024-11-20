'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-7xl">
      <div className="mx-auto rounded-full border bg-background/70 backdrop-blur-lg shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="/practice">
                Practice
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#features">
                Features
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#how-it-works">
                How It Works
              </Link>
              <Link className="transition-colors hover:text-foreground/80 text-foreground/60" href="#FAQ">
                FAQs
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <div className="hidden md:flex md:items-center md:space-x-2">
                <Button className="rounded-full" variant="outline">Log in</Button>
                <Button className="rounded-full">Sign up</Button>
              </div>
              <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-0 right-0 md:hidden">
          <div className="mx-auto border bg-background/70 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden transition-all duration-200 ease-in-out">
            <nav className="flex flex-col space-y-2 p-4">
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/practice"
                onClick={() => setMobileMenuOpen(false)}
              >
                Practice
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works  
              </Link>
              <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60" 
                href="#FAQ"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button variant="outline" className="w-full justify-center rounded-lg">
                  Log in
                </Button>
                <Button className="w-full justify-center rounded-lg">Sign up</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
} 