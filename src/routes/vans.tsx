import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/vans")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
