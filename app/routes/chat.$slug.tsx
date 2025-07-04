import { useParams } from "react-router";

export default function ChatSlug() {
  const params = useParams();

  return (
    <>
      <main>
        <p>Chat page with slug: {params.slug}</p>
      </main>
    </>
  );
}
