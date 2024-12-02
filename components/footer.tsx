import Link from 'next/link';
import { Watch } from 'lucide-react';

export default function Footer() {
  const navigation = {
    shop: [
      { name: 'New Arrivals', href: '/watches/new' },
      { name: 'Pre-owned', href: '/watches/pre-owned' },
      { name: 'Popular', href: '/watches/popular' },
      { name: 'Brands', href: '/brands' },
    ],
    services: [
      { name: 'Watch Repair', href: '/services/repair' },
      { name: 'Authentication', href: '/services/authentication' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Insurance', href: '/services/insurance' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Partners', href: '/partners' },
    ],
    legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'Shipping', href: '/shipping' },
    ],
  };

  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Watch className="h-6 w-6" />
              <span className="font-bold text-xl">Timeless Elevation</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Elevating the art of timekeeping through exceptional service, 
              authentic luxury timepieces, and expert craftsmanship since 1970.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Shop</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.shop.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Services</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Timeless Elevation, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}