import { Skin } from './skins';

export const skins: Skin[] = [
  // CS2 SKINS
  {
    id: "cs2-1",
    name: "AWP | Dragon Lore",
    description: "As deadly as it is rare, the Dragon Lore is the crown jewel of any collection. Its golden dragon design harks back to legends of old.",
    image: "https://source.unsplash.com/random/800x600?weapon,awp,dragon,gold",
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
    image: "https://source.unsplash.com/random/800x600?weapon,ak47,futuristic",
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
    image: "https://source.unsplash.com/random/800x600?weapon,m4,fire,wolf",
    price: 1299.99,
    rarity: "immortal",
    wear: "Minimal Wear",
    game: "CS2",
    category: "Rifle"
  },
  {
    id: "cs2-4",
    name: "Butterfly Knife | Fade",
    image: "https://source.unsplash.com/random/800x600?knife,colorful,blade",
    price: 999.99,
    rarity: "immortal",
    wear: "Factory New",
    game: "CS2",
    category: "Knife"
  },
  {
    id: "cs2-5",
    name: "USP-S | Kill Confirmed",
    image: "https://source.unsplash.com/random/800x600?weapon,pistol,tactical",
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
    image: "https://source.unsplash.com/random/800x600?weapon,pistol,gradient",
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
    image: "https://source.unsplash.com/random/800x600?game,character,fantasy,sword",
    price: 29.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana",
    featured: true
  },
  {
    id: "dota2-2",
    name: "Immortal | Enigma",
    image: "https://source.unsplash.com/random/800x600?game,character,mystical,dark",
    price: 4.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal",
    discount: 0.2
  },
  {
    id: "dota2-3",
    name: "Immortal | Juggernaut",
    image: "https://source.unsplash.com/random/800x600?game,character,warrior,action",
    price: 8.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Immortal"
  },
  {
    id: "dota2-4",
    name: "Arcana | Rubick",
    image: "https://source.unsplash.com/random/800x600?game,magic,wizard,spell",
    price: 34.99,
    rarity: "immortal",
    game: "Dota 2",
    category: "Arcana"
  },
  {
    id: "dota2-5",
    name: "Mythical | Anti-Mage",
    image: "https://source.unsplash.com/random/800x600?game,character,blade,mystical",
    price: 2.49,
    rarity: "mythical",
    game: "Dota 2",
    category: "Mythical"
  },
  {
    id: "dota2-6",
    name: "Legendary | Pudge",
    image: "https://source.unsplash.com/random/800x600?game,character,hook,brutal",
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
    image: "https://source.unsplash.com/random/800x600?game,hat,military,style",
    price: 499.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat",
    featured: true
  },
  {
    id: "tf2-2",
    name: "Australium | Rocket Launcher",
    image: "https://source.unsplash.com/random/800x600?weapon,rocket,golden,metallic",
    price: 79.99,
    rarity: "legendary",
    game: "Team Fortress 2",
    category: "Weapon"
  },
  {
    id: "tf2-3",
    name: "Strange | Scattergun",
    image: "https://source.unsplash.com/random/800x600?weapon,gun,metallic,industrial",
    price: 14.99,
    rarity: "rare",
    game: "Team Fortress 2",
    category: "Weapon",
    discount: 0.15
  },
  {
    id: "tf2-4",
    name: "Unusual | Burning Flames Killer Exclusive",
    image: "https://source.unsplash.com/random/800x600?game,fire,dramatic,flames",
    price: 249.99,
    rarity: "ancient",
    game: "Team Fortress 2",
    category: "Hat"
  },
  
  // RUST SKINS
  {
    id: "rust-1",
    name: "Tempered AK47",
    image: "https://source.unsplash.com/random/800x600?weapon,rifle,rust,metallic",
    price: 14.99,
    rarity: "legendary",
    game: "Rust",
    category: "Weapon"
  },
  {
    id: "rust-2",
    name: "Glory Door",
    image: "https://source.unsplash.com/random/800x600?door,metal,rustic,industrial",
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
