'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { ShirtIcon as Tshirt, Home, TrendingUp, Droplet } from 'lucide-react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home')

  const stats = [
    { title: "Clean Items Remaining", value: "23" },
    { title: "Possible Combinations", value: "142" },
  ]

  const recentOutfits = [
    { id: 1, name: "Casual Friday", date: "2023-04-14" },
    { id: 2, name: "Weekend Brunch", date: "2023-04-12" },
    { id: 3, name: "Office Meeting", date: "2023-04-10" },
    { id: 4, name: "Date Night", date: "2023-04-08" },
    { id: 5, name: "Workout Session", date: "2023-04-06" },
  ]

  const styleInsights = [
    { style: "Casual", percentage: 45 },
    { style: "Formal", percentage: 30 },
    { style: "Athletic", percentage: 15 },
    { style: "Evening", percentage: 10 },
  ]

  const wardrobeHealth = {
    overall: 85,
    categories: [
      { name: "Tops", status: "Good" },
      { name: "Bottoms", status: "Needs attention" },
      { name: "Shoes", status: "Excellent" },
      { name: "Accessories", status: "Good" },
    ]
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Tshirt className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                FitTracker
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="/"
                className={`transition-colors hover:text-foreground/80 ${
                  activeTab === 'home' ? 'text-foreground' : 'text-foreground/60'
                }`}
                onClick={() => setActiveTab('home')}
              >
                <Home className="h-4 w-4" />
              </Link>
              <Link
                href="/closet"
                className={`transition-colors hover:text-foreground/80 ${
                  activeTab === 'closet' ? 'text-foreground' : 'text-foreground/60'
                }`}
                onClick={() => setActiveTab('closet')}
              >
                Closet
              </Link>
              <Link
                href="/find-fit"
                className={`transition-colors hover:text-foreground/80 ${
                  activeTab === 'find-fit' ? 'text-foreground' : 'text-foreground/60'
                }`}
                onClick={() => setActiveTab('find-fit')}
              >
                Find Fit
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-6 md:py-10">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            <Card className="row-span-2">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Least Worn Item
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square relative">
                  <img
                    src="/placeholder.svg?height=200&width=200"
                    alt="Least worn item"
                    className="rounded-md object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Last worn 30 days ago
                </p>
              </CardContent>
            </Card>

            <Card className="p-4">
              <div className="space-y-2">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Style Insights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {styleInsights.map((style, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-36 text-sm font-medium">{style.style}</div>
                      <div className="w-full">
                        <Progress value={style.percentage} className="h-2" />
                      </div>
                      <div className="w-12 text-right text-sm text-muted-foreground">
                        {style.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Droplet className="mr-2 h-4 w-4" />
                  Wardrobe Health
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold">{wardrobeHealth.overall}%</div>
                  <Progress value={wardrobeHealth.overall} className="w-2/3 h-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {wardrobeHealth.categories.map((category, index) => (
                    <div key={index} className="flex flex-col">
                      <div className="text-sm font-medium">{category.name}</div>
                      <div className={`text-sm ${category.status === 'Needs attention' ? 'text-yellow-500' : 'text-green-500'}`}>
                        {category.status}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Outfits</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                  <div className="flex w-max space-x-4 p-4">
                    {recentOutfits.map((outfit) => (
                      <div key={outfit.id} className="w-[250px] space-y-3">
                        <div className="aspect-square bg-muted rounded-md"></div>
                        <div className="space-y-1 text-sm">
                          <h3 className="font-medium leading-none">{outfit.name}</h3>
                          <p className="text-xs text-muted-foreground">{outfit.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}