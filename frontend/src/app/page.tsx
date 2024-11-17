'use client';

import Navbar from "@/components/Navbar"
import LeastCard from "@/components/LeastCard"
import StyleCard from "@/components/StyleCard"
import HealthCard from "@/components/HealthCard"
import RecentCard from "@/components/RecentCard"

export default function Dashboard() {

  const sampleItem = {
    name: "Classic T-Shirt",
    type: "Shirt",
    category: "Casual",
    lastWorn: "30 days ago",
    imageUrl: "/least.png",
  };

  const recentOutfits = [
    { id: 1, name: "Casual Friday", date: "2023-04-14" },
    { id: 2, name: "Weekend Brunch", date: "2023-04-12" },
    { id: 3, name: "Office Meeting", date: "2023-04-10" },
    // { id: 4, name: "Weekend Brunch", date: "2023-04-12" },
    // { id: 5, name: "Office Meeting", date: "2023-04-10" },
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
    ] as const, // assert categories array as constant to infer literal types
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 mx-auto">
        <div className="flex flex-col m-10 w-[100ch]">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <div className="inline-grid gap-10 grid-cols-2 mt-6">
            <LeastCard item={sampleItem} />
            <StyleCard styleInsights={styleInsights} />
            <HealthCard wardrobeHealth={wardrobeHealth} />
          </div>
          <div className="mt-8 w-[100ch]">
            <RecentCard recentOutfits={recentOutfits} />
          </div>
        </div>
      </main>
    </div>
  )
}