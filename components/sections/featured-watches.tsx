'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const featuredWatches = [
  {
    id: 1,
    name: 'Rolex Submariner',
    price: '$12,999',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80',
    slug: 'rolex-submariner',
  },
  {
    id: 2,
    name: 'Omega Speedmaster',
    price: '$6,799',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
    slug: 'omega-speedmaster',
  },
  {
    id: 3,
    name: 'Patek Philippe Nautilus',
    price: '$89,999',
    image: 'https://images.unsplash.com/photo-1639037687665-8d5c8a56b524?auto=format&fit=crop&q=80',
    slug: 'patek-philippe-nautilus',
  },
];

export function FeaturedWatches() {
  return (
    <section className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold tracking-tight">Featured Timepieces</h2>
        <Button variant="outline" asChild>
          <Link href="/watches">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredWatches.map((watch) => (
          <Card key={watch.id} className="group overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={watch.id === 1}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between p-4">
              <div>
                <h3 className="font-semibold">{watch.name}</h3>
                <p className="text-sm text-muted-foreground">{watch.price}</p>
              </div>
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/watches/${watch.slug}`}>Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}