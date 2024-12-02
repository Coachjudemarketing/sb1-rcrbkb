'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SlidersHorizontal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const brands = [
  { id: 'rolex', label: 'Rolex' },
  { id: 'omega', label: 'Omega' },
  { id: 'patek', label: 'Patek Philippe' },
  { id: 'ap', label: 'Audemars Piguet' },
  { id: 'cartier', label: 'Cartier' },
];

const conditions = [
  { id: 'new', label: 'New' },
  { id: 'pre-owned', label: 'Pre-owned' },
];

const categories = [
  { id: 'diving', label: 'Diving' },
  { id: 'chronograph', label: 'Chronograph' },
  { id: 'dress', label: 'Dress' },
  { id: 'sport', label: 'Sport' },
  { id: 'pilot', label: 'Pilot' },
];

export function WatchFilters() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const FilterSection = ({ 
    title, 
    items, 
    selected, 
    onChange 
  }: { 
    title: string;
    items: { id: string; label: string }[];
    selected: string[];
    onChange: (value: string[]) => void;
  }) => (
    <div className="space-y-4">
      <h4 className="font-medium">{title}</h4>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex items-center space-x-2">
            <Checkbox
              id={item.id}
              checked={selected.includes(item.id)}
              onCheckedChange={(checked) => {
                if (checked) {
                  onChange([...selected, item.id]);
                } else {
                  onChange(selected.filter((id) => id !== item.id));
                }
              }}
            />
            <label
              htmlFor={item.id}
              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {item.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Filter Watches</SheetTitle>
        </SheetHeader>
        <div className="mt-8 space-y-6">
          <FilterSection
            title="Brands"
            items={brands}
            selected={selectedBrands}
            onChange={setSelectedBrands}
          />
          <Separator />
          <FilterSection
            title="Condition"
            items={conditions}
            selected={selectedConditions}
            onChange={setSelectedConditions}
          />
          <Separator />
          <FilterSection
            title="Categories"
            items={categories}
            selected={selectedCategories}
            onChange={setSelectedCategories}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}