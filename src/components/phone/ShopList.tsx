import { Link } from "@tanstack/react-router";
import { forSaleInventory, shopsForLaura, type Shop } from "@/lib/shops";

const TILE = [
  { box: "bg-paper", name: "text-ink", meta: "text-stone" },
  { box: "bg-rust", name: "text-ink", meta: "text-ink/70" },
  { box: "bg-clay", name: "text-cream", meta: "text-cream/80" },
  { box: "bg-slate", name: "text-cream", meta: "text-cream/75" },
] as const;

export function ShopList() {
  const list = shopsForLaura();

  return (
    <div className="grid grid-cols-2 gap-2">
      {list.map((shop, i) => (
        <ShopCard key={shop.slug} shop={shop} tile={TILE[i % TILE.length]} />
      ))}
    </div>
  );
}

function lotLine(shop: Shop) {
  const n = forSaleInventory(shop).length;
  return n === 0 ? "NO LOT" : `${n} ON LOT`;
}

function ShopCard({
  shop,
  tile,
}: {
  shop: Shop;
  tile: (typeof TILE)[number];
}) {
  const img = shop.images[0];

  return (
    <Link
      to="/shop/$slug"
      params={{ slug: shop.slug }}
      className={`flex aspect-square flex-col overflow-hidden rounded-xl active:scale-press ${tile.box}`}
    >
      <div className="px-3 pt-3 pb-2">
        <h2 className={`font-display text-xl leading-none ${tile.name}`}>{shop.name}</h2>
        <p className={`mt-1 text-kicker font-extrabold tracking-wide ${tile.meta}`}>
          {shop.city.toUpperCase()} · {lotLine(shop)}
        </p>
      </div>
      <img
        src={img?.src ?? "/vans/mountain-pair.jpg"}
        alt={img?.alt ?? shop.name}
        className="min-h-0 w-full flex-1 object-cover"
      />
    </Link>
  );
}
