'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const watches = [
  {
    id: 1,
    name: 'Rolex Submariner',
    reference: '126610LN',
    price: 12999,
    condition: 'New',
    brand: 'Rolex',
    category: 'Diving',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Omega Speedmaster Professional',
    reference: '311.30.42.30.01.005',
    price: 6799,
    condition: 'Pre-owned',
    brand: 'Omega',
    category: 'Chronograph',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Patek Philippe Nautilus',
    reference: '5711/1A-010',
    price: 89999,
    condition: 'New',
    brand: 'Patek Philippe',
    category: 'Luxury Sport',
    image: 'https://images.unsplash.com/photo-1639037687665-8d5c8a56b524?auto=format&fit=crop&q=80',
  },
];

export function WatchGrid() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {watches.map((watch) => (
        <Card key={watch.id} className="group">
          <CardContent className="p-0">
            <div className="relative aspect-square">
              <Image
                src={watch.image}
                alt={watch.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 bg-background/80 backdrop-blur-sm"
                onClick={() => toggleFavorite(watch.id)}
              >
                <Heart className={`h-5 w-5 ${favorites.includes(watch.id) ? 'fill-primary text-primary' : ''}`} />
              </Button>
              <div className="absolute left-2 top-2 flex gap-2">
                <Badge variant={watch.condition === 'New' ? 'default' : 'secondary'}>
                  {watch.condition}
                </Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2 p-4">
            <div className="space-y-1">
              <h3 className="font-semibold">{watch.name}</h3>
              <p className="text-sm text-muted-foreground">Ref: {watch.reference}</p>
            </div>
            <div className="flex w-full items-center justify-between">
              <span className="text-lg font-bold">
                ${watch.price.toLocaleString()}
              </span>
              <Button size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}