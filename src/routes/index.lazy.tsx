import { createLazyFileRoute } from "@tanstack/react-router";
import Landing from "../component/modules/landing";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <Landing />;
}
