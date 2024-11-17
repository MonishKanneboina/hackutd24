import React from "react";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";

type Item = {
  image: string;
  title: string;
  type: string;
  color: string;
  category: string;
  description: string;
};

type ProductCardProps = {
  item: Item;
  expanded: boolean;
  onToggle: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ item, expanded, onToggle }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={item.image}
          alt={item.title}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.type}</CardDescription>
        <div className="flex gap-2 mt-2">
          <Badge>{item.color}</Badge>
          <Badge variant="outline">{item.category}</Badge>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Button variant="outline" size="sm" onClick={onToggle}>
          {expanded ? "Less Info" : "More Info"}
        </Button>
      </CardFooter>
      {expanded && (
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default ProductCard;
