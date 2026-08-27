export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh overflow-x-hidden bg-bg text-cream">
      <main className="mx-auto w-full max-w-md px-4 pb-12 pt-6">{children}</main>
    </div>
  );
}
