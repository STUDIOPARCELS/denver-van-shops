import { Link } from "@tanstack/react-router";
import { Clock, MapPin } from "lucide-react";
import type { Shop } from "@/lib/shops";
import { money } from "@/lib/utils";

const VERDICT: Record<Shop["verdict"], { label: string; className: string }> = {
  "best-now": { label: "Drive away", className: "bg-pine text-paper" },
  "strong-now": { label: "Check the lot", className: "bg-rust text-paper" },
  tour: { label: "Tour", className: "bg-sand text-ink" },
  later: { label: "Later build", className: "bg-ink/80 text-paper" },
};

export function ShopCard({ shop }: { shop: Shop }) {
  const badge = VERDICT[shop.verdict];
  const cover = shop.images[0];
  return (
    <Link
      to="/shop/$slug"
      params={{ slug: shop.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-border transition-[box-shadow,transform] duration-200 ease-out hover:shadow-border-hover"
    >
      <div className="relative aspect-video overflow-hidden bg-sand">
        <img
          src={cover.src}
          alt={cover.alt}
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold ${badge.className}`}
        >
          {badge.label}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{shop.name}</h3>
            <span className="shrink-0 text-xs tabular-nums text-muted">{shop.driveMins} min</span>
          </div>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="size-3.5" />
            {shop.city}
            <span className="text-dust">·</span>
            {shop.pathLabel}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-ink/90">{shop.blurb}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {shop.chassis.map((c) => (
            <span
              key={c}
              className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-ink"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-line pt-3 text-sm">
          <span className="font-medium tabular-nums">From {money(shop.priceFrom)}</span>
          <span className="inline-flex items-center gap-1 text-muted">
            <Clock className="size-3.5" />
            {shop.inventory.length ? `${shop.inventory.length} on lot` : "Call for lot"}
          </span>
        </div>
      </div>
    </Link>
  );
}
