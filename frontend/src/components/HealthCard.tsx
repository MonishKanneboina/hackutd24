import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"; 
import { Progress } from "./ui/progress"; 
import { Droplet } from 'lucide-react'

interface WardrobeCategory {
    name: string;
    status: "Good" | "Needs attention" | "Excellent";
}

interface WardrobeHealth {
    overall: number;
    categories: WardrobeCategory[];
} 

interface WardrobeHealthCardProps {
    wardrobeHealth: WardrobeHealth;
}

const WardrobeHealthCard: React.FC<WardrobeHealthCardProps> = ({ wardrobeHealth }) => {
    return (
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
                    <div
                    className={`text-sm ${
                        category.status === "Needs attention"
                        ? "text-yellow-500"
                        : category.status === "Good"
                        ? "text-green-500"
                        : "text-blue-500"
                    }`}
                    >
                    {category.status}
                    </div>
                </div>
                ))}
            </div>
            </CardContent>
        </Card>
    );
};

export default WardrobeHealthCard;