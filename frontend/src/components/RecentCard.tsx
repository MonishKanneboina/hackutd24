import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"; // Adjust the import paths as needed
import { ScrollArea, ScrollBar } from "./ui/scroll-area"; // Adjust the import paths as needed

interface Outfit {
    id: string | number;
    name: string;
    date: string;
}

interface RecentOutfitsCardProps {
    recentOutfits: Outfit[];
}

const RecentOutfitsCard: React.FC<RecentOutfitsCardProps> = ({ recentOutfits }) => {
    return (
        <Card className="inline-block"> {/* Keeps the card width constrained */}
            <CardHeader>
                <CardTitle>Recent Outfits</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="rounded-md border">
                    <div className="flex gap-x-4 p-4"> {/* Adds horizontal gap between outfit cards */}
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
    );
};

export default RecentOutfitsCard;
