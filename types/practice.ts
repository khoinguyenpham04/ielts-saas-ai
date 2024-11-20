export interface Question {
  id: number
  question: string
  choices: string[]
  correctAnswer: number
}

export interface QuestionSet {
  id: number
  title: string
  questions: Question[]
} 