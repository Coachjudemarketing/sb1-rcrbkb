import { HeroSection } from '@/components/sections/hero';
import { FeaturedWatches } from '@/components/sections/featured-watches';
import { Services } from '@/components/sections/services';
import { Testimonials } from '@/components/sections/testimonials';
import { Brands } from '@/components/sections/brands';

export default async function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <HeroSection />
      <FeaturedWatches />
      <Services />
      <Brands />
      <Testimonials />
    </div>
  );
}