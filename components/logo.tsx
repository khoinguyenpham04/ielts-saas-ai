'use client'

import { BookOpenCheck } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <BookOpenCheck size={30} color="#3f7efd" />
      <span className="font-bold">SpeakEasy AI</span>
    </div>
  )
}
