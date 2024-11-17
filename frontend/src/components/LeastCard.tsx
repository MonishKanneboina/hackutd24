import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

const LeastWornItemCard: React.FC = () => {
    return (
        <Card className="row-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Least Worn Item</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="aspect-square relative">
            <img
                src="/placeholder.svg?height=200&width=200"
                alt="Least worn item"
                className="rounded-md object-cover"
            />
            </div>
            <p className="text-xs text-muted-foreground mt-2">Last worn 30 days ago</p>
        </CardContent>
        </Card>
    );
};

export default LeastWornItemCard;
