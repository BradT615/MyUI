// src/components/hero-section.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MyBlocksLogo } from "@/components/MyBlocksLogo"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Store and retrieve your <span className="gradient-text">favorite UI&nbsp;components</span>
            </h1>
            <p className="mb-8 max-w-md text-lg text-muted-foreground">
              MyBlocks helps developers organize, store, and retrieve their code snippets and 
              UI components in one centralized place.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md shadow-sm hover:shadow-md transition-all"
              >
                <Link href="/register">Get Started</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-border bg-background hover:bg-accent/50 hover:text-accent-foreground/90 rounded-md shadow-sm hover:shadow-md transition-all"
              >
                <Link href="/demo">View Demo</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className={cn(
              "relative h-80 w-full max-w-lg overflow-hidden",
              "rounded-xl border transition-all duration-300",
              "bg-card shadow-xl"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/10 backdrop-blur-sm">
                <div className="flex justify-center pt-8">
                  <MyBlocksLogo width={120} height={120} variant="filled" />
                </div>
                <div className="p-8 pt-4">
                  <div className="space-y-3">
                    <div className="h-12 rounded-lg bg-primary/5 flex items-center px-4 border border-border/20">
                      <div className="h-6 w-6 rounded-full bg-primary/10"></div>
                      <div className="ml-3 h-4 w-40 rounded bg-primary/20"></div>
                    </div>
                    <div className="h-12 rounded-lg bg-primary/10 flex items-center px-4 border border-border/20">
                      <div className="h-6 w-6 rounded-full bg-primary/15"></div>
                      <div className="ml-3 h-4 w-36 rounded bg-primary/20"></div>
                    </div>
                    <div className="h-12 rounded-lg bg-primary/5 flex items-center px-4 border border-border/20">
                      <div className="h-6 w-6 rounded-full bg-primary/10"></div>
                      <div className="ml-3 h-4 w-32 rounded bg-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}