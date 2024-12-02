'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80"
          alt="Luxury watch background"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your Time
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-300">
            Discover our curated collection of luxury timepieces. From iconic classics to modern masterpieces,
            find your perfect expression of time.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="lg" className="text-lg" asChild>
              <Link href="/watches">Explore Collection</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg" asChild>
              <Link href="/services/repair">Book Repair Service</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}