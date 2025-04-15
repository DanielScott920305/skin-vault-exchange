
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Game {
  id: string;
  name: string;
  icon: string;
}

const games: Game[] = [
  { id: 'cs2', name: 'CS2', icon: '🔫' },
  { id: 'dota2', name: 'Dota 2', icon: '🛡️' },
  { id: 'tf2', name: 'Team Fortress 2', icon: '🎯' },
  { id: 'rust', name: 'Rust', icon: '🏹' },
  { id: 'pubg', name: 'PUBG', icon: '🪖' },
];

interface GameSelectorProps {
  selectedGame: string;
  onGameSelect: (gameId: string) => void;
}

const GameSelector = ({ selectedGame, onGameSelect }: GameSelectorProps) => {
  return (
    <div className="flex overflow-x-auto py-2 px-2 gap-2 no-scrollbar">
      {games.map((game) => (
        <Button
          key={game.id}
          variant={game.id === selectedGame ? "default" : "outline"}
          className={cn(
            "rounded-full flex items-center gap-2 whitespace-nowrap transition-all",
            game.id === selectedGame 
              ? "bg-gaming-purple hover:bg-gaming-purple-dark" 
              : "hover:border-gaming-purple-light"
          )}
          onClick={() => onGameSelect(game.id)}
        >
          <span>{game.icon}</span>
          <span>{game.name}</span>
        </Button>
      ))}
    </div>
  );
};

export default GameSelector;
