
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SkinCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
  wear?: string;
  game: string;
  discount?: number;
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'bg-gaming-rarity-common';
    case 'uncommon': return 'bg-gaming-rarity-uncommon';
    case 'rare': return 'bg-gaming-rarity-rare';
    case 'mythical': return 'bg-gaming-rarity-mythical';
    case 'legendary': return 'bg-gaming-rarity-legendary';
    case 'ancient': return 'bg-gaming-rarity-ancient';
    case 'immortal': return 'bg-gaming-rarity-immortal';
    default: return 'bg-gray-400';
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price);
};

const SkinCard = ({ id, name, image, price, rarity, wear, game, discount }: SkinCardProps) => {
  const discountedPrice = discount ? price * (1 - discount) : null;
  
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card transition-all hover:border-gaming-purple-light hover:shadow-md hover:shadow-gaming-purple/10">
      {/* Rarity border indicator */}
      <div className={cn("h-1 w-full", getRarityColor(rarity))} />
      
      {discount && (
        <Badge className="absolute right-2 top-2 bg-destructive">-{discount * 100}%</Badge>
      )}
      
      {/* Favorite button */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="absolute right-2 top-8 z-10 opacity-0 transition-opacity group-hover:opacity-100"
      >
        <Heart className="h-4 w-4" />
      </Button>
      
      <div className="aspect-[3/4] bg-muted/40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-3">
        <h3 className="font-medium line-clamp-1">{name}</h3>
        
        {wear && (
          <div className="mt-1 text-xs text-muted-foreground">
            Wear: {wear}
          </div>
        )}
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex flex-col">
            {discountedPrice ? (
              <>
                <span className="text-sm font-bold">{formatPrice(discountedPrice)}</span>
                <span className="text-xs text-muted-foreground line-through">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="text-sm font-bold">{formatPrice(price)}</span>
            )}
          </div>
          <Button size="sm" className="h-8 bg-gaming-purple hover:bg-gaming-purple-dark">Buy</Button>
        </div>
      </div>
    </div>
  );
};

export default SkinCard;
