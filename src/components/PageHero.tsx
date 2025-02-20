import React from 'react'
import { Container } from './Container'

interface PageHeroProps {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-black/50" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg leading-8">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </div>
  )
} 