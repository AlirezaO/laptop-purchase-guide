import ChatClient from "@/components/custom_components/ChatClient";

export default async function App({ searchParams }) {
  const query = (await searchParams)?.search;
  const params = { search: query || null };

  return <ChatClient />;
}
