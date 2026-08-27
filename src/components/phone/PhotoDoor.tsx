import { Link } from "@tanstack/react-router";

function Frame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="aspect-door w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-ink px-4 py-3.5">
        <p className="font-display text-2xl leading-none tracking-wide text-cream">{label}</p>
      </div>
    </div>
  );
}

export function PhotoDoor({
  to,
  slug,
  src,
  alt,
  label,
}: {
  to: "/vans" | "/shops" | "/days" | "/shop/$slug";
  slug?: string;
  src: string;
  alt: string;
  label: string;
}) {
  const className = "block overflow-hidden rounded-xl active:scale-press";
  if (to === "/shop/$slug" && slug) {
    return (
      <Link to="/shop/$slug" params={{ slug }} className={className}>
        <Frame src={src} alt={alt} label={label} />
      </Link>
    );
  }
  return (
    <Link to={to as "/vans" | "/shops" | "/days"} className={className}>
      <Frame src={src} alt={alt} label={label} />
    </Link>
  );
}
