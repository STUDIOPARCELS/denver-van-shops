import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BigActions } from "@/components/phone/BigActions";
import { Shell } from "@/components/phone/Shell";
import { Button } from "@/components/ui/button";
import { forSaleInventory, shopBySlug, shops } from "@/lib/shops";
import { money } from "@/lib/utils";

function AllCompanies() {
  return (
    <Link to="/" className="inline-block font-display text-2xl leading-none text-rust">
      ALL VAN COMPANIES
    </Link>
  );
}

export const Route = createFileRoute("/shop/$slug")({
  component: ShopPage,
  notFoundComponent: () => (
    <Shell>
      <p className="font-display text-4xl">NOT FOUND</p>
      <div className="mt-4">
        <AllCompanies />
      </div>
    </Shell>
  ),
});

function ShopPage() {
  const { slug } = Route.useParams();
  const shop = shopBySlug(slug);
  if (!shop) throw notFound();

  const lot = forSaleInventory(shop);
  const others = [...shops]
    .filter((s) => s.slug !== shop.slug)
    .sort((a, b) => a.driveMins - b.driveMins)
    .slice(0, 3);

  return (
    <Shell>
      <AllCompanies />

      <h1 className="mt-4 font-display text-5xl leading-none text-cream">{shop.name}</h1>
      <p className="mt-2 text-base font-extrabold tracking-wide text-muted">
        {shop.city.toUpperCase()} · {shop.driveMins} MIN
      </p>

      {shop.images[0] && (
        <img
          src={shop.images[0].src}
          alt={shop.images[0].alt}
          className="mt-4 h-36 w-full rounded-xl object-cover"
        />
      )}

      <section className="mt-8">
        <h2 className="font-display text-4xl text-cream">INVENTORY</h2>
        {shop.lotUrl && (
          <Button asChild variant="rust" size="lg" className="mt-3 w-full">
            <a href={shop.lotUrl} target="_blank" rel="noreferrer">
              VANS ON LOT
            </a>
          </Button>
        )}
        {lot.length === 0 ? (
          <p className="mt-3 rounded-xl bg-paper p-4 text-base font-bold text-ink ring-1 ring-line">
            {shop.lotUrl
              ? "Open VANS ON LOT for current listings."
              : "No vans on the lot. Call the shop."}
          </p>
        ) : (
          <div className="mt-3 space-y-4">
            {lot.map((van) => {
              const body = (
                <>
                  <div className="px-4 pt-4 pb-3">
                    <p className="font-display text-3xl leading-none text-ink">{van.name}</p>
                    <p className="mt-2 font-display text-4xl leading-none text-ink">
                      {van.price ? money(van.price) : "CALL"}
                    </p>
                    <p className="mt-2 text-base font-extrabold text-stone">
                      {van.year} · {van.chassis}
                    </p>
                  </div>
                  <img
                    src={van.image}
                    alt={`${van.name} — ${van.chassis}`}
                    className="h-36 w-full object-cover"
                  />
                </>
              );
              return shop.lotUrl ? (
                <a
                  key={van.name}
                  href={shop.lotUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden rounded-xl bg-paper ring-1 ring-line"
                >
                  {body}
                </a>
              ) : (
                <article key={van.name} className="overflow-hidden rounded-xl bg-paper ring-1 ring-line">
                  {body}
                </article>
              );
            })}
          </div>
        )}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-4xl text-cream">CALL</h2>
        <div className="mt-3 space-y-3 rounded-xl bg-paper p-4 ring-1 ring-line">
          {shop.phone && (
            <p className="font-display text-4xl leading-none text-ink">{shop.phone}</p>
          )}
          {shop.email && <p className="text-base font-bold text-stone">{shop.email}</p>}
          <p className="font-display text-2xl leading-snug text-ink">{shop.address}</p>
          <p className="text-base font-bold text-stone">{shop.visit}</p>
          <BigActions phone={shop.phone} mapsQuery={shop.mapsQuery} website={shop.website} />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl text-cream">NEARBY</h2>
        <div className="mt-3 space-y-2">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/shop/$slug"
              params={{ slug: s.slug }}
              className="flex items-center justify-between rounded-xl bg-paper px-4 py-4 ring-1 ring-line"
            >
              <span className="font-display text-2xl text-ink">{s.name}</span>
              <span className="text-base font-extrabold tracking-wide text-stone">
                {s.city.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
