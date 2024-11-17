'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import ProductCard from "@/components/GalleryCard"
import Navbar from "@/components/Navbar"

// Sample data (replace with your actual data)
const items = [
    { id: 1, title: 'Purple Hoodie', type: 'Top', color: 'purple', category: 'casual', image: '/purple_hoodie.jpg?height=200&width=200', description: 'Comfortable purple hoodie for a cool morning.' },
    { id: 2, title: 'TAMUhack T-Shirt', type: 'Shirt', color: 'white', category: 'casual', image: '/white_shirt.jpg?height=200&width=200', description: 'Classic white t-shirt, a wardrobe essential.' },
    { id: 3, title: 'HowdyHack T-Shirt', type: 'Shirt', color: 'brown', category: 'casual', image: '/brown_shirt.jpg?height=200&width=200', description: 'Clean brown t-shirt, perfect for autumn.' },
    { id: 4, title: 'Black Pants', type: 'pants', color: 'black', category: 'formal', image: '/black_pants.jpg?height=200&width=200', description: 'Stunning red gown for special evening events.' },
    { id: 5, title: 'Gray Sweatpants', type: 'pants', color: 'gray', category: 'casual', image: '/brown_pants.jpg?height=200&width=200', description: 'Comfortable sweatpants for workouts or lounging.' },
    { id: 6, title: 'Green Pajama Pants', type: 'pants', color: 'green/red', category: 'lounge', image: '/pjs.jpg?height=200&width=200', description: 'Classic navy blazer for a sharp, professional look.' },
]

export default function ProductGallery() {
    const [expandedId, setExpandedId] = useState<number | null>(null)
    const [filters, setFilters] = useState({
        type: '',
        color: '',
        category: '',
    })

    const toggleExpand = (id: number) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const filteredItems = items.filter((item) => {
        return (
        (filters.type === '' || item.type === filters.type) &&
        (filters.color === '' || item.color === filters.color) &&
        (filters.category === '' || item.category === filters.category)
        )
    })

    const uniqueValues = (key: keyof typeof filters) => 
        Array.from(new Set(items.map(item => item[key])))

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 mx-auto">
                <div className="flex flex-col m-10 w-[100ch]">
                    <h1 className="text-4xl font-bold tracking-tight">Closet</h1>
                    <div className="mx-auto mb-6 flex gap-4">
                        {Object.keys(filters).map((key) => (
                        <Select
                            key={key}
                            onValueChange={(value) => setFilters({ ...filters, [key]: value })}
                        >
                            <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={`Filter by ${key}`} />
                            </SelectTrigger>
                            <SelectContent>
                            <SelectItem value="light">All {key}s</SelectItem>
                            {uniqueValues(key as keyof typeof filters).map((value) => (
                                <SelectItem key={value} value={value}>
                                {value}
                                </SelectItem>
                            ))}
                            </SelectContent>
                        </Select>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[100ch]">
                        {filteredItems.map((item) => (
                        <ProductCard
                            key={item.id}
                            item={item}
                            expanded={expandedId === item.id}
                            onToggle={() => toggleExpand(item.id)}
                        />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}