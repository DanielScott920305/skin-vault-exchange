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
    image: "https://images.unsplash.com/photo-1628277302263-8c1b1ec40ff3?w=800&h=600&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1508349541884-88e5c0145fac?w=800&h=600&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1613929773618-47fefb050c35?w=800&h=600&fit=crop&q=80",
    price: 1299.99,
    rarity: "immortal",
    wear: "Minimal Wear",
    game: "CS2",
    category: "Rifle"
  },
  {
    id: "cs2-4",
    name: "Butterfly Knife | Fade",
    image: "https://images.unsplash.com/photo-1620042669797-b300ba70d519?w=800&h=600&fit=crop&q=80",
    price: 999.99,
    rarity: "immortal",
    wear: "Factory New",
    game: "CS2",
    category: "Knife"
  },
  {
    id: "cs2-5",
    name: "USP-S | Kill Confirmed",
    image: "https://images.unsplash.com/photo-1598897472767-5c0e0c448fdf?w=800&h=600&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1625772299348-f7f8b27bc27e?w=800&h=600&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1614066480200-51651a5f5ebe?w=800&h=600&fit=crop&q=80",
    price: 29.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana",
    featured: true
  },
  {
    id: "dota2-2",
    name: "Immortal | Enigma",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop&q=80",
    price: 4.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal",
    discount: 0.2
  },
  {
    id: "dota2-3",
    name: "Immortal | Juggernaut",
    image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=800&h=600&fit=crop&q=80",
    price: 8.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal"
  },
  {
    id: "dota2-4",
    name: "Arcana | Rubick",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop&q=80",
    price: 34.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana"
  },
  {
    id: "dota2-5",
    name: "Mythical | Anti-Mage",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=800&h=600&fit=crop&q=80",
    price: 2.49,
    rarity: "mythical",
    game: "Dota 2",
    category: "Mythical"
  },
  {
    id: "dota2-6",
    name: "Legendary | Pudge",
    image: "https://images.unsplash.com/photo-1633418608117-dcf730e87c6d?w=800&h=600&fit=crop&q=80",
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
    image: "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?w=800&h=600&fit=crop&q=80",
    price: 499.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat",
    featured: true
  },
  {
    id: "tf2-2",
    name: "Australium | Rocket Launcher",
    image: "https://images.unsplash.com/photo-1620299946030-70a114164187?w=800&h=600&fit=crop&q=80",
    price: 79.99,
    rarity: "legendary",
    game: "Team Fortress 2",
    category: "Weapon"
  },
  {
    id: "tf2-3",
    name: "Strange | Scattergun",
    image: "https://images.unsplash.com/photo-1608330262814-07bcd7427d83?w=800&h=600&fit=crop&q=80",
    price: 14.99,
    rarity: "rare",
    game: "Team Fortress 2",
    category: "Weapon",
    discount: 0.15
  },
  {
    id: "tf2-4",
    name: "Unusual | Burning Flames Killer Exclusive",
    image: "https://images.unsplash.com/photo-1617182635496-c5c0e1803c08?w=800&h=600&fit=crop&q=80",
    price: 249.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat"
  },
  
  // RUST SKINS
  {
    id: "rust-1",
    name: "Tempered AK47",
    image: "https://images.unsplash.com/photo-1584466769623-4076ae8c82fe?w=800&h=600&fit=crop&q=80",
    price: 14.99,
    rarity: "legendary",
    game: "Rust",
    category: "Weapon"
  },
  {
    id: "rust-2",
    name: "Glory Door",
    image: "https://images.unsplash.com/photo-1468657988500-aca2be09f4c6?w=800&h=600&fit=crop&q=80",
    price: 5.99,
    rarity: "rare",
    game: "Rust",
    category: "Building",
    discount: 0.1
  },
  
  // GTA SKINS
  {
    id: "gta-1",
    name: "Oppressor MK II",
    description: "A futuristic hoverbike with powerful missiles, this flying vehicle is feared across Los Santos.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop&q=80",
    price: 3999.99,
    rarity: "legendary",
    game: "GTA",
    category: "Vehicle",
    featured: true
  },
  {
    id: "gta-2",
    name: "Railgun",
    description: "A high-tech weapon that fires projectiles at extremely high velocity, capable of penetrating most armors.",
    image: "https://images.unsplash.com/photo-1508178879505-140e559aad13?w=800&h=600&fit=crop&q=80",
    price: 499.99,
    rarity: "mythical",
    game: "GTA",
    category: "Weapon",
    discount: 0.1
  },
  {
    id: "gta-3",
    name: "Kifflom Robes",
    description: "Sacred garments from the Epsilon Program cult, providing spiritual enlightenment and social status.",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=600&fit=crop&q=80",
    price: 249.99,
    rarity: "rare",
    game: "GTA",
    category: "Clothing"
  },
  {
    id: "gta-4",
    name: "Buzzard Attack Helicopter",
    description: "A light, agile attack helicopter equipped with machine guns and missiles for rapid response missions.",
    image: "https://images.unsplash.com/photo-1471479917193-f00955256257?w=800&h=600&fit=crop&q=80",
    price: 1899.99,
    rarity: "immortal",
    game: "GTA",
    category: "Vehicle"
  },
  {
    id: "gta-5",
    name: "Advanced Rifle",
    description: "A modern assault rifle with excellent accuracy and rate of fire, favored by professionals.",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&h=600&fit=crop&q=80",
    price: 119.99,
    rarity: "uncommon",
    game: "GTA",
    category: "Weapon",
    discount: 0.15
  },
  {
    id: "gta-6",
    name: "Securoserv Special Outfit",
    description: "Tactical outfit worn by Securoserv operatives, providing style and some protection.",
    image: "https://images.unsplash.com/photo-1542327897-d73f4005b533?w=800&h=600&fit=crop&q=80",
    price: 99.99,
    rarity: "uncommon",
    game: "GTA",
    category: "Clothing"
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
