import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ShopList } from "@/components/phone/ShopList";
import { Shell } from "@/components/phone/Shell";
import { Button } from "@/components/ui/button";
import { TRIP } from "@/lib/shops";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <Shell>
      <div className="relative overflow-hidden rounded-xl">
        <img
          src="/vans/hero-northstar.jpg"
          alt="Sprinter van"
          className="h-40 w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 bg-ink px-4 py-3">
          <p className="text-kicker font-extrabold tracking-mark text-rust">DENVER SHOPS</p>
          <h1 className="mt-1 font-display text-4xl leading-none text-cream">{TRIP.who}</h1>
          <p className="mt-2 text-base font-extrabold tracking-wide text-cream">{TRIP.windowShort}</p>
        </div>
      </div>
      <p className="mt-4 text-base font-bold text-muted">Tap a shop.</p>
      <div className="mt-4">
        <ShopList />
      </div>
      <ShareLink />
    </Shell>
  );
}

function ShareLink() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href.split("?")[0];
    try {
      if (navigator.share) {
        await navigator.share({ title: "Denver Van Shops", url });
        return;
      }
    } catch {
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button variant="share" size="lg" className="mt-8 w-full" onClick={share}>
      {copied ? "COPIED" : "SHARE"}
    </Button>
  );
}
