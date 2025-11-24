"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("overflow-hidden pt-0 md:pt-0", className)}>
      <div className="relative mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 text-center sm:gap-8 md:py-24">
        {/* Badge */}
        {badge && (
          <Badge
            variant="outline"
            className="opacity-0 animate-fade-in-up delay-100 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            <span>{badge.text}</span>
          </Badge>
        )}

        {/* Title */}
        <h2 className="text-3xl font-semibold sm:text-5xl opacity-0 animate-fade-in-up delay-200 text-white">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-white/90 opacity-0 animate-fade-in-up delay-300 text-lg sm:text-xl max-w-2xl">
            {description}
          </p>
        )}

        {/* Action Button */}
        <div className="opacity-0 animate-fade-in-up delay-500">
          <Button
            size="lg"
            className="bg-white text-brand-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            asChild
          >
            <Link href={action.href}>{action.text}</Link>
          </Button>
        </div>

        {/* Glow Effect */}
        {withGlow && (
          <div className="fade-top-lg pointer-events-none absolute inset-0 rounded-2xl shadow-glow opacity-0 animate-scale-in delay-700" />
        )}
      </div>
    </section>
  )
}
