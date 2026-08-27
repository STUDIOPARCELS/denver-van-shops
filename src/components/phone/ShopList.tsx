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
  const inventoryHref = shop.lotUrl ?? shop.website;

  return (
    <article className={`flex flex-col overflow-hidden rounded-xl ${tile.box}`}>
      <Link
        to="/shop/$slug"
        params={{ slug: shop.slug }}
        className="flex flex-col active:scale-press"
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
          className="h-28 w-full object-cover"
        />
      </Link>
      <div className="grid grid-cols-2 gap-1 p-2">
        <a
          href={shop.website}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center justify-center rounded-lg bg-ink text-kicker font-extrabold tracking-wide text-cream"
        >
          SITE
        </a>
        <a
          href={inventoryHref}
          target="_blank"
          rel="noreferrer"
          className="flex h-11 items-center justify-center rounded-lg bg-ink text-kicker font-extrabold tracking-wide text-cream"
        >
          INVENTORY
        </a>
      </div>
    </article>
  );
}
