import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"; // Adjust the path as needed

interface ItemCardProps {
    item: {
        name: string;
        type: string;
        category: string;
        lastWorn: string;
        imageUrl: string;
    };
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
    return (
        <Card className="row-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">Least Worn Item</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="aspect-square relative">
                <img
                    src={item.imageUrl || "/placeholder.svg?height=200&width=200"}
                    alt={`Image of ${item.name}`}
                    className="rounded-md object-cover"
                />
            </div>
            <div className="text-center mt-2">
            <p className="text-base font-semibold">{item.name}</p>
            <p className="text-sm text-muted-foreground">
                {item.type} - {item.category}
            </p>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Last worn {item.lastWorn}</p>
        </CardContent>
        </Card>
    );
};

export default ItemCard;
