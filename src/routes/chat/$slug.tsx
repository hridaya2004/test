import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/chat/$slug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { slug } = useParams({ from: "/chat/$slug" });
  return <div>Hello "/chat/"! {slug}</div>;
}
