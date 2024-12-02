import { WatchGrid } from '@/components/watches/watch-grid';
import { WatchFilters } from '@/components/watches/watch-filters';
import { WatchSort } from '@/components/watches/watch-sort';
import { SearchBar } from '@/components/watches/search-bar';

export default function WatchesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">Luxury Watches</h1>
          <p className="text-muted-foreground">
            Explore our curated collection of exceptional timepieces
          </p>
        </div>
        
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SearchBar />
          <div className="flex items-center gap-4">
            <WatchSort />
            <WatchFilters />
          </div>
        </div>

        <WatchGrid />
      </div>
    </div>
  );
}