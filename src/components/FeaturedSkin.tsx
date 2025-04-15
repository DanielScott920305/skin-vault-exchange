
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface FeaturedSkinProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
  wear?: string;
  game: string;
  discount?: number;
}

const getRarityColor = (rarity: string) => {
  switch (rarity) {
    case 'common': return 'from-gaming-rarity-common/10 to-gaming-rarity-common/30';
    case 'uncommon': return 'from-gaming-rarity-uncommon/10 to-gaming-rarity-uncommon/30';
    case 'rare': return 'from-gaming-rarity-rare/10 to-gaming-rarity-rare/30';
    case 'mythical': return 'from-gaming-rarity-mythical/10 to-gaming-rarity-mythical/30';
    case 'legendary': return 'from-gaming-rarity-legendary/10 to-gaming-rarity-legendary/30';
    case 'ancient': return 'from-gaming-rarity-ancient/10 to-gaming-rarity-ancient/30';
    case 'immortal': return 'from-gaming-rarity-immortal/10 to-gaming-rarity-immortal/30';
    default: return 'from-gray-400/10 to-gray-400/30';
  }
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price);
};

const FeaturedSkin = ({ id, name, description, image, price, rarity, wear, game, discount }: FeaturedSkinProps) => {
  const discountedPrice = discount ? price * (1 - discount) : null;
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl border bg-gradient-to-br",
      getRarityColor(rarity)
    )}>
      <div className="absolute inset-0 bg-gaming-dark/60 backdrop-blur-sm" />
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
        <div className="flex flex-col justify-center">
          <Badge className="w-fit mb-2 bg-gaming-purple">{game}</Badge>
          <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
          
          {wear && (
            <div className="mt-2 text-sm text-muted-foreground">
              Wear: {wear}
            </div>
          )}
          
          <p className="mt-3 text-muted-foreground">{description}</p>
          
          <div className="mt-6 flex items-center gap-4">
            <div className="flex flex-col">
              {discountedPrice ? (
                <>
                  <span className="text-lg md:text-xl font-bold">{formatPrice(discountedPrice)}</span>
                  <span className="text-sm text-muted-foreground line-through">{formatPrice(price)}</span>
                </>
              ) : (
                <span className="text-lg md:text-xl font-bold">{formatPrice(price)}</span>
              )}
            </div>
            <Button className="bg-gaming-purple hover:bg-gaming-purple-dark">Buy Now</Button>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="rounded-lg overflow-hidden w-full max-w-[300px] aspect-[3/4] bg-card/30 backdrop-blur-sm shadow-xl">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSkin;
