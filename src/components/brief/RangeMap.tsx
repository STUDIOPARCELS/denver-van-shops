import { Link } from "@tanstack/react-router";
import { MAP_PINS, shopBySlug } from "@/lib/shops";

export function RangeMap() {
  return (
    <div className="overflow-hidden rounded-2xl bg-pine text-paper shadow-border">
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:p-8">
        <div className="sm:w-2/5">
          <p className="text-xs font-semibold uppercase tracking-mark text-sand">
            Front Range
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
            All of them fit in three days with Kohler.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-sand">
            Denver and Arvada on day one. Golden plus Boulder on day two. Loveland only if she
            wants a pop-top. Then point the van west.
          </p>
          <ol className="mt-5 space-y-2 text-sm">
            {[
              ["Denver", "Flippin + Featherbuilt"],
              ["Arvada", "Vanlife Customs (the lot)"],
              ["Golden / Boulder", "Foundation, Titan, Vansmith"],
              ["Loveland", "Pop-tops, optional"],
            ].map(([place, shops]) => (
              <li key={place} className="flex gap-3">
                <span className="w-28 shrink-0 font-medium">{place}</span>
                <span className="text-sand">{shops}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className="relative min-h-72 flex-1">
          <svg viewBox="0 0 100 86" className="size-full" aria-hidden="true">
            <path
              d="M8 78 C 18 52, 22 30, 30 10 L 38 6 C 48 18, 52 40, 62 70 L 8 78 Z"
              fill="rgba(231,220,200,0.12)"
            />
            <path
              d="M30 10 L 38 6 L 44 22 L 36 28 Z"
              fill="rgba(243,237,227,0.35)"
            />
            <text x="18" y="42" fill="#E7DCC8" fontSize="3.4" fontFamily="Figtree">
              Rockies
            </text>
            <line x1="40" y1="82" x2="92" y2="8" stroke="#E7DCC8" strokeOpacity="0.25" strokeWidth="0.4" />
            <text x="78" y="14" fill="#E7DCC8" fontSize="3" fontFamily="Figtree">
              I-25
            </text>
            <circle cx="56" cy="64" r="1.4" fill="#C45C26" />
            <text x="59" y="65.5" fill="#F3EDE3" fontSize="3.2" fontFamily="Figtree">
              Denver
            </text>
            {MAP_PINS.map((pin) => (
              <g key={pin.slug}>
                <circle cx={pin.x} cy={pin.y} r="1.7" fill="#C45C26" />
              </g>
            ))}
          </svg>
          <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-1">
            {MAP_PINS.map((pin) => {
              const shop = shopBySlug(pin.slug);
              if (!shop) return null;
              return (
                <Link
                  key={pin.slug}
                  to="/shop/$slug"
                  params={{ slug: shop.slug }}
                  className="rounded-full bg-paper/12 px-2.5 py-1 text-xs text-paper hover:bg-paper/20"
                >
                  {shop.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
