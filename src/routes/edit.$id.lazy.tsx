import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/edit/$id")({
  component: Index,
});

function Index() {
  const { id } = Route.useParams();
  return <div>Post TYTETYSHSJ {id}</div>;
}
