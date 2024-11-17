import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"; // Adjust import paths as needed
import { Progress } from "./ui/progress"; // Adjust import path
import { TrendingUp } from 'lucide-react'

// Define the type for each style insight
interface StyleInsight {
    style: string;
    percentage: number;
}

// Define the props for the component, expecting an array of StyleInsight
interface StyleInsightsCardProps {
    styleInsights: StyleInsight[];
}

const StyleInsightsCard: React.FC<StyleInsightsCardProps> = ({ styleInsights }) => {
    return (
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
    );
};

export default StyleInsightsCard;
