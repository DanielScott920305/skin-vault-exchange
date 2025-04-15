
import { useState } from 'react';
import { 
  Filter, ChevronDown, Search, LayoutGrid, LayoutList, 
  SlidersHorizontal, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuCheckboxItem, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface FilterItem {
  id: string;
  name: string;
  checked: boolean;
}

interface PriceRange {
  min: number;
  max: number;
}

interface SkinFiltersProps {
  onLayoutChange: (layout: 'grid' | 'list') => void;
  currentLayout: 'grid' | 'list';
}

const SkinFilters = ({ onLayoutChange, currentLayout }: SkinFiltersProps) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<PriceRange>({ min: 0, max: 1000 });
  const [rarities, setRarities] = useState<FilterItem[]>([
    { id: 'common', name: 'Common', checked: false },
    { id: 'uncommon', name: 'Uncommon', checked: false },
    { id: 'rare', name: 'Rare', checked: false },
    { id: 'mythical', name: 'Mythical', checked: false },
    { id: 'legendary', name: 'Legendary', checked: false },
    { id: 'ancient', name: 'Ancient', checked: false },
    { id: 'immortal', name: 'Immortal', checked: false },
  ]);
  
  const toggleRarity = (id: string) => {
    setRarities(rarities.map(rarity => 
      rarity.id === id ? { ...rarity, checked: !rarity.checked } : rarity
    ));
  };

  return (
    <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-sm border-b">
      <div className="container py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Mobile search and filter buttons */}
          <div className="flex md:hidden w-full gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search skins..." className="w-full pl-9" />
            </div>
            <Button 
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort by:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    Price: Low to High
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuCheckboxItem checked>
                    Price: Low to High
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Price: High to Low
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Newest First
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>
                    Rarity
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Price:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    ${priceRange.min} - ${priceRange.max === 1000 ? '1000+' : priceRange.max}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>Price Range</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="p-2">
                    <div className="flex items-center justify-between">
                      <Input 
                        type="number" 
                        placeholder="Min" 
                        className="w-20" 
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                      />
                      <span className="mx-2">-</span>
                      <Input 
                        type="number" 
                        placeholder="Max" 
                        className="w-20"
                        value={priceRange.max === 1000 ? '' : priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 1000})}
                      />
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button size="sm">Apply</Button>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Rarity:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    {rarities.filter(r => r.checked).length ? 
                      `${rarities.filter(r => r.checked).length} selected` : 
                      'All Rarities'
                    }
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {rarities.map(rarity => (
                    <DropdownMenuCheckboxItem
                      key={rarity.id}
                      checked={rarity.checked}
                      onCheckedChange={() => toggleRarity(rarity.id)}
                    >
                      {rarity.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
            </Button>
          </div>
          
          <div className="flex items-center">
            <div className="flex items-center border rounded-md overflow-hidden">
              <Button
                variant="ghost"
                size="icon"
                className={`h-9 w-9 rounded-none ${currentLayout === 'grid' ? 'bg-muted' : ''}`}
                onClick={() => onLayoutChange('grid')}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={`h-9 w-9 rounded-none ${currentLayout === 'list' ? 'bg-muted' : ''}`}
                onClick={() => onLayoutChange('list')}
              >
                <LayoutList className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile filters collapsible */}
        <Collapsible open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen} className="md:hidden">
          <CollapsibleContent className="py-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Sort by:</label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="justify-between">
                  Price: Low to High
                  <Check className="h-3 w-3" />
                </Button>
                <Button variant="outline" size="sm">Price: High to Low</Button>
                <Button variant="outline" size="sm">Newest First</Button>
                <Button variant="outline" size="sm">Rarity</Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Price Range:</label>
              <div className="flex items-center gap-2">
                <Input 
                  type="number" 
                  placeholder="Min" 
                  className="w-full" 
                  value={priceRange.min}
                  onChange={(e) => setPriceRange({...priceRange, min: parseInt(e.target.value) || 0})}
                />
                <span>-</span>
                <Input 
                  type="number" 
                  placeholder="Max" 
                  className="w-full"
                  value={priceRange.max === 1000 ? '' : priceRange.max}
                  onChange={(e) => setPriceRange({...priceRange, max: parseInt(e.target.value) || 1000})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Rarity:</label>
              <div className="grid grid-cols-2 gap-2">
                {rarities.map(rarity => (
                  <Button
                    key={rarity.id}
                    variant="outline"
                    size="sm"
                    className={`justify-between ${rarity.checked ? 'border-gaming-purple bg-gaming-purple/10' : ''}`}
                    onClick={() => toggleRarity(rarity.id)}
                  >
                    {rarity.name}
                    {rarity.checked && <Check className="h-3 w-3" />}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="pt-2 flex justify-between">
              <Button variant="outline" size="sm">Reset All</Button>
              <Button size="sm">Apply Filters</Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default SkinFilters;
