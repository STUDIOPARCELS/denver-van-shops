import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const tabs = [
  {
    to: "/",
    label: "SHOPS",
    match: (p: string) => p === "/" || p.startsWith("/shops") || p.startsWith("/shop/"),
  },
  { to: "/days", label: "WEEK", match: (p: string) => p.startsWith("/days") },
] as const;

export function TabBar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md"
      style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-md grid-cols-2">
        {tabs.map((tab) => {
          const on = tab.match(pathname);
          return (
            <Link
              key={tab.to}
              to={tab.to}
              className={cn(
                "flex min-h-16 items-center justify-center font-display text-3xl tracking-wide",
                on ? "text-rust" : "text-muted",
              )}
            >
              <span className={cn("border-b-2 pb-0.5", on ? "border-rust" : "border-transparent")}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
