"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    category: "Writing",
    title: "AI-Powered Essay Feedback",
    description: "Get instant, detailed feedback on your IELTS essays.",
    image: "/images/ai-writing.webp"
  },
  {
    category: "Speaking",
    title: "Virtual Speaking Practice",
    description: "Practice your speaking skills with our AI interviewer.",
    image: "/images/ai-speaking.webp"
  },
  {
    category: "Listening",
    title: "Adaptive Listening Exercises",
    description: "Improve your listening skills with personalized exercises.",
    image: "/images/vertical-people-collab.jpg"
  },
  {
    category: "Reading",
    title: "Smart Reading Comprehension",
    description: "Enhance your reading speed and comprehension with AI-guided exercises.",
    image: "/images/vertical-students-studying.jpg"
  }
]

export default function FeatureCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [cardWidth, setCardWidth] = useState(1)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + features.length) % features.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-gray-100 py-10">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * cardWidth}px + 25%))`,
          gap: '0.75rem'
        }}
      >
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex-shrink-0 rounded-2xl overflow-hidden shadow-md"
            style={{ width: 'calc(40% - 0.375rem)' }}
            ref={index === 0 ? cardRef : null}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[3/4]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-xs font-medium mb-1 text-gray-600">{feature.category}</p>
                  <h2 className="text-lg font-bold mb-1 text-gray-900">{feature.title}</h2>
                  <p className="text-xs text-gray-700">{feature.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="absolute bottom-5 right-3 flex space-x-2">
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-800"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="bg-white/80 backdrop-blur-sm hover:bg-white/90 text-gray-800"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}