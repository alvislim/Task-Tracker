import { createLazyFileRoute } from "@tanstack/react-router";
import Edit from "../component/modules/edit";

export const Route = createLazyFileRoute("/edit/$id")({
  component: Index,
});

function Index() {
  return <Edit />;
}
