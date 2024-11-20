'use client'

import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { LockIcon } from 'lucide-react'

const MeshButton = ({ 
  children, 
  className, 
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => (
  <button
    className={`
      relative overflow-hidden rounded-md px-4 py-2 font-bold text-white shadow-lg
      transition-all duration-300 ease-out hover:shadow-xl
      before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:bg-gradient-to-br
      before:from-blue-400 before:via-blue-600 before:to-indigo-700 before:opacity-80
      before:blur-xl before:transition-all before:duration-300 before:ease-out before:hover:opacity-100
      after:absolute after:inset-0 after:z-10 after:h-full after:w-full after:bg-gradient-to-br
      after:from-blue-400 after:via-blue-600 after:to-indigo-700 after:opacity-80
      after:transition-all after:duration-300 after:ease-out after:hover:opacity-100
      ${className}
    `}
    {...props}
  >
    <span className="relative z-20 text-white mix-blend-difference">{children}</span>
  </button>
)

export function PracticePageComponent() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white/95 backdrop-filter backdrop-blur-lg border-[#2463EB]/10 shadow-xl rounded-2xl overflow-hidden">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold text-[#0A1A3B] mb-2">Practice IELTS Speaking</CardTitle>
          <CardDescription className="text-lg text-gray-600">Choose your practice section</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6 sm:grid-cols-3 p-6">
          {[
            { 
              title: "Part 1", 
              description: "Introduction and Interview", 
              path: "/practice/part1",
              details: "Basic questions about familiar topics",
              isAvailable: true
            },
            { 
              title: "Part 2", 
              description: "Individual Long Turn", 
              path: "/practice/part2",
              details: "2-minute speech on a given topic",
              isAvailable: false,
              comingSoon: "Coming Soon"
            },
            { 
              title: "Part 3", 
              description: "Two-way Discussion", 
              path: "/practice/part3",
              details: "In-depth discussion on abstract topics",
              isAvailable: false,
              comingSoon: "Coming Soon"
            },
          ].map((part, index) => (
            <Card 
              key={index}
              className={`h-full flex flex-col bg-white transition-all duration-300 transform border ${
                part.isAvailable 
                  ? "hover:shadow-lg hover:-translate-y-1 border-[#2463EB]/10" 
                  : "opacity-75 border-gray-200"
              }`}
            >
              <div className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className={`text-xl font-semibold ${part.isAvailable ? "text-[#0A1A3B] group-hover:text-[#1E40AF]" : "text-gray-500"}`}>
                    {part.title}
                  </CardTitle>
                  <CardDescription className={part.isAvailable ? "text-gray-600" : "text-gray-400"}>
                    {part.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className={`text-sm ${part.isAvailable ? "text-gray-500" : "text-gray-400"}`}>{part.details}</p>
                </CardContent>
              </div>
              <CardFooter className="mt-auto">
                <div className="w-full flex justify-between items-center">
                  {!part.isAvailable && (
                    <Badge variant="outline" className="text-xs font-normal">
                      {part.comingSoon}
                    </Badge>
                  )}
                  {part.isAvailable ? (
                    <Link href={part.path} className="ml-auto" passHref>
                      <MeshButton>
                        Start Practice
                      </MeshButton>
                    </Link>
                  ) : (
                    <Button 
                      className="ml-auto bg-gray-300 text-gray-500 cursor-not-allowed"
                      disabled
                    >
                      <LockIcon className="w-4 h-4 mr-2" />
                      Locked
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}