
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameSelector from "@/components/GameSelector";
import SkinCard from "@/components/SkinCard";
import FeaturedSkin from "@/components/FeaturedSkin";
import SkinFilters from "@/components/SkinFilters";
import { skins, getFeaturedSkins, getGameSkins } from "@/data/skins";

const Index = () => {
  const [selectedGame, setSelectedGame] = useState("cs2");
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const [featuredSkins, setFeaturedSkins] = useState(getFeaturedSkins());
  const [gameSkins, setGameSkins] = useState(getGameSkins(selectedGame));

  useEffect(() => {
    setGameSkins(getGameSkins(selectedGame));
  }, [selectedGame]);
  
  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Featured section */}
        <section className="container py-6">
          <h2 className="text-2xl font-bold mb-4">Featured Skins</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredSkins.map((skin) => (
              <FeaturedSkin
                key={skin.id}
                id={skin.id}
                name={skin.name}
                description={skin.description || ""}
                image={skin.image}
                price={skin.price}
                rarity={skin.rarity}
                wear={skin.wear}
                game={skin.game}
                discount={skin.discount}
              />
            ))}
          </div>
        </section>
        
        {/* Game selector */}
        <section className="container py-4 border-t">
          <h2 className="sr-only">Select Game</h2>
          <GameSelector selectedGame={selectedGame} onGameSelect={handleGameSelect} />
        </section>
        
        {/* Filters */}
        <SkinFilters onLayoutChange={setLayout} currentLayout={layout} />
        
        {/* Skin listings */}
        <section className="container py-6">
          <h2 className="text-xl font-bold mb-4">
            {selectedGame.toUpperCase()} Skins
            <span className="text-muted-foreground font-normal text-sm ml-2">({gameSkins.length} items)</span>
          </h2>
          
          <div className={`grid ${layout === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" : "grid-cols-1"} gap-4`}>
            {gameSkins.map((skin) => (
              <SkinCard
                key={skin.id}
                id={skin.id}
                name={skin.name}
                image={skin.image}
                price={skin.price}
                rarity={skin.rarity}
                wear={skin.wear}
                game={skin.game}
                discount={skin.discount}
              />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
