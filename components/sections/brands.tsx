import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const brands = [
  { name: 'Rolex', logo: '/brands/rolex.svg' },
  { name: 'Omega', logo: '/brands/omega.svg' },
  { name: 'Patek Philippe', logo: '/brands/patek.svg' },
  { name: 'Audemars Piguet', logo: '/brands/ap.svg' },
  { name: 'Cartier', logo: '/brands/cartier.svg' },
  { name: 'IWC', logo: '/brands/iwc.svg' },
];

export function Brands() {
  return (
    <section className="container py-8">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Featured Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Card key={brand.name} className="flex items-center justify-center p-6">
            <CardContent className="p-0">
              <div className="relative h-12 w-24">
                {/* Note: Replace with actual brand logos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold">{brand.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}