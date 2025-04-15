
export interface Skin {
  id: string;
  name: string;
  description?: string;
  image: string;
  price: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'mythical' | 'legendary' | 'ancient' | 'immortal';
  wear?: string;
  game: string;
  category?: string;
  featured?: boolean;
  discount?: number;
}

export const skins: Skin[] = [
  // CS2 SKINS
  {
    id: "cs2-1",
    name: "AWP | Dragon Lore",
    description: "As deadly as it is rare, the Dragon Lore is the crown jewel of any collection. Its golden dragon design harks back to legends of old.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop&q=80",
    price: 1899.99,
    rarity: "ancient",
    wear: "Factory New",
    game: "CS2",
    category: "AWP",
    featured: true
  },
  {
    id: "cs2-2",
    name: "AK-47 | Asiimov",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&q=80",
    price: 239.99,
    rarity: "legendary",
    wear: "Field-Tested",
    game: "CS2",
    category: "Rifle",
    discount: 0.15
  },
  {
    id: "cs2-3",
    name: "M4A4 | Howl",
    image: "https://images.unsplash.com/photo-1595323397979-7d5262caa898?w=800&h=600&fit=crop&q=80",
    price: 1299.99,
    rarity: "immortal",
    wear: "Minimal Wear",
    game: "CS2",
    category: "Rifle"
  },
  {
    id: "cs2-4",
    name: "Butterfly Knife | Fade",
    image: "https://images.unsplash.com/photo-1579644761102-28339864a21d?w=800&h=600&fit=crop&q=80",
    price: 999.99,
    rarity: "immortal",
    wear: "Factory New",
    game: "CS2",
    category: "Knife"
  },
  {
    id: "cs2-5",
    name: "USP-S | Kill Confirmed",
    image: "https://images.unsplash.com/photo-1584281532659-a0c0c9e191b0?w=800&h=600&fit=crop&q=80",
    price: 179.99,
    rarity: "mythical",
    wear: "Well-Worn",
    game: "CS2",
    category: "Pistol",
    discount: 0.1
  },
  {
    id: "cs2-6",
    name: "Glock-18 | Fade",
    image: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=800&h=600&fit=crop&q=80",
    price: 439.99,
    rarity: "legendary",
    wear: "Factory New",
    game: "CS2",
    category: "Pistol"
  },
  
  // DOTA 2 SKINS
  {
    id: "dota2-1",
    name: "Arcana | Phantom Assassin",
    description: "The Manifold Paradox arcana transforms Phantom Assassin with ethereal blades and effects, marking each victory with a growing collection of souls.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&q=80",
    price: 29.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana",
    featured: true
  },
  {
    id: "dota2-2",
    name: "Immortal | Enigma",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop&q=80",
    price: 4.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal",
    discount: 0.2
  },
  {
    id: "dota2-3",
    name: "Immortal | Juggernaut",
    image: "https://images.unsplash.com/photo-1605979257913-1704eb7b6246?w=800&h=600&fit=crop&q=80",
    price: 8.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal"
  },
  {
    id: "dota2-4",
    name: "Arcana | Rubick",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bfb?w=800&h=600&fit=crop&q=80",
    price: 34.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana"
  },
  {
    id: "dota2-5",
    name: "Mythical | Anti-Mage",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=600&fit=crop&q=80",
    price: 2.49,
    rarity: "mythical",
    game: "Dota 2",
    category: "Mythical"
  },
  {
    id: "dota2-6",
    name: "Legendary | Pudge",
    image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&h=600&fit=crop&q=80",
    price: 7.99,
    rarity: "legendary",
    game: "Dota 2",
    category: "Legendary",
    discount: 0.25
  },
  
  // Team Fortress 2 SKINS
  {
    id: "tf2-1",
    name: "Unusual | Team Captain",
    description: "One of the most prestigious hats in the game, adorned with a rare burning flames effect that symbolizes authority and power.",
    image: "https://images.unsplash.com/photo-1520808663317-647b476a81b9?w=800&h=600&fit=crop&q=80",
    price: 499.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat",
    featured: true
  },
  {
    id: "tf2-2",
    name: "Australium | Rocket Launcher",
    image: "https://images.unsplash.com/photo-1598368195835-44d25c980d3d?w=800&h=600&fit=crop&q=80",
    price: 79.99,
    rarity: "legendary",
    game: "Team Fortress 2",
    category: "Weapon"
  },
  {
    id: "tf2-3",
    name: "Strange | Scattergun",
    image: "https://images.unsplash.com/photo-1595590424283-b8f526a10b1c?w=800&h=600&fit=crop&q=80",
    price: 14.99,
    rarity: "rare",
    game: "Team Fortress 2",
    category: "Weapon",
    discount: 0.15
  },
  {
    id: "tf2-4",
    name: "Unusual | Burning Flames Killer Exclusive",
    image: "https://images.unsplash.com/photo-1517232115160-ff93364542dd?w=800&h=600&fit=crop&q=80",
    price: 249.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat"
  },
  
  // RUST SKINS
  {
    id: "rust-1",
    name: "Tempered AK47",
    image: "https://images.unsplash.com/photo-1613843539605-079d9a1a2f3e?w=800&h=600&fit=crop&q=80",
    price: 14.99,
    rarity: "legendary",
    game: "Rust",
    category: "Weapon"
  },
  {
    id: "rust-2",
    name: "Glory Door",
    image: "https://images.unsplash.com/photo-1573036110381-d8b27398c405?w=800&h=600&fit=crop&q=80",
    price: 5.99,
    rarity: "rare",
    game: "Rust",
    category: "Building",
    discount: 0.1
  }
];

export const getFeaturedSkins = (): Skin[] => {
  return skins.filter(skin => skin.featured);
};

export const getGameSkins = (gameId: string): Skin[] => {
  return skins.filter(skin => skin.game.toLowerCase() === gameId);
};

export const getAllGames = (): string[] => {
  return [...new Set(skins.map(skin => skin.game))];
};
