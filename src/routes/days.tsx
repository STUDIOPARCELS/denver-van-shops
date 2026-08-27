import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/days")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});
