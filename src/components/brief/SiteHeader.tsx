import { Link } from "@tanstack/react-router";
import { TRIP } from "@/lib/shops";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="min-h-11 min-w-11 py-1">
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            Laura’s Van Brief
          </p>
          {!compact && (
            <p className="text-xs text-muted">
              {TRIP.windowShort} · {TRIP.from} → {TRIP.to}
            </p>
          )}
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          <Link
            to="/"
            hash="shops"
            className="inline-flex min-h-11 items-center px-3 text-muted hover:text-ink"
          >
            Shops
          </Link>
          <Link
            to="/"
            hash="inventory"
            className="hidden min-h-11 items-center px-3 text-muted hover:text-ink sm:inline-flex"
          >
            Inventory
          </Link>
          <Link
            to="/"
            hash="days"
            className="inline-flex min-h-11 items-center px-3 text-muted hover:text-ink"
          >
            Days
          </Link>
        </nav>
      </div>
    </header>
  );
}
