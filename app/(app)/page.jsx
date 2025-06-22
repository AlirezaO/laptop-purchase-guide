import SimpleButton from "@/components/custom_components/Buttons/SimpleButton";
import { PlusIcon } from "lucide-react";

export default async function App({ searchParams }) {
  const query = (await searchParams).search;
  //   throw new Error("This is a test error");
  const params = { search: query || null };

  return (
    <main className="flex flex-col items-center justify-center w-full gap-4 overflow-y-scroll p-10">
      <section className="flex flex-row gap-2"></section>
      {query && <p className="text-white">Search value: {query}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
    </main>
  );
}
